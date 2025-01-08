# Resources
- [How to deploy token on holesky network](https://blog.blockmagnates.com/how-to-create-and-deploy-an-erc20-token-on-the-holesky-testnet-using-hardhat-and-openzeppelin-1145546df00f)

- [How to add holesky testnet to metamask](https://www.datawallet.com/crypto/add-holesky-to-metamask)

# Deploying token
- Create a .env file in root directory with contents
```bash
PRIVATE_KEY=<WALLET-PRIVATE-KEY>
RPC_ENDPOINT_URL=https://ethereum-holesky-rpc.publicnode.com
```
Note that the wallet will be charged a small fee during deployment so make sure you have some eth tokens in holesky network otherwise deployment will fail.

- Deploy
```bash
npx hardhat ignition deploy ./ignition/modules/Deploy.js --network holesky
```

You can check my own token on holesky -> 0x386f64243fa8D8c674d945c6747aea87CE9d8ff1