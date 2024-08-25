import { atom } from "recoil";

interface WalletState {
  isActive: boolean;
  chainId: number | null;
}

export const walletState = atom<WalletState>({
  key: "walletState",
  default: {
    isActive: false,
    chainId: null,
  },
});
