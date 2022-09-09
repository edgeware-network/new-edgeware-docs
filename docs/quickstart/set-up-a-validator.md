# Set Up a Validator

Welcome to the official, in-depth Edgeware guide to validating. We're happy that you're interested in validating on Edgeware and we'll do our best to provide in-depth documentation on the process below. As always, reach out on [Discord](https://discord.gg/mYk543EXBV) or [Telegram](https://t.me/heyedgeware) if you have questions about the project.

This document contains all the information one should need to start validating on Edgeware using the **command line interface**. We will start with how to setup one's node and proceed to how to key management and monitoring. To start, we will use the following terminology of keys for the guide:

- _**stash**_ - the stash keypair is where most of your funds should be located. It can be kept in cold storage if necessary.
- _**controller**_ - the controller is the keypair that will control your validator settings. It should have a smaller balance, e.g. 10-100 EDG
- _**session**_ - the 4 session keypairs are hot keys that are stored on your validator node. They do not need to have balances.

## Requirements

- You will need 6 keypairs: a `stash` \(ed25519 or sr25519\), `controller` \(ed25519 or sr25519\), and 4 `session` \(3 ed25519 and 1 sr25519\) keypairs. You can generate these using the `subkey` utility right away or you can use the [polkadot.js wallet](https://polkadot.js.org/extension/) to create the controller and stash account addresses. We strongly recommend that you use the rotateKeys node method to generate and manage the session keys.

We will be using derived keys in the examples, if you do not use derived keys, simply input the seed/mnemonic needed to sign from these accounts.

1. `stash` keys \(ed25519 or sr25519\)
2. `controller` keys \(ed25519 or sr25519\)
3. `Aura` keys \(ed25519\)
4. `Grandpa` keys \(ed25519\)
5. `ImOnline` keys \(ed25519\)
6. `AuthorityDiscovery` keys \(sr25519\)

- You will need at least the existential balance \(10,000,000,000,000 token units i.e 0.00001 EDG\) in both the `stash` and `controller` accounts plus the balances needed to send transactions from these accounts.
- You will need a live, fully-synced Edgeware node running with the `--validator` flag that has set one's session keys, either before or after you complete the onboarding process. Note that you should fully sync your node before adding the `--validator` flag.

## Pre-requisites

- First read the guide in the [README.md](https://github.com/edgeware-network/edgeware-node/blob/master/README.md) for installing and running the `edgeware-node`.

- follow the guide in [Installing Edgeware and setting it up as a system service](/quickstart/set-up-a-full-node#1-installing-edgeware-and-setting-it-up-as-a-system-service). It is not recommended to configure a public node for validating.

With the exception ExecStart should look similar to this example below. With these flags you will have a validator that is not and archive node as with the `--validator` flag archiving is implied.

```text
echo 'ExecStart='`pwd`'/target/release/edgeware --chain=edgeware --unsafe-pruning --pruning=1000 --validator --name "name-of-validator" --rpc-cors "*"'
```

- Install `subkey` as well if you do need to generate new keypairs (if you plan to use subkey). Otherwise you can use [polkadot.js wallet](https://polkadot.js.org/extension/).

```text
cargo install --force --git [https://github.com/paritytech/substrate](https://github.com/paritytech/substrate) subkey
```

From this point on, we will assume you are familiar with using `subkey`, if that is not the case, you can read about the `subkey` commands [here](https://github.com/paritytech/substrate/blob/master/bin/utils/subkey/README.md).

## Onboarding

1. First, create the _**stash**_ and _**controller**_ keypairs using `subkey` or [polkadot.js wallet](https://polkadot.js.org/extension/). Create your 4 session keys with rotateKeys described bellow. **optionally** create ED25519 keypairs using `-e` flag with subkey.

## Validating

The Edgeware mainnet requires validators to manage 4 validating keys for the Aura, Grandpa, ImOnline, and AuthorityDiscovery modules.

1. Aura keys \(ed25519\)
2. Grandpa keys \(ed25519\)
3. ImOnline keys \(ed25519\)
4. AuthorityDiscovery keys \(sr25519\)

Now while running your full node to sync or afterward, you can start to set up your session keys for the node. The command for inserting keys and rotating keys is the same as it has been. To rotate new session keys, run the following while your node is running:

```text
curl -H 'Content-Type: application/json' --data '{ "jsonrpc":"2.0", "method":"author_rotateKeys", "id":1 }' 127.0.0.1:9933
```

To insert existing session keys, if you generated them manually with subkey, you can run for each key the following command while your node is running:

```text
curl -H 'Content-Type: application/json' --data '{ "jsonrpc":"2.0", "method":"author_insertKey", "params":["KEY_TYPE", "SEED", "PUBKEY_HEX"],"id":1 }' localhost:9933
```

The four key types you will enter individuals are:

- `aura` for Aura keys
- `gran` for Grandpa keys
- `imon` for ImOnline keys
- `audi` for AuthorityDiscovery keys

After running these `curl` commands, you should receive as output from `stdout` the public keys you provided \(or didn't\) in a JSON string. That also means the process was a success! You should now see yourself in the list of newly/pending validators to go into effect in future sessions. In the next era \(up to 1 hour\), if there is a slot available, your node will become an active validator.

## Validate

To verify that your node is live and synchronized, head to [Telemetry](https://telemetry.polkadot.io/#list/0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b) and find your node. Note that this will show all nodes on the Edgeware network, which is why it is important to select a unique name!

### Setup via Validator Tab

![](/img/polkadot-dashboard-validate-1.png)

Here you will need to input the Keys from `rotateKeys`, which is the Hex output from `author_rotateKeys`. The keys will show as pending until applied at the start of a new session.

The "reward commission percentage" is the commission percentage that you can declare against your validator's rewards. This is the rate that your validator will be commissioned with.

- Payment preferences - You can specify the percentage of the rewards that will get paid to you. The remaining will be split among your nominators.

:::caution

Setting a commission rate of 100% suggests that you do not want your validator to receive nominations

:::

![](/img/polkadot-dashboard-validate-2-edited.png)

Click "Bond & Validate".

If you go to the "Staking" tab, you will see a list of active validators currently running on the network. At the top of the page, it shows the number of validator slots that are available as well as the number of nodes that have signaled their intention to be a validator. You can go to the "Waiting" tab to double check to see whether your node is listed there.

The validator set is refreshed every era. In the next era, if there is a slot available and your node is selected to join the validator set, your node will become an active validator. Until then, it will remain in the waiting queue. If your validator is not selected to become part of the validator set, it will remain in the waiting queue until it is. There is no need to re-start if you are not selected for the validator set in a particular era. However, it may be necessary to increase the number of EDG staked or seek out nominators for your validator in order to join the validator set.

**Congratulations!** If you have followed all of these steps, and been selected to be a part of the validator set, you are now running an Edgeware validator!

## Submitting the `setKeys` Transaction

You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what associates your validator with your Controller account. In the future this is how you change the session keys (along with generating new keys with rotateKeys). When changing the keys on an elected validator it takes two sessions (2 hours) to take effect.

Go to [Staking > Account Actions](https://www.edgeware.app/#/staking/actions), and click "Change Session Key" on the bonding account you generated earlier. Enter the output from `author_rotateKeys` in the field and click "Set Session Key".

![](/img/set-session-key-2-408efe22daa8d6533715987a1099828a.png)

Submit this extrinsic and you are now ready to start validating.
