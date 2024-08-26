import { atom } from "recoil";

export const betLoadingState = atom<boolean>({
  key: "betLoadingState",
  default: false,
});
