const hre = require("hardhat");
const ethers = hre.ethers;
const fs = require("fs");

const COORDINATOR = process.env.COORDINATOR;
const KEY_HASH = process.env.KEY_HASH;
const SUBSCRIPTION_ID = process.env.SUBSCRIPTION_ID;

async function main() {
  const CoinFlip = await ethers.getContractFactory("CoinFlip");
  const coinFlip = await CoinFlip.deploy(COORDINATOR, KEY_HASH, SUBSCRIPTION_ID, { value: ethers.parseEther("0.2") });
  await coinFlip.waitForDeployment();
  const coinFlipAddress = await coinFlip.getAddress();

  console.log("\n");
  console.log("CoinFlip deployed to: ", coinFlipAddress);
  console.log("\n");

  /** WAITING:
   ************/
  await coinFlip.deploymentTransaction()?.wait(2);

  // Get CoinFlip ABI
  const coinFlipABI = JSON.parse(fs.readFileSync("./artifacts/contracts/CoinFlip.sol/CoinFlip.json", "utf8"));
  const abi = JSON.stringify(coinFlipABI.abi);

  console.log("CoinFlip ABI:");
  console.log("\n");
  console.log(abi);
  console.log("\n");

  /** VERIFICATION:
   *****************/
  await hre.run("verify:verify", {
    address: coinFlipAddress,
    constructorArguments: [COORDINATOR, KEY_HASH, SUBSCRIPTION_ID],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
