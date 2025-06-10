// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const CounterV2 = await ethers.getContractFactory('CounterV2');
  console.log('Upgrading Counter...');
  await upgrades.upgradeProxy('0xDC6346376322419DC86Ca68b54F34BBA4b351BE4', CounterV2);
  console.log('Counter upgraded');
}

main();