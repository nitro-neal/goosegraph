const EggToken = artifacts.require('./EggToken.sol')
const MasterChef = artifacts.require('./MasterChefV2.sol')

module.exports = async function(deployer) {
  let accounts = await web3.eth.getAccounts()

  const eggToken = await EggToken.deployed();

  const masterChef = await MasterChef.deployed()
  await eggToken.approve(masterChef.address, 30000000000,{from: accounts[1]})

  await masterChef.deposit(0, 1, {from: accounts[1]})
}
