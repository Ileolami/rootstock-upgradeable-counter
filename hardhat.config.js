require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    rskTestnet: {
      url: 'https://public-node.testnet.rsk.co/',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 31, 
    },
  },
};
