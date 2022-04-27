# Ethereum Libraries

:::caution
**Proceed with caution! This page is in progress.**
:::

In order for a web app to interact with the Ethereum blockchain (i.e. read blockchain data and/or send transactions to the network), it must connect to an Ethereum node.

For this purpose, every Ethereum client implements the [JSON-RPC](https://ethereum.org/en/developers/docs/apis/json-rpc/) specification, so there are a uniform set of [endpoints](https://ethereum.org/en/developers/docs/apis/json-rpc/endpoints/) that applications can rely on.

If you want to use JavaScript to connect with an Ethereum node, it's possible to use vanilla JavaScript but several convenience libraries exist within the ecosystem that makes this much easier. With these libraries, developers can write intuitive, one-line methods to initialize JSON RPC requests (under the hood) that interact with Ethereum.

**Why use a library?**

These libraries abstract away much of the complexity of interacting directly with an Ethereum node. They also provide utility functions (e.g. converting ETH to Gwei) so as a developer you can spend less time dealing with the intricacies of Ethereum clients and more time focused on the unique functionality of your application.

For more information on [Ethereum libraries click here](https://ethereum.org/en/developers/docs/apis/javascript/)

### Resources

[web3.js](web3.js.md)

[ethers.js](ethers.js.md)

[web3.py](web3.py.md)

### Tutorials for using libraries with Edgeware

[using-web3](/development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-basics/using-web3.js.md)

[using-web3.py](/development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-basics/using-web3.py.md)

[using-ethers.js](/development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-basics/using-ethers.js.md)

### Official library documentation guides

[Official documentation - web3.js](https://web3js.readthedocs.io/en/v1.5.2/)

[Official documentation - web3.py](https://web3py.readthedocs.io/en/stable/)

[Official documentation - ethers.js](https://docs.ethers.io/v5/)
