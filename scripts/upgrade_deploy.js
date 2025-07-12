const { ethers, upgrades } = require('hardhat');
const fs = require('fs');
const path = require('path');

async function main() {
  // Read proxy address from OpenZeppelin file
  const networkId = 31; // RSK Testnet
  const filePath = path.join(__dirname, '..', '.openzeppelin', `unknown-${networkId}.json`);

  let proxyAddress;
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    proxyAddress = data.proxies[0].address;
    console.log(`Found proxy address: ${proxyAddress}`);
  } catch (error) {
    console.error('Error reading proxy address:', error);
    process.exit(1);
  }

  // Get the contract factories
  const Counter = await ethers.getContractFactory('Counter');
  const CounterV2 = await ethers.getContractFactory('CounterV2');

  try {
    console.log('Upgrading Counter...');
    await upgrades.upgradeProxy(proxyAddress, CounterV2);
    console.log('Counter upgraded successfully');
  } catch (error) {
    if (error.message.includes('is not registered')) {
      console.log('Proxy not registered. Attempting to import and upgrade...');
      
      // Force import the proxy
      await upgrades.forceImport(proxyAddress, Counter);
      console.log('Proxy imported successfully');
      
      // Now try upgrading again
      await upgrades.upgradeProxy(proxyAddress, CounterV2);
      console.log('Counter upgraded successfully after import');
    } else {
      // If it's a different error, rethrow it
      throw error;
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
