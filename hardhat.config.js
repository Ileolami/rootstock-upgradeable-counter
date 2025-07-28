require('@nomicfoundation/hardhat-toolbox');
require('@openzeppelin/hardhat-upgrades');
require('@nomicfoundation/hardhat-verify');
require('dotenv').config();

module.exports = {
  solidity: '0.8.28',
  networks: {
    RSK_Testnet: {
      url: 'https://public-node.testnet.rsk.co/',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 31,
    },
  },
  etherscan: {
    apiKey: {
      RSK_Testnet: process.env.RSK_Testnet_EXPLORER_API_KEY,
    },
    customChains: [
      {
        network: 'rskTestnet',
        chainId: 31,
        urls: {
          apiURL: 'https://rootstock-testnet.blockscout.com/api',
          browserURL: 'https://rootstock-testnet.blockscout.com',
        },
      },
    ],
  },
};
