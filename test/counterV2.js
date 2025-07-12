const { expect } = require('chai');
const { ethers, upgrades } = require('hardhat');

describe('CounterV2 (Upgradeable)', function () {
  let other, proxy, proxyAddress;

  beforeEach(async () => {
    [, other] = await ethers.getSigners();

    // For tests, deploy a new proxy
    const Counter = await ethers.getContractFactory('Counter');
    proxy = await upgrades.deployProxy(Counter, [0], {
      initializer: 'initialize',
    });
    await proxy.waitForDeployment();
    proxyAddress = await proxy.getAddress();

    // Upgrade to CounterV2 for testing V2 features
    const CounterV2 = await ethers.getContractFactory('CounterV2');
    proxy = await upgrades.upgradeProxy(proxyAddress, CounterV2);
  });

  it('should only allow the owner to upgrade', async () => {
    const CounterV2WithOther = await ethers.getContractFactory('CounterV2', other);
    await expect(upgrades.upgradeProxy(proxyAddress, CounterV2WithOther)).to.be.reverted;
  });

  it('should initialize with the correct count', async () => {
    expect(await proxy.count()).to.equal(0);
  });

  it('should increment the count', async () => {
    await proxy.increment();
    expect(await proxy.count()).to.equal(1);
  });

  it('should decrement the count', async () => {
    await proxy.increment(); // count = 1
    await proxy.decrement(); // count = 0
    expect(await proxy.count()).to.equal(0);
  });

  it('should return the current count', async () => {
    expect(await proxy.count()).to.equal(0);
  });
});
