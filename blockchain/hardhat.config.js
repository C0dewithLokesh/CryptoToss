require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-verify");
require("solidity-coverage");

const dotenv = require("dotenv");
dotenv.config();

const privateKey = process.env.PRIVATE_KEY ?? "";

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999,
      },
    },
  },
  networks: {
    main: {
      url: `${process.env.RPC_URL_ETH}`,
      accounts: [privateKey],
      chainId: 1,
    },
    sepolia: {
      url: `${process.env.RPC_URL_SEPOLIA}`,
      accounts: [privateKey],
      chainId: 11155111,
    },
  },
  gasReporter: {
    enabled: !!process.env.REPORT_GAS,
  },
  contractSizer: {
    runOnCompile: true,
    strict: true,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  // docgen: {
  //   path: "./docs",
  //   clear: true,
  //   runOnCompile: true,
  // },
};
