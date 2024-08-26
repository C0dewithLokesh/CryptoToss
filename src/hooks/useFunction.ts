import { useCallback } from "react";

import { parseEther } from "@ethersproject/units";

import { toast } from "@/components/ui/use-toast";
import { addTransactionState } from "@/store/coinFlip";
import { calculateGasMargin } from "@/utils/calculateGasMargin";
import { useSetRecoilState } from "recoil";
import { useCoinFlipContract } from "./useContract";

export const useFunction = (
  functionName: string,
  rawValue?: number,
  args: number[] = []
) => {
  const contract = useCoinFlipContract();
  const setAddTransaction = useSetRecoilState(addTransactionState);

  const doCall = useCallback(async () => {
    if (!contract) return;

    const parsedValue = rawValue
      ? parseEther(`${rawValue}`).toString()
      : undefined;

    try {
      const estimatedGas = await contract.estimateGas[functionName](...args, {
        value: parsedValue,
      });

      const { hash, from, value, wait } = await contract[functionName](
        ...args,
        {
          value: parsedValue,
          gasLimit: calculateGasMargin(estimatedGas),
        }
      );
      if (functionName !== "withdrawPlayerBalance")
        setAddTransaction({ hash, from, value, wait });
    } catch (error: any) {
      toast({
        description:
          error.reason ?? error.message ?? "Oops something went wrong",
      });
    }
  }, [contract, rawValue, functionName, args, setAddTransaction]);

  return doCall;
};
