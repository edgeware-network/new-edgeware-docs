# Upgrade your Edgeware Node to v4.0.0     



Release v4.0.0 is the latest release from Edgeware, this release upgrades Edgeware's mainnet from [v3.2.0 Tokyo spec_version 46](https://github.com/edgeware-network/edgeware-node/releases/tag/v3.2.0).    


### Step 1: Get the new binary 


##### Build from source:

```bash
$ git clone https://github.com/edgeware-network/edgeware-node && cd edgeware-node/ && git checkout "v4.0.0" && cargo build --release  
```




### Step 2: Remove "lightSyncState" from your chainspec file     

Your validators chainspec file might cointain the "lightSyncState" column, if so delete that line and restart your validator with the new chainspec and the new binary.   

This is part of the [sc-light](https://crates.io/crates/sc-light) crate from Parity that has now been depricated and is removed and replaced.



### Step 3: Copy over the new binary 

Copy the binary to your validator node and restart your validator with the new binary. 



## Connect to Edgeware's mainnet with polkadot.js after upgrade     
Thanks to Parity's [scale codec](https://github.com/paritytech/parity-scale-codec) the chain is able to upgrade from metadata v12 to v14. This enables developers to connect to Edgeware's mainnet without having to use [Edgeware's custom node types](https://classic.yarnpkg.com/en/package/@edgeware/node-types).   

### Before upgrade  

Add `@edgeware/node-types` and `@polkadot/api` to package.json:

```json
"@edgeware/node-types": "^3.6.2-wako",
"@polkadot/api": "^9.4.1",
```

Connect to the chain:

```ts
import { ApiPromise, WsProvider } from "@polkadot/api";
import { spec } from '@edgeware/node-types';

const wsProvider = new WsProvider("ws://node:wsport"); // connect to our node using ws
const api = await ApiPromise.create(
    {
      provider: wsProvider,
      ...spec  //Load EDG Custom spec
    });

```


### After upgrade 

We can now say goodbye to Edgeware's custom node types and we can use metadata v14 and the generic scale codec types.   

Remove `@edgeware/node-types` and `import { spec } from '@edgeware/node-types'` from your code and connect to the chain without node-types spec:  


```ts
async function connect_without_custom_types() {
  const provider = new WsProvider("ws://node:wsport");
  const api = await ApiPromise.create({ // create our api instance without adding the spec
    provider,
  });
  return api;
}

```

#### Use wasm-only interfaces   
Certain extrinsics requires us to connect with a wasm-only interface. 
If you see the error:
```
Error: The WASM interface has not been initialized. Ensure that you wait for the initialization Promise with waitReady() from @polkadot/wasm-crypto (or cryptoWaitReady() from @polkadot/util-crypto) before attempting to use WASM-only interfaces.
``` 


Execute  `cryptoWaitReady()` before creating the api instance:   

```ts
import { cryptoWaitReady } from "@polkadot/util-crypto";


await cryptoWaitReady();  
const wsProvider = new WsProvider("ws://node:wsport");
const api = await ApiPromise.create({
  provider: wsProvider
});

```



Read more about release v4.0.0 here:  
[https://github.com/edgeware-network/edgeware-node/releases/tag/v4.0.0](https://github.com/edgeware-network/edgeware-node/releases/tag/v4.0.0)


Code samples taken from:   
[https://github.com/flipchan/edgeware-node/blob/erup-5-latest/ts-tests/new_tests/Readme.md](https://github.com/flipchan/edgeware-node/blob/erup-5-latest/ts-tests/new_tests/Readme.md)


Polkadot.js WASM interface:  
[https://polkadot.js.org/docs/util-crypto/FAQ/](https://polkadot.js.org/docs/util-crypto/FAQ/)

