import { useCallback, useEffect, useMemo, useState } from "react";

import { useCoinFlipContract } from "./useContract";
import { formatResult } from "@/utils/formatResult";

export const useReadFunction = (functionName: string, type: string) => {
  const contract = useCoinFlipContract();
  const [value, setValue] = useState();

  const doCall = useCallback(async () => {
    if (!contract) return;

    try {
      const result = await contract[functionName]();
      setValue(formatResult(result, type));
    } catch (error) {
      console.error("Error calling contract function:", error);
    }
  }, [contract, functionName, type]);

  useEffect(() => {
    if (contract) doCall();
  }, [contract, doCall]);

  return useMemo(() => ({ call: doCall, value }), [doCall, value]);
};
