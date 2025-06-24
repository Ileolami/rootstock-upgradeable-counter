const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Counter V1", function () {
  let proxy, Counter;

  before(async () => {
    Counter = await ethers.getContractFactory("Counter");
    proxy = await upgrades.deployProxy(Counter, [0], { initializer: "initialize" });
    await proxy.waitForDeployment();
  });

  it("should initialize with count = 0", async () => {
    expect(await proxy.count()).to.equal(0);
  });

  it("should increment count", async () => {
    await proxy.increment();
    expect(await proxy.count()).to.equal(1);
  });

  it("should return the current count", async () => {
    expect(await proxy.count()).to.equal(1);
  });
});
