# Upgrade your Edgeware Node to Erup-5  



Erup-5 is the latest release from Edgeware, allowing your node client to be able to 

We want to provide a fast setup experience for you. If you have Docker, you can launch an Edgeware development node in a few seconds:

**Note** if you are running a validator using the older edgeware 


### Step 1: Get the new binary 


##### Build from source:

```bash
$ git clone https://github.com/edgeware-network/edgeware-node & cd edgeware-node/ & git checkout erup-5-latest & cargo build --release  
```




### Step 2: Remove "lightSyncState" from your chainspec file     

Your validators chainspec file might cointain the "lightSyncState" column, if so delete that line and restart your validator with the new chainspec and the new binary.   

This is part of the [sc-light](https://crates.io/crates/sc-light) crate from Parity that has now been depricated and is removed and replaced.



### Step 3: Copy over the new binary 

Copy the binary to your validator node and restart your validator with the new binary. 



Read more about ERUP-5 on the release page:  
[https://github.com/edgeware-network/edgeware-node/releases/tag/erup-5](https://github.com/edgeware-network/edgeware-node/releases/tag/erup-5)
