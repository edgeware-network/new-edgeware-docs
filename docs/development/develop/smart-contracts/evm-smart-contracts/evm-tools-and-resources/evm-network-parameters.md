# EVM Network Parameters

## EVM Benchmarks

1 unit of EVM gas = 3000-4000 picoseconds of execution time, which means the amount of EVM gas we can process per second = 250,000,000.

We have conservatively configured gas per second = 8,000,000, which means our block gas limit is 12m gas \(Ethereum's is 15m gas\). The benchmark suggests we could raise that amount significantly to 250,000,000, which would mean our block gas limit is 375m.

On Beresheet gas limit is set to 225m, we recommend running the deploy to mainnet with a gas limit of 12m.

## RPC Endpoints

### Beresheet testnet

- Network name: Beresheet
- RPC URL: [https://beresheet-evm.jelliedowl.net](https://beresheet-evm.jelliedowl.net)
- Chain ID: 2022

### Local Edgeware development node

- Network name: dev
- RPC URL: [http://localhost:9933/](http://localhost:9933/)
- Chain ID: 2021

### Edgeware mainnet

- Network name: Edgeware
- RPC URL: [https://edgeware-evm.jelliedowl.net/](https://edgeware-evm.jelliedowl.net/)
- Chain ID: 2021

### EDG EVM Tools

testnet block explorer [https://beresheet.edgscan.com/](https://beresheet.edgscan.com/)

mainnet block explorer [https://mainnet.edgscan.com/](https://mainnet.edgscan.com/)

Edgeware Key Generator [https://edgewa.re/keygen](https://edgewa.re/keygen)

### EDG EVM Tutorials

Youtube [https://www.youtube.com/playlist?list=PLJK4WO5y_eJFMGZGDmNOWRZI2dAV4GyU6](https://www.youtube.com/playlist?list=PLJK4WO5y_eJFMGZGDmNOWRZI2dAV4GyU6)

Docs [https://main.edgeware.wiki/development/develop/smart-contracts/evm-smart-contracts/tutorials](https://main.edgeware.wiki/development/develop/smart-contracts/evm-smart-contracts/tutorials)
