const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Upgradeable Counter", function () {
  let proxy, CounterV2, upgraded;

  it("should deploy and store count", async () => {
    const Counter = await ethers.getContractFactory("Counter");
    proxy = await upgrades.deployProxy(Counter, [5], { initializer: 'initialize' });
    expect(await proxy.count()).to.equal(5);
  });

  it("should upgrade to V2 and decrement", async () => {
    CounterV2 = await ethers.getContractFactory("CounterV2");
    upgraded = await upgrades.upgradeProxy(proxy, CounterV2);
    await upgraded.decrement();
    expect(await upgraded.count()).to.equal(4);
  });

  it("should allow only owner to upgrade", async () => {
    const [owner, other] = await ethers.getSigners();
    const CounterV3 = await ethers.getContractFactory("CounterV2", other);
    await expect(upgrades.upgradeProxy(proxy, CounterV3)).to.be.reverted;
  });
});
