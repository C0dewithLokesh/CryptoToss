import { BET_STEP, MAX_BET, MIN_BET } from "@/contants";
import { betAmountState } from "@/store/coinFlip";
import { Minus, Plus } from "lucide-react";
import { useRecoilState } from "recoil";
import { Button } from "../ui/button";

const BetAmount = () => {
  const [betAmount, setBetAmount] = useRecoilState(betAmountState);

  return (
    <div className="flex items-end justify-between gap-4">
      <Button
        disabled={betAmount === MIN_BET}
        className="p-2 bg-[#433d49] rounded-full text-white cursor-pointer shadow-sm hover:shadow-[0px_1px_10px_2px_#45fd09] h-auto"
        onClick={() => {
          if (betAmount === MIN_BET) return;
          setBetAmount((prevAmount) =>
            Number((prevAmount - BET_STEP).toFixed(3))
          );
        }}
      >
        <Minus size={16} />
      </Button>

      <div className="flex flex-col items-center mb-1 min-w-[125px]">
        <p
          className="text-white text-[10px] font-bold leading-[11px]"
          style={{ textShadow: "0 0 7px #fff" }}
        >
          BET AMOUNT
        </p>
        <p
          className="text-white text-[25px] font-bold leading-[29px] whitespace-nowrap"
          style={{ textShadow: "0 0 7px #ffffff6b" }}
        >
          {betAmount} ETH
        </p>
      </div>

      <Button
        disabled={betAmount === MAX_BET}
        className="p-2 bg-[#433d49] rounded-full text-white cursor-pointer shadow-sm hover:shadow-[0px_1px_10px_2px_#45fd09] h-auto"
        onClick={() => {
          if (betAmount === MAX_BET) return;
          setBetAmount((prevAmount) =>
            Number((prevAmount + BET_STEP).toFixed(3))
          );
        }}
      >
        <Plus size={16} />
      </Button>
    </div>
  );
};

export default BetAmount;
