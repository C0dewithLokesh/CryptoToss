import { atom } from "recoil";

export const selectedCoinState = atom<"head" | "tail">({
  key: "selectedCoinState",
  default: "head",
});

export const betAmountState = atom<number>({
  key: "betAmountState",
  default: 0.1,
});
