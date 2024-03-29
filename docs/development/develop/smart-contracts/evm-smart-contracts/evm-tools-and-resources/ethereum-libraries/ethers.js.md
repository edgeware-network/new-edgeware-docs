# Ethers.js

### Introduction

The [ethers.js](https://docs.ethers.io) library provides a set of tools to interact with Ethereum Nodes with JavaScript, similar to web3.js. Edgeare has an Ethereum-like API available that is fully compatible with Ethereum-style JSON RPC invocations. Therefore, developers can leverage this compatibility and use the ethers.js library to interact with an Edgeware node as if they were doing so on Ethereum. You can read more about ethers.js on this [blog post](https://medium.com/l4-media/announcing-ethers-js-a-web3-alternative-6f134fdd06f3).

### Setup Ethers.js with Edgeware

To get started with the ethers.js library, install it using the following command:

```
npm install ethers
```

Once done, the simplest setup to start using the library and its methods is the following:

```
const ethers = require('ethers');

// Variables definition
const privKey = '0xPRIVKEY';

// Define Provider
const provider = new ethers.providers.StaticJsonRpcProvider('RPC_URL', {
    chainId: ChainId,
    name: 'NETWORK_NAME'
});

// Create Wallet
let wallet = new ethers.Wallet(privKey, provider);
```

Different methods are available inside `provider` and `wallet`. Depending on which network you want to connect to, you can set the `RPC_URL, ChainID, NETWORK_NAME`to the following values:

**Edgeware development node:**

- RPC_URL: [`http://localhost:9933/`](http://localhost:9933)``
- ChainId: `2021`
- NETWORK_NAME: `dev`

**Beresheet testnet:**

- RPC_URL: [`https://beresheet-evm.jelliedowl.net`](https://beresheet-evm.jelliedowl.net)
- ChainId: `2022`
- NETWORK_NAME: `Beresheet`

**Edgeware mainnet:**

- RPC_URL: [`https://edgeware-evm.jelliedowl.net/`](https://edgeware-evm.jelliedowl.net/)
- Chain ID: `2021`
- NETWORK_NAME: `Edgeware`

### Tutorial for using Ethers.js on Edgeware

[using-ethers.js.md](development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-basics/using-ethers.js.md)
