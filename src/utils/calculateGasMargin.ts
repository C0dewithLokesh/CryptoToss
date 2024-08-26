import { BigNumber } from "@ethersproject/bignumber";

export const calculateGasMargin = (value: BigNumber) => {
  const bigIntValue = value.toBigInt();
  const margin = 1000n;
  const base = 10000n;
  return (bigIntValue * (base + margin)) / base;
};
