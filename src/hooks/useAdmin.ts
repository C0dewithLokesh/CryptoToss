import { useEffect, useMemo, useState } from "react";

import { useWeb3React } from "@web3-react/core";
import { useCoinFlipContract } from "./useContract";
import { useFunction } from "./useFunction";

export const useAdmin = () => {
  const { account } = useWeb3React();
  const contract = useCoinFlipContract();
  const [deposit, setDeposit] = useState(1);
  const [ownerAddress, setOwnerAddress] = useState<string | null>(null);
  const doDeposit = useFunction("deposit", deposit);
  const doWithdrawAll = useFunction("withdrawContractBalance");

  useEffect(() => {
    if (!contract) return;

    const fetchOwnerAddress = async () => {
      try {
        const owner = await contract.functions.owner();
        setOwnerAddress(owner);
      } catch (error) {
        console.error("Failed to fetch owner address", error);
      }
    };

    fetchOwnerAddress();
  }, [contract]);

  const isOwner = useMemo(
    () =>
      ownerAddress && ownerAddress[0]?.toLowerCase() === account?.toLowerCase(),
    [ownerAddress, account]
  );

  return {
    deposit,
    setDeposit,
    ownerAddress,
    doDeposit,
    doWithdrawAll,
    isOwner,
  };
};
