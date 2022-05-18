import { BigInt } from "@graphprotocol/graph-ts"
import {
  Goose,
  Deposit,
  EmergencyWithdraw,
  OwnershipTransferred,
  Withdraw,
} from "../generated/Goose/Goose"
// import { ExampleEntity } from "../generated/schema"
import { GooseAccount } from "../generated/schema"

export function handleDeposit(event: Deposit): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  // let entity = GooseAccount.load(event.transaction.from.toHex())
  let entity = GooseAccount.load(event.params.user.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new GooseAccount(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + event.params.amount;

  // Entity fields can be set based on event parameters
  entity.user = event.params.user
  entity.pid = event.params.pid

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.BONUS_MULTIPLIER(...)
  // - contract.devaddr(...)
  // - contract.egg(...)
  // - contract.eggPerBlock(...)
  // - contract.feeAddress(...)
  // - contract.getMultiplier(...)
  // - contract.owner(...)
  // - contract.pendingEgg(...)
  // - contract.poolInfo(...)
  // - contract.poolLength(...)
  // - contract.startBlock(...)
  // - contract.totalAllocPoint(...)
  // - contract.userInfo(...)
}

export function handleEmergencyWithdraw(event: EmergencyWithdraw): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleWithdraw(event: Withdraw): void {}

// export function handleCreatePool(call: AddCall): void {

//   // // let entity = Pool.load(call..params.user.toHex())
//   // let entity = Pool.load(call.inputs._lpToken.toHex());

//   // if (!entity) {
//   //   entity = new Pool(call.inputs._lpToken.toHex());
//   //   // Entity fields can be set using simple assignments
//   //   entity.id = call.inputs._lpToken.toHex();
//   // }

//   // entity.allocPoint = call.inputs._allocPoint;
//   // entity.lpToken = call.inputs._lpToken;
//   // entity.depositFeeBP = BigInt.fromI32(call.inputs._depositFeeBP);

//   // entity.save()


// }