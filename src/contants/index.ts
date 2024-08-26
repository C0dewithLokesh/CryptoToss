import { SupportedChains } from "@/types";
import { COINFLIP_ABI } from "./coinFlipAbi";

export const MIN_BET = 0.025;
export const MAX_BET = 0.5;
export const BET_STEP = 0.025;

// [Ethereum Mainnet, Sepolia Testnet]
export const SUPPORTED_CHAINS: SupportedChains = {
  // 1: {
  //   name: "MainNet",
  //   etherScanPrefix: "",
  // },
  11155111: {
    name: "Sepolia",
    etherScanPrefix: "sepolia.",
  },
} as const;

export const NETWORK_DETAILS = {
  // mainnet: {
  //   chainId: "0x1", // Ethereum Mainnet
  //   chainName: "Ethereum Mainnet",
  //   nativeCurrency: {
  //     name: "ETH",
  //     symbol: "ETH",
  //     decimals: 18,
  //   },
  //   rpcUrls: ["https://eth-mainnet.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY"],
  //   blockExplorerUrls: ["https://etherscan.io"],
  // },
  sepolia: {
    chainId: "0xaa36a7", // Sepolia Testnet
    chainName: "Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY"],
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
  },
};

export const WAITFOR_CONFIRMATIONS = 2;

// export const COINFLIP_ADDRESS = "0x9D7f74d0C41E726EC95884E0e97Fa6129e3b5E99"; // VRF v2.5 on Sepolia
export const COINFLIP_ADDRESS = "0x9abee2aa8352f0b073c165e09b84ac67db59efd3"; // VRF v2.5 on Sepolia

export const COINFLIP = {
  address: COINFLIP_ADDRESS,
  abi: COINFLIP_ABI,
};
