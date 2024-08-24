import { MAX_BET, MIN_BET } from "@/contants";
import { betAmountState } from "@/store/coinFlip";
import { useRecoilState } from "recoil";
import { Button } from "../ui/button";

const MinMaxBtn = () => {
  const [betAmount, setBetAmount] = useRecoilState(betAmountState);

  return (
    <div className="flex items-center justify-between gap-10">
      <Button
        variant={"outline"}
        disabled={betAmount === MIN_BET}
        className={`bg-[#433d49] hover:bg-[#433d49] border-[#50464b] shadow-sm hover:shadow-[0px_1px_10px_2px_#45fd09]`}
        onClick={() => setBetAmount(MIN_BET)}
      >
        <span className="text-white text-sm">MIN</span>
      </Button>

      <Button
        disabled={betAmount === MAX_BET}
        variant={"outline"}
        className={`bg-[#433d49] hover:bg-[#433d49] border-[#50464b] shadow-sm hover:shadow-[0px_1px_10px_2px_#45fd09]`}
        onClick={() => setBetAmount(MAX_BET)}
      >
        <span className="text-white text-sm">MAX</span>
      </Button>
    </div>
  );
};

export default MinMaxBtn;
