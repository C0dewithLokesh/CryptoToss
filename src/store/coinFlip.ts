import { atom } from "recoil";

export const selectedCoinState = atom<"head" | "tail">({
  key: "selectedCoinState",
  default: "head",
});

export const betAmountState = atom<number>({
  key: "betAmountState",
  default: 0.1,
});

export const addTransactionState = atom({
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
