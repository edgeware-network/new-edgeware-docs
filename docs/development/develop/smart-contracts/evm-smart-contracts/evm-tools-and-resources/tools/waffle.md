# Waffle

![](/img/wafflelogo.png)

[Waffle](https://www.getwaffle.io) is a popular development framework for testing Solidity smart contracts. Since Edgeware is Ethereum compatible, with a few lines of extra configuration, you can use Edgeware as you normally would with Ethereum to develop on Edgeware.

### Configure Waffle to Connect to Edgeware

Assuming you already have a JavaScript or TypeScript project, install Waffle:

```
npm install ethereum-waffle
```

To configure Waffle to run tests against a Edgeware development node or the Edgeware Beresheet Testnet, within your tests create a custom provider and add network configurations:

:::note javascript

describe ('Test Contract', () => { // Use custom provider to connect to Beresheet or Edgeware development node const BeresheetProvider = new ethers.providers.JsonRpcProvider(('[https://beresheet-evm.jelliedowl.net](https://beresheet-evm.jelliedowl.net)')

const devProvider = new ethers.providers.JsonRpcProvider('[http://localhost:9933/](http://localhost:9933)'); })
:::

:::note Typescript
describe ('Test Contract', () => { // Use custom provider to connect to Beresheet or Edgeware development node const BeresheetProvider: Provider = new ethers.providers.JsonRpcProvider(('[https://beresheet-evm.jelliedowl.net](https://beresheet-evm.jelliedowl.net)')

const devProvider: Provider = new ethers.providers.JsonRpcProvider('[http://localhost:9933/](http://localhost:9933)'); })
:::
