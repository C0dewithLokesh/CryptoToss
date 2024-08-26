import { SUPPORTED_CHAINS } from "@/contants";
import { useWeb3React } from "@web3-react/core";

export const useEtherScanLink = (id: string, type: string) => {
  const { chainId } = useWeb3React();

  if (type === "address") {
    return `https://${
      SUPPORTED_CHAINS[chainId!]?.etherScanPrefix
    }etherscan.io/address/${id}`;
  }
  return `https://${
    SUPPORTED_CHAINS[chainId!]?.etherScanPrefix
  }etherscan.io/tx/${id}`;
};
