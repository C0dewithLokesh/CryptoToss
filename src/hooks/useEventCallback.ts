import { useCallback, useEffect } from "react";

import { BigNumberish } from "@ethersproject/bignumber";
import { useCoinFlipContract } from "./useContract";

export const useEventCallback = (
  name: string,
  callback: (address: string, win: any, value: BigNumberish) => void,
  deps: string[]
) => {
  const contract = useCoinFlipContract();
  const memoizedCallback = useCallback(callback, [callback, ...deps]);

  useEffect(() => {
    if (!contract) {
      // console.error(`Contract is not available`);
      return;
    }

    if (
      typeof contract.on !== "function" ||
      typeof contract.off !== "function"
    ) {
      console.error(`Contract does not support event listeners`);
      return;
    }

    if (!contract.filters[name]) {
      console.error(`Event ${name} not found on contract`);
      return;
    }

    contract.on(name, memoizedCallback);

    return () => {
      contract.off(name, memoizedCallback);
    };
  }, [name, contract, memoizedCallback]);
};
