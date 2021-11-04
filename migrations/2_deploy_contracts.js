const StarNotary = artifacts.require("StarNotary");

module.exports = function(deployer) {
  deployer.deploy(StarNotary);
  // deployer.deploy(StarNotary, "StarNotary", "STRN", 18, 1000);
};


