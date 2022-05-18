const EggToken = artifacts.require('./EggToken.sol')
const MasterChef = artifacts.require('./MasterChefV2.sol')

module.exports = async function(deployer) {
  // const registry = await GravatarRegistry.deployed()

  const eggToken = await EggToken.deployed();

  console.log('EggToken address:', eggToken.address)

  let accounts = await web3.eth.getAccounts()
  
  await eggToken.mint(accounts[0], 100, {
    from: accounts[0],
  })

  await eggToken.mint(accounts[1], 300, {
    from: accounts[0],
  })


  const masterChef = await MasterChef.deployed();

  await masterChef.add(100, eggToken.address, 400, true)
  await masterChef.deposit(0, 10, {from: accounts[1]})


}
