import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  BadgeModelControllerAdded,
  BadgeModelControllerUpdated,
  BadgeModelCreated,
  BadgeModelSuspended,
  BadgeModelUpdated,
  BadgeModelVersionUpdated,
  Initialize,
  Initialized,
  OwnershipTransferred,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/TheBadgeModels/TheBadgeModels"

export function createBadgeModelControllerAddedEvent(
  controllerName: string,
  controllerAddress: Address
): BadgeModelControllerAdded {
  let badgeModelControllerAddedEvent = changetype<BadgeModelControllerAdded>(
    newMockEvent()
  )

  badgeModelControllerAddedEvent.parameters = new Array()

  badgeModelControllerAddedEvent.parameters.push(
    new ethereum.EventParam(
      "controllerName",
      ethereum.Value.fromString(controllerName)
    )
  )
  badgeModelControllerAddedEvent.parameters.push(
    new ethereum.EventParam(
      "controllerAddress",
      ethereum.Value.fromAddress(controllerAddress)
    )
  )

  return badgeModelControllerAddedEvent
}

export function createBadgeModelControllerUpdatedEvent(
  controllerName: string,
  controllerAddress: Address
): BadgeModelControllerUpdated {
  let badgeModelControllerUpdatedEvent = changetype<
    BadgeModelControllerUpdated
  >(newMockEvent())

  badgeModelControllerUpdatedEvent.parameters = new Array()

  badgeModelControllerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "controllerName",
      ethereum.Value.fromString(controllerName)
    )
  )
  badgeModelControllerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "controllerAddress",
      ethereum.Value.fromAddress(controllerAddress)
    )
  )

  return badgeModelControllerUpdatedEvent
}

export function createBadgeModelCreatedEvent(
  badgeModelId: BigInt
): BadgeModelCreated {
  let badgeModelCreatedEvent = changetype<BadgeModelCreated>(newMockEvent())

  badgeModelCreatedEvent.parameters = new Array()

  badgeModelCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "badgeModelId",
      ethereum.Value.fromUnsignedBigInt(badgeModelId)
    )
  )

  return badgeModelCreatedEvent
}

export function createBadgeModelSuspendedEvent(
  badgeModelId: BigInt,
  suspended: boolean
): BadgeModelSuspended {
  let badgeModelSuspendedEvent = changetype<BadgeModelSuspended>(newMockEvent())

  badgeModelSuspendedEvent.parameters = new Array()

  badgeModelSuspendedEvent.parameters.push(
    new ethereum.EventParam(
      "badgeModelId",
      ethereum.Value.fromUnsignedBigInt(badgeModelId)
    )
  )
  badgeModelSuspendedEvent.parameters.push(
    new ethereum.EventParam("suspended", ethereum.Value.fromBoolean(suspended))
  )

  return badgeModelSuspendedEvent
}

export function createBadgeModelUpdatedEvent(
  badgeModelId: BigInt
): BadgeModelUpdated {
  let badgeModelUpdatedEvent = changetype<BadgeModelUpdated>(newMockEvent())

  badgeModelUpdatedEvent.parameters = new Array()

  badgeModelUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "badgeModelId",
      ethereum.Value.fromUnsignedBigInt(badgeModelId)
    )
  )

  return badgeModelUpdatedEvent
}

export function createBadgeModelVersionUpdatedEvent(
  badgeModelId: BigInt,
  newBadgeModelId: BigInt,
  version: BigInt
): BadgeModelVersionUpdated {
  let badgeModelVersionUpdatedEvent = changetype<BadgeModelVersionUpdated>(
    newMockEvent()
  )

  badgeModelVersionUpdatedEvent.parameters = new Array()

  badgeModelVersionUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "badgeModelId",
      ethereum.Value.fromUnsignedBigInt(badgeModelId)
    )
  )
  badgeModelVersionUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newBadgeModelId",
      ethereum.Value.fromUnsignedBigInt(newBadgeModelId)
    )
  )
  badgeModelVersionUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return badgeModelVersionUpdatedEvent
}

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
