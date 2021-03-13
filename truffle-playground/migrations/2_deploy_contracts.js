const Bluff = artifacts.require('./Bluff.sol');

module.exports = function(deployer) {
  deployer.deploy(Bluff);
};
