import { useWallet } from "@/hooks/useWallet";
import { useWeb3React } from "@web3-react/core";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

const FlipCoinBtn = () => {
  const { account } = useWeb3React();
  const { isActive, isMetaMask, activate } = useWallet();

  return (
    <Button
      variant={"outline"}
      className={`bg-[#433d49] hover:bg-[#433d49] border-[#50464b] py-1 px-7 w-auto h-auto`}
      onClick={() => {
        if (!isMetaMask) {
          toast({ description: "MetaMask is required" });
        }
        if (!account || !isActive) {
          activate();
        }
      }}
    >
      <span className="w-full h-full text-transparent bg-clip-text bg-gradient-to-b from-[#fbff29] to-[#f92d00] text-[39px] leading-[45px] tracking-normal font-bold">
        Flip
      </span>
    </Button>
  );
};

export default FlipCoinBtn;
