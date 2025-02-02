const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "./src/contracts"),
  plugins: [ "truffle-security" ],
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      gas: 7000000,
      network_id: "*" // Match any network id
    },
    solc: {
      optimizer: {
          enabled: true,
          runs: 200
      }
  }
  },
};