# Metadata prepare
In this repository you will find the code that allows you to prepare the data for deploy the ERC1155 contract and the preview on opensea, instructions on how to do this are given below.
## Steps
Make a POST request to this endpoint `https://nft-marketpl.herokuapp.com/nft/upload`.   
In the **body** pass `form-data`:    
**file** - image file.  
**nft** - as json (*example below*).  
```
{
  "quantity": "1",
  "description": "Description",
  "name": "Some name",
  "account": "you account",
  "tokenId": "1"
}
```
The **response** would be: 
```
"tokenId": "1",
"amount": "1",
"uri": "https://ipfs.infura.io/ipfs/hash",
"openseaJson": {
        "description": "Description ",
        "image": "https://ipfs.infura.io/ipfs/hash",
        "name": "Some name"
 }
```
We will need this data for the contract deploy (*other than openseaJson*).
### Explanation of data preparation
Your sent file will be saved in ipfs, also a json will be created which is also saved in ipfs, the json file plays a key role here, the address of this file is returned to us from the preparation request - **uri**. As well as the **tokenId** and **amount**, these data will be needed to deploy the contract.
### Deploy step
- Go to [remix](https://remix.ethereum.org/ "remix")
- Copy the [contents](https://github.com/sieugene/nft-marketplace-solidity/blob/main/smart-contracts/NFTContract.sol "contents"), remove the **node_modules** imports and uncomment the **Remix imports**.
- COMPILER tab, select 0.8.0 version
- Deploy & Run transactions tab in menu
- Injected Web 3
- Connect rinkeby network with eth balance
- Pass tokenId, amount, uri
- Deploy

After a while your nft will appear in your profile, you can go to [opensea testnet](https://testnets.opensea.io/account "opensea testnet")

## Summary
If you have done these steps, you have successfully created your nft in the rinkeby network and published it to opensea. You can also do this in mainnet, instead select a different network. The deployment step on the network can be simplified as part of the frontend, with the takeout from the contract method deploy.
You can also do it locally, run nest in development mode, and use truffle to deploy smart contracts. 


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
