import { betAmountState } from "@/store/coinFlip";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useFunction } from "./useFunction";

export const useGame = () => {
  const [betAmount, setBetAmount] = useRecoilState(betAmountState);
  const [betChoice, setBetChoice] = useState<number | null>(null);
  const [shouldFlip, setShouldFlip] = useState(false);

  const doFlip = useFunction("bet", 0.001, [betChoice!]);
  const collectFunds = useFunction("withdrawPlayerBalance");

  const handleBet = useCallback((choice: number) => {
    setBetChoice(choice);
    setShouldFlip(true);
  }, []);

  useEffect(() => {
    if (shouldFlip) {
      doFlip();
      setShouldFlip(false);
    }
  }, [shouldFlip, doFlip]);

  return {
    betAmount,
    setBetAmount,
    handleBet,
    collectFunds,
  };
};
