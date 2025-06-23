const { ethers, upgrades } = require("hardhat");

async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const proxy = await upgrades.deployProxy(Counter, [0], { initializer: 'initialize' });

  // Wait for the deployment to be mined
  await proxy.waitForDeployment();
  console.log("Proxy deployed to:", await proxy.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
