import { Wallet } from "lucide-react";
import PrimaryButton from "../PrimaryButton";

const ConnectWallet = () => {
  return (
    <PrimaryButton
      title="Connect Wallet"
      icon={<Wallet size={25} />}
      textClasses={"max-sm:hidden"}
    />
  );
};

export default ConnectWallet;
