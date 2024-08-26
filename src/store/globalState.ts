import { atom } from "recoil";

export const transactionLoadingState = atom<boolean>({
  key: "transactionLoadingState",
  default: false,
});
