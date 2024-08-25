export const MIN_BET = 0.025;
export const MAX_BET = 0.5;
export const BET_STEP = 0.025;

// [Ethereum Mainnet, Sepolia Testnet]
export const SUPPORTED_CHAINS = [
  // 1,
  11155111,
];

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
