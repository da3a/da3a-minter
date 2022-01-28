# da3a minter
 A simple Near Protocol App enabling the minting of ERC-20 like fungible tokens. 

 Based on Near's submission to Reddits scaling Bake Off Challenge that eventually wen to Arbitrum.

 Read more about that hear: 
 

 https://www.reddit.com/r/ethereum/comments/i1b4b3/nears_submission_to_reddits_scaling_bakeoff/


 https://ambcrypto.com/ethereum-based-community-points-to-scale-with-arbitrum-on-reddit/


##  Credits  
Built following this excellent course: https://vitalpoint.ai/course/project-overview/

All credit to course author: ***Aaron Luhning***

Original Github: https://github.com/ALuhning/VPC_FT

##  Notes

- When manually adding react-router-dom make sure you add version 5 and not version 6.
- Ensure the version of near-sdk-as is version 1.2.1. 

    running create-near-app installed the following version of near-sdk-as:

        "devDependencies": {
        "near-sdk-as": "^3.2.3",
        "shelljs": "^0.8.4"
        }

    running compile.js with this version of the sdk resulted in this error: 


        ERROR TS2322: Type '~lib/as-bignum/integer/u128/u128' is not assignable to type '~lib/as-bignum/integer/safe/u128/u128'.

            else if (value instanceof U128)       return u128.fromU128(<U128>value);
                                                                        ~~~~~~~~~~~
        in ~lib/as-bignum/integer/safe/u128.ts(145,64)


    solution was to uninstall and reinstall an earlier version of near-sdk-as in the contract folder: 

        npm uninstall near-sdk-as

        npm install -D near-sdk-as@1.2.1

  



- The contract folder is a separate project with its own package.json. Ensure when running contract.js that the wasm file reflects the new contract and not the greeter contract. If using VS Code install the WebAssembly toolkit because this enables you to check the contract exports.
- Contract was deployed manually using the following near-cli: 

    delete the contract account if it already exists:
    ***near delete da3a-minter.da3a-1.testnet da3a-1.testnet***

    create a fresh contract account:
***near create-account da3a-minter.da3a-1.testnet --masterAccount da3a-1.testnet***

    build the new contract (use webassembly extension to check the /out/main.wasm file) : 
***node contract/compile.js***

    deploy the contract: 
***near deploy --accountId da3a-minter.da3a-1.testnet --wasmFile out/main.wasm***

    Ensure the CONTRACT_NAME variable is set to the contract account name and env file is used when calling "npm run script"
        
    CONTRACT_NAME=da3a-minter.da3a-1.testnet
    
    "start": "env-cmd -f ./.env parcel src/index.html --open",

##  Links

1. Near from scratch
https://www.youtube.com/watch?v=QP7aveSqRPo&t=284s

2. Near Examples 
https://examples.near.org/

3. Learn Near
https://learnnear.club/


4. Markdown Cheatsheet
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet






