# Web3.py

### Introduction

[Web3.py](https://web3py.readthedocs.io) is a set of libraries that allow developers to interact with Ethereum nodes using HTTP, IPC, or WebSocket protocols with Python. Moonbeam has an Ethereum-like API available that is fully compatible with Ethereum-style JSON RPC invocations. Therefore, developers can leverage this compatibility and use the web3.py library to interact with a Moonbeam node as if they were doing so on Ethereum.

### Setup Web3.py with Edgeware

To get started with the web3.py library, install it using the following command:

```
pip3 install web3
```

Once done, the simplest setup to start using the library and its methods is the following:

```
from web3 import Web3

web3 = Web3(Web3.HTTPProvider('RPC_URL'))
```

Depending on which network you want to connect to, you can set the `RPC_URL` to the following values:

**Edgeware development node:**

- RPC_URL: [`http://localhost:9933/`](http://localhost:9933)``

**Beresheet testnet:**

- RPC_URL: [`https://beresheet2.edgewa.re/evm`](https://beresheet2.edgewa.re/evm)`(Alternatively, one can use `[`https://beresheetX.edgewa.re/evm`](https://beresheetx.edgewa.re/evm)` where X can be any number from 1 to 8.)`

**Edgeware mainnet:**

- RPC_URL: [`https://mainnet2.edgewa.re/evm`](https://mainnet2.edgewa.re/evm)`(Alternatively, one can use`[`https://mainnetX.edgewa.re/evm`](https://mainnetx.edgewa.re/evm)` where X can be any number from 1 to 20.)`

### Tutorial for using Web3.py on Edgeware

[using-web3.py](development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-basics/using-web3.py.md)
