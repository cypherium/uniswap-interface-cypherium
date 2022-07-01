# Classic DEX Example forked from Sushiswap-Classic-Exchange (Uniswap)

Forked from [sushiswap/sushiswap-classic-exchange](https://github.com/sushiswap/sushiswap-classic-exchange), and updated for a Cypherium Ropsten Node.

## Cypherium Ropsten Addresses

To make the interface work with your Cypherium Ropsten deployment, you need to modify the `./src/cypherium_address.json`. Also make sure that you modify the addresses in the SDK repo.

On Cypherium Ropsten, these are the following addresses:

```
      "WETH": "0x021e05349E4106Ddf7afFF4d1afa5E9160de0Ea2",
      "Factory": "0x064a7dF94E8C7e63f76d10090366F538B2242eA7",
      "Router": "0x4E8991e0aC5DdC5c02f3a95F689A1430DFe76cDB",
      "multicall": "0xB4656db1dcE1A268139A7A28Ac288526689cD696",
      "init_code_hash": "0x01429e880a7972ebfbba904a5bbe32a816e78273e4b38ffa6bdeaebce8adba7c",
      "tok1": "0x87A9933EDEdc7B07f45d831fECEc1CA7f42631FE",
      "tok2": "0x4429053439473F90273a07Ba992714C5650b6c69"
```

## Build

Install packages:

```
npm i
```

Run:

```
npm start
```
