import { toast } from "@/components/ui/use-toast";
import { useWallet } from "@/hooks/useWallet";
import { useWeb3React } from "@web3-react/core";
import { Wallet } from "lucide-react";
import PrimaryButton from "../PrimaryButton";

const ConnectWallet = () => {
  const { account } = useWeb3React();
  const { activate, isActive, isMetaMask } = useWallet();

  if (account && isActive) {
    return (
      <PrimaryButton
        title={
          account.substring(0, 5) +
          "..." +
          account.substring(account.length - 5)
        }
        icon={<Wallet size={25} />}
        textClasses={"max-sm:hidden"}
        onClick={activate}
      />
    );
  }

  return (
    <PrimaryButton
      title="Connect Wallet"
      icon={<Wallet size={25} />}
      textClasses={"max-sm:hidden"}
      onClick={() => {
        if (!isMetaMask) {
          toast({ description: "MetaMask is required" });
        }
        activate();
      }}
    />
  );
};

export default ConnectWallet;
