// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const CounterV2 = await ethers.getContractFactory('CounterV2');
  console.log('Upgrading Counter...');
  await upgrades.upgradeProxy('0xcd2d474DAac39639a79BD2F71d407197290A5DB0', CounterV2);
  console.log('Counter upgraded');
}

main();