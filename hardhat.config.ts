import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks:{
    sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/ZljpMcsqqpnDKqNeACTl8CwshzXlidoX',
      accounts: ['e72b691666a1dfa8eae790346aff28483e769f478dbcf3f1cfc9d24c3cbb6732']
    }
  }
};

export default config;
