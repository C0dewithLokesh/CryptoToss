import { formatEther } from "@ethersproject/units";

import { toast } from "@/components/ui/use-toast";
import { betLoadingState } from "@/store/betState";
import { useSetRecoilState } from "recoil";
import { useEventCallback } from "./useEventCallback";
import useSyncAll from "./useSyncAll";

export const useBetResult = (account: string) => {
  const { syncAll } = useSyncAll();
  const setBetLoading = useSetRecoilState(betLoadingState);

  useEventCallback(
    "BetResult",
    (address, win, value) => {
      if (address === account) {
        syncAll();
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
