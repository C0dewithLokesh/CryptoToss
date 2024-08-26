import { NETWORK_DETAILS, SUPPORTED_CHAINS } from "@/contants";
import { switchNetwork } from "@/lib/network";
import { walletState } from "@/store/walletState";
import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useMemo } from "react";
import { useSetRecoilState } from "recoil";

export const useWallet = () => {
  const { isActive, chainId, connector } = useWeb3React();
  const setWallet = useSetRecoilState(walletState);

  const isValidChain = useMemo(
    () => (chainId && SUPPORTED_CHAINS[chainId] ? true : false),
    [chainId]
  );

  useEffect(() => {
    const previousConnection = localStorage.getItem("walletConnected");
    if (previousConnection && !!window.ethereum?.isMetaMask) {
      // Need to wait for the ethereum to be injected, just in the next event loop
      setTimeout(() => {
        connector.activate();
      }, 0);
    }
  }, [connector]);

  useEffect(() => {
    if (chainId && !isValidChain) {
      const handleSwitchNetwork = async () => {
        try {
          await switchNetwork(
            NETWORK_DETAILS.sepolia.chainId,
            NETWORK_DETAILS.sepolia
          );
        } catch (error) {
          console.log("Error while switching the network", error);
        }
      };
      handleSwitchNetwork();
    }
  }, [chainId, isValidChain]);

  const handleActivate = useCallback(async () => {
    try {
      await connector.activate();
      setWallet({ isActive: true, chainId: chainId || null });
      localStorage.setItem("walletConnected", "true");
    } catch (error: any) {
      console.error("Failed to activate wallet", error.code);

      if (error.code === 4902) {
        await switchNetwork(
          NETWORK_DETAILS.sepolia.chainId,
          NETWORK_DETAILS.sepolia
        );
        await connector.activate();
        localStorage.setItem("walletConnected", "true");
        setWallet({ isActive: true, chainId: chainId || null });
      } else {
        localStorage.removeItem("walletConnected");
      }
    }
  }, [connector, chainId, setWallet]);

  const handleDeactivate = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    connector.deactivate ? connector.deactivate() : connector.resetState();
    setWallet({ isActive: false, chainId: null });
    localStorage.removeItem("walletConnected");
  }, [connector, setWallet]);

  return useMemo(
    () => ({
      activate: handleActivate,
      isActive,
      deactivate: handleDeactivate,
      isMetaMask: !!window.ethereum?.isMetaMask,
      isValidChain,
    }),
    [handleActivate, isActive, handleDeactivate, isValidChain]
  );
};
