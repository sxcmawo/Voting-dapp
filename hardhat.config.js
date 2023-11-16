require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    bsctestnet: {
      url: "https://bsc-testnet.publicnode.com",
      accounts: "5711b04c8da9ee5ef178f965ac931d6888be87af2900fa403b7d01cfd36901aa"
    }
  },
  etherscan: {
    apiKey: "S56CI774RF9RZZHFCUHDJUSSD43DQEXIZC",
  }
};
