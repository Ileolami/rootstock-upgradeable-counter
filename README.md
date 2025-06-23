# Rootstock Upgradeable Counter Contract Project

The project implements a simple Counter contract that can be upgraded to add new functionality while preserving its state and address Rootstock.

## Quickstart

1. Installation

```bash
npm install
```

2. To deploy the initial Counter contract:

```bash
npx hardhat run scripts/deploy.js --network rskTestnet
```

```bash
npm install @openzeppelin/contracts-upgradeable
```

This will deploy a proxy contract pointing to the Counter implementation.

3. Upgrading

After making changes to your contract (e.g., creating CounterV2), you can upgrade the implementation while keeping the same proxy address:

```bash
npx hardhat run scripts/upgrade_deploy.js --network rskTestnet
```

## Additional Resources

1. [Rootstock Documentation](https://dev.rootstock.io/)
2. [Rootstock Developer Community](http://discord.gg/rootstock)
3. [Rootstock Testnet Faucet](https://faucet.rootstock.io/)
4. [Rootstock Testnet Explorer](https://explorer.testnet.rootstock.io/)
