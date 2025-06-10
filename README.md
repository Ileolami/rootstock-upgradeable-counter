# Upgradeable Smart Contract Project

This project demonstrates how to create and upgrade smart contracts on Rootstock testnet using the OpenZeppelin Upgrades plugin with Hardhat.

## Overview

The project implements a simple Counter contract that can be upgraded to add new functionality while preserving its state and address.

## Prerequisites

- Node.js and npm
- A wallet with RBTC for RSK testnet

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory with your private key:

```bash
PRIVATE_KEY=your_private_key_here
```

## Deployment

To deploy the initial Counter contract:

```bash
npx hardhat run scripts/deploy.js --network rskTestnet
```

This will deploy a proxy contract pointing to the Counter implementation.

## Upgrading

After making changes to your contract (e.g., creating CounterV2), you can upgrade the implementation while keeping the same proxy address:

```bash
npx hardhat run scripts/upgrade_deploy.js --network rskTestnet
```

## Contract Addresses

The deployed proxy contracts on RSK testnet can be found in `.openzeppelin/unknown-31.json` under `proxies`.

## Project Structure

- `contracts/`: Smart contract source files
- `scripts/`: Deployment and upgrade scripts
- `.openzeppelin/`: Proxy deployment records
