import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Initialize,
  Initialized,
  OwnershipTransferred,
  PaymentMade,
  ProtocolSettingsUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  UpdatedUser,
  UserRegistered,
  UserVerificationExecuted,
  UserVerificationRequested
} from "../generated/TheBadgeUsers/TheBadgeUsers"

export function createInitializeEvent(admin: Address): Initialize {
  let initializeEvent = changetype<Initialize>(newMockEvent())

  initializeEvent.parameters = new Array()

  initializeEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )

  return initializeEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPaymentMadeEvent(
  recipient: Address,
  payer: Address,
  amount: BigInt,
  paymentType: i32,
  badgeModelId: BigInt,
  controllerName: string
): PaymentMade {
  let paymentMadeEvent = changetype<PaymentMade>(newMockEvent())

  paymentMadeEvent.parameters = new Array()

  paymentMadeEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "paymentType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(paymentType))
    )
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "badgeModelId",
      ethereum.Value.fromUnsignedBigInt(badgeModelId)
    )
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "controllerName",
      ethereum.Value.fromString(controllerName)
    )
  )

  return paymentMadeEvent
}

export function createProtocolSettingsUpdatedEvent(): ProtocolSettingsUpdated {
  let protocolSettingsUpdatedEvent = changetype<ProtocolSettingsUpdated>(
    newMockEvent()
  )

  protocolSettingsUpdatedEvent.parameters = new Array()

  return protocolSettingsUpdatedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createUpdatedUserEvent(
  userAddress: Address,
  metadata: string,
  suspended: boolean,
  isCreator: boolean,
  deleted: boolean
): UpdatedUser {
  let updatedUserEvent = changetype<UpdatedUser>(newMockEvent())

  updatedUserEvent.parameters = new Array()

  updatedUserEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  updatedUserEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromString(metadata))
  )
  updatedUserEvent.parameters.push(
    new ethereum.EventParam("suspended", ethereum.Value.fromBoolean(suspended))
  )
  updatedUserEvent.parameters.push(
    new ethereum.EventParam("isCreator", ethereum.Value.fromBoolean(isCreator))
  )
  updatedUserEvent.parameters.push(
    new ethereum.EventParam("deleted", ethereum.Value.fromBoolean(deleted))
  )

  return updatedUserEvent
}

export function createUserRegisteredEvent(
  user: Address,
  metadata: string
): UserRegistered {
  let userRegisteredEvent = changetype<UserRegistered>(newMockEvent())

  userRegisteredEvent.parameters = new Array()

  userRegisteredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  userRegisteredEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromString(metadata))
  )

  return userRegisteredEvent
}

export function createUserVerificationExecutedEvent(
  user: Address,
  controllerName: string,
  verify: boolean
): UserVerificationExecuted {
  let userVerificationExecutedEvent = changetype<UserVerificationExecuted>(
    newMockEvent()
  )

  userVerificationExecutedEvent.parameters = new Array()

  userVerificationExecutedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  userVerificationExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "controllerName",
      ethereum.Value.fromString(controllerName)
    )
  )
  userVerificationExecutedEvent.parameters.push(
    new ethereum.EventParam("verify", ethereum.Value.fromBoolean(verify))
  )

  return userVerificationExecutedEvent
}

export function createUserVerificationRequestedEvent(
  user: Address,
  metadata: string,
  controllerName: string
): UserVerificationRequested {
  let userVerificationRequestedEvent = changetype<UserVerificationRequested>(
    newMockEvent()
  )

  userVerificationRequestedEvent.parameters = new Array()

  userVerificationRequestedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  userVerificationRequestedEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromString(metadata))
  )
  userVerificationRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "controllerName",
      ethereum.Value.fromString(controllerName)
    )
  )

  return userVerificationRequestedEvent
}
