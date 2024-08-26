import { formatEther } from "@ethersproject/units";

import { toast } from "@/components/ui/use-toast";
import { useEventCallback } from "./useEventCallback";
import { useReadFunction } from "./useReadFunction";

export const useBetResult = (account: string) => {
  const { call } = useReadFunction("getPlayerBalance", "eth");


  useEventCallback(
    "BetResult",
    (address, win, value) => {
      if (address === account) {
        call();
        console.log("w", win, value);
        toast({
          title: win
            ? `You won ${formatEther(value)} ETH!`
            : `You lost ${formatEther(value)} ETH. Let's try again!`,
        });
      } else {
        toast({ title: "Something went wrong!" });
      }
    },
    [account]
  );
};
