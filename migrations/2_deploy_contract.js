const EggToken = artifacts.require('./EggToken.sol')
const MasterChef = artifacts.require('./MasterChefV2.sol')

module.exports = async function(deployer) {

  let accounts = await web3.eth.getAccounts()

  await deployer.deploy(EggToken)
  await deployer.deploy(MasterChef, EggToken.address, accounts[0], accounts[0], 100, 1)
}
