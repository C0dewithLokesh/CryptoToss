import { toast } from "@/components/ui/use-toast";
import { useWallet } from "@/hooks/useWallet";
import { useWeb3React } from "@web3-react/core";
import { LogOut, Wallet } from "lucide-react";
import PrimaryButton from "../PrimaryButton";

const ConnectWallet = () => {
  const { account } = useWeb3React();
  const { activate, isActive, isMetaMask, deactivate } = useWallet();

  if (account && isActive) {
    return (
      <div className="flex items-center gap-1">
        <PrimaryButton
          title={
            account.substring(0, 5) +
            "..." +
            account.substring(account.length - 5)
          }
          icon={<Wallet size={25} />}
          textClasses={"max-sm:hidden"}
        />
        
        <PrimaryButton
          title="Disconnect"
          otherClasses="flex !bg-[#DC2626]"
          icon={<LogOut size={25} />}
          textClasses={"max-sm:hidden"}
          onClick={deactivate}
        />
      </div>
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
