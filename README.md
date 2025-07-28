# Rootstock Upgradeable Counter Contract Project

The project implements a simple Counter contract that can be upgraded to add new functionality while preserving its state and address on Rootstock.

## Quickstart

1. Clone the repository:

```bash
git clone https://github.com/ileolami/rootstock-upgradeable-counter.git
cd rootstock-upgradeable-counter
```

2. Install dependencies:

```bash
npm ci
```

3. Set up environment variables:

```bash
cp .env.sample .env
# Edit .env with your private key and other settings
```

4. To deploy the initial Counter contract:

```bash
npm run deploy
```

This will deploy a proxy contract pointing to the Counter implementation.

5. Upgrading to CounterV2:

```bash
npm run upgrade
```

6. Verify the implementation contract:

```bash
npm run verify <IMPLEMENTATION_ADDRESS>
```

After verification, you can view your contract on [Rootstock Testnet Explorer](https://explorer.testnet.rootstock.io/).

## Environment Variables

- `PRIVATE_KEY`: Your wallet's private key for deploying contracts
- `RSK_Testnet_EXPLORER_API_KEY`: API key for contract verification on Rootstock explorer

## Testing

Run the test suite:

```bash
npm run test
```

Run linting:

```bash
npm run lint
```

## Additional Resources

1. [Rootstock Documentation](https://dev.rootstock.io/)
2. [Rootstock Developer Community](http://discord.gg/rootstock)
3. [Rootstock Testnet Faucet](https://faucet.rootstock.io/)
4. [Rootstock Testnet Explorer](https://explorer.testnet.rootstock.io/)
