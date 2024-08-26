import { atom } from "recoil";

export const selectedCoinState = atom<"head" | "tail">({
  key: "selectedCoinState",
  default: "head",
});

export const betAmountState = atom<number>({
  key: "betAmountState",
  default: 0.005,
});

export const addTransactionState = atom<any>({
  key: "addTransactionState",
  default: {},
});

export const contactBalanceState = atom({
  key: "contactBalanceState",
  default: null,
});

export const profitState = atom<number | null | undefined>({
  key: "profitState",
  default: null,
});
