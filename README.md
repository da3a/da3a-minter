# da3a minter
 A simple Near Protocol App enabling the minting of ERC-20 like Fungible tokens. 

##  Credits  
Built following the course here https://vitalpoint.ai/course/project-overview/
All credit to course author: Aaron Luhning

Original Github: https://github.com/ALuhning/VPC_FT

##  Notes

- When adding react-router-dom make sure you add version 5 and not version 6.
- Ensure the version of near-sdk-as is version 1.2.1. Version 3 will produce build errors when building the contract
- The contract folder is a separate project with its own package.json. Ensure when running contract.js that the wasm file reflects the new contract and not the greeter contract. If using VS Code install the Wenb Assembly toolkit because tis enables you to check the contract exports.
- Contract was deployed manually using the following near-cli: 

delete the contract account if it already exists:
near delete da3a-minter.da3a-1.testnet da3a-1.testnet

create a fresh contract account:
near create-account da3a-minter.da3a-1.testnet --masterAccount da3a-1.testnet

build the new contract (use webassembly extension to check the /out/main.wasm file)
node contract/compile.js

deploy the contract 
near deploy --accountId da3a-minter.da3a-1.testnet --wasmFile out/main.wasm

Ensure the CONTRACT_NAME variable is set to the contract account name and env file is used when calling "npm run script"

CONTRACT_NAME=da3a-minter.da3a-1.testnet
"start": "env-cmd -f ./.env parcel src/index.html --open",


