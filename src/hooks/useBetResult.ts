import { formatEther } from "@ethersproject/units";

import { toast } from "@/components/ui/use-toast";
import { betLoadingState } from "@/store/betState";
import { profitState } from "@/store/coinFlip";
import { useSetRecoilState } from "recoil";
import { useEventCallback } from "./useEventCallback";
import { useReadFunction } from "./useReadFunction";

export const useBetResult = (account: string) => {
  const { call, value: profit } = useReadFunction("getPlayerBalance", "eth");

  const setProfit = useSetRecoilState(profitState);
  const setBetLoading = useSetRecoilState(betLoadingState);

  useEventCallback(
    "BetResult",
    (address, win, value) => {
      if (address === account) {
        call();
        setProfit(profit);
        setBetLoading(false);
        toast({
          title: win
            ? `You won ${formatEther(value)} ETH!`
            : `You lost. Let's try again!`,
        });
      } else {
        setBetLoading(false);
        toast({ title: "Something went wrong!" });
      }
    },
    [account]
  );
};
