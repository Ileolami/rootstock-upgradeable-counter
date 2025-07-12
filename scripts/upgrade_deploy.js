// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main() {
  const CounterV2 = await ethers.getContractFactory('CounterV2');
  console.log('Upgrading Counter...');
  await upgrades.upgradeProxy('0x5DAC43C0268DeE8820cDa0590C8B5A038e011E56', CounterV2);
  console.log('Counter upgraded');
}

main();
