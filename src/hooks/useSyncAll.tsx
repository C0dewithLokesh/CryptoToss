import { profitState } from "@/store/coinFlip";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { useReadFunction } from "./useReadFunction";

const useSyncAll = () => {
  const setProfit = useSetRecoilState(profitState);
  const { value, call: getProfit } = useReadFunction("getPlayerBalance", "eth");
  const syncAll = useCallback(async () => {
    await getProfit();
    setProfit(value);
  }, [getProfit, setProfit, value]);

  return { syncAll };
};

export default useSyncAll;
