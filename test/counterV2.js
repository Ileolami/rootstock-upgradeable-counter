const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("CounterV2 (Upgradeable)", function () {
  let owner, other, proxy, CounterV2;

  it("should only allow the owner to upgrade", async () => {
    const [owner, other] = await ethers.getSigners();

    const CounterV2 = await ethers.getContractFactory("CounterV2", other);

    await expect(upgrades.upgradeProxy(proxy, CounterV2)).to.be.reverted;
  });

  beforeEach(async () => {
    owner = await ethers.getSigners();
    CounterV2 = await ethers.getContractFactory("CounterV2");
    proxy = await upgrades.deployProxy(CounterV2, [0], {
      initializer: "initialize",
    });
    await proxy.waitForDeployment();
  });

  it("should initialize with the correct count", async () => {
    expect(await proxy.count()).to.equal(0);
  });

  it("should increment the count", async () => {
    await proxy.increment();
    expect(await proxy.count()).to.equal(1);
  });

  it("should decrement the count", async () => {
    await proxy.increment(); // count = 1
    await proxy.decrement(); // count = 0
    expect(await proxy.count()).to.equal(0);
  });

    it("should return the current count", async () => {
    expect(await proxy.count()).to.equal(0);
  });
});
