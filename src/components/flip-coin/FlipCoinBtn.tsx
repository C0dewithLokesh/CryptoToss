import { toast } from "@/components/ui/use-toast";
import { useGame } from "@/hooks/useGame";
import { useWallet } from "@/hooks/useWallet";
import { betLoadingState } from "@/store/betState";
import { selectedCoinState } from "@/store/coinFlip";
import { useWeb3React } from "@web3-react/core";
import { useRecoilValue } from "recoil";
import { Button } from "../ui/button";

const FlipCoinBtn = () => {
  const { account } = useWeb3React();
  const { isActive, isMetaMask, activate, isValidChain } = useWallet();
  const selectedCoin = useRecoilValue(selectedCoinState);
  const { handleBet } = useGame();
  const betLoading = useRecoilValue(betLoadingState);

  return (
    <Button
      variant={"outline"}
      disabled={betLoading}
      className={`bg-[#433d49] hover:bg-[#433d49] border-[#50464b] py-1 px-7 w-auto h-auto`}
      onClick={() => {
        if (!isMetaMask) {
          toast({ description: "MetaMask is required" });
        }
        if (!account || !isActive) {
          activate();
        }
        if (!isValidChain && isActive) {
          toast({ description: "Invalid chain, supported chains: Sepolia" });
        }
        if (selectedCoin === "head") {
          handleBet(0);
        } else if (selectedCoin === "tail") {
          handleBet(1);
        } else {
          toast({ description: "Coin not selected" });
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
