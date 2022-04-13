# Create Multi Signature Account

We will create a Multi-Signature account using a local Edgeware development network and perform a test transaction from the account. You will have to make sure you have a [local development node running](../../../development/develop/smart-contracts/setting-up-an-edgeware-node-for-local-development) for this tutorial.

Once a development node is active, you're going to click on this link: [https://polkadot.js.org/apps//#/explorer](https://polkadot.js.org/apps/#/explorer). In the top left drop-down menu you're then going navigate to and click on: 'development > Local Node > Switch' and then wait for 'initializing connection' to conclude.

Your screen should then look something like this:

![](/img/ScreenShot2021-10-11at6.52.11PM.png)

From here, you will navigate and hover on the **Accounts** tab on the navigation bar at the top, and click on **Accounts**. Your screen should then look something like this:

![](/img/ScreenShot2021-10-11at6.59.49PM.png)

Click on **+Multisig**.

You will now choose your signatures (i.e. your teammates accounts). In our scenario, we will choose \*\*Alice, Bob, and Charlie \*\*and we will be setting the **threshold to 2.** This means only 2/3 signatures will be needed to enact the on-chain transaction. You can set the threshold to be equal to or less than the number of signatories involved in the multisig. We will name this multisig our **Team Funding** account.

![](/img/ScreenShot2021-10-11at7.19.12PM.png)

Now we will top-up **1,000,000** tEDG to the **Team Funding** multi-signature account from **Alice**. Thank you Alice!

![](/img/ScreenShot2021-10-11at7.21.48PM.png)

## Create Transfer from Multi-Signature Account

Now that the **Team Funding** account has been seeded, we can pay **DAVE** **200,000** tEDG for completion of a project. In our accounts list, hit **Send** from our **Team Funding** account

![](/img/ScreenShot2021-10-11at7.23.52PM.png)

Now we are prompted (**as CHARLIE**) to authorize the transaction.

You will see their `multisig call data` with payload `0x060300306721211d5404bd9da88e0204360a1a9ab8b87c66c1bc2fcdd37f3c2222cc201b000000ed95c28f055a2a` . This is call data which can be supplied to a final call to multi-approvals. It's what triggers chain logic to execute commands. You will then hit Sign and Submit.

![](/img/ScreenShot2021-10-11at7.28.19PM.png)

It was broadcasted to the chain, you can see notification on the top right.

![](/img/transfer-ms-first-call.png)

Referring to the image below, we can see the multisig approvals now pending next to our **Team Funding** account. On the \*\*Team Funding \*\*account click send.

![](/img/ScreenShot2021-10-11at7.40.04PM.png)

You will now enter the same amount again (**200,000**) and choose the same 'send to address' (**DAVE**), to **get same final call payload**. Click **Make Transfer** when the necessary fields are filled correctly.

![](/img/ScreenShot2021-10-11at7.43.17PM.png)

Now as **BOB** we can now authorize the transaction. The UI is smart enough, and detected the final approval necessary for enacting the on-chain transaction. Under toggle 'Multisig message' you will see same payload as we're creating multisig transaction. Hit Sign and Submit and it's should be signed 2 of 3 signatories which is enough for this scenario so can transaction can pass through to DAVE.

![](/img/ScreenShot2021-10-11at7.52.26PM.png)

Woala, **DAVE** has tEDG **funds secured** on his account!

![multi-signature-funds-secured](/img/funds-secured.png)

You've managed to learn how to make transaction for multi-signature. Multisignature accounts have a broad use case and you can leverage final call for your use case whenever relevant on-chain.
