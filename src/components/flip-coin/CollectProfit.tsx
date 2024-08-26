import { useGame } from "@/hooks/useGame";
import { useReadFunction } from "@/hooks/useReadFunction";
import { profitState } from "@/store/coinFlip";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const CollectProfit = () => {
  const { value } = useReadFunction("getPlayerBalance", "eth");
  const [profit, setProfit] = useRecoilState(profitState);
  const { collectFunds } = useGame();

  useEffect(() => {
    if (value !== undefined) {
      setProfit(value);
    }
  }, [value, setProfit]);

  if (!profit || profit == 0.0) return;

  return (
    <div className="flex items-center gap-3 justify-between">
      <p
        className="text-white text-[10px] font-bold leading-[11px] uppercase"
        style={{ textShadow: "0 0 7px #fff" }}
      >
        Your Profit <span className="text-[#fbff29]">{profit}</span>
      </p>

      {profit && (
        <p
          className="text-transparent cursor-pointer bg-clip-text bg-gradient-to-b from-[#fbff29] to-[#f92d00] text-[23px] font-semibold"
          onClick={collectFunds}
        >
          Collect
        </p>
      )}
    </div>
  );
};

export default CollectProfit;
