import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Initialize,
  Initialized,
  NewThirdPartyBadgeModel,
  ProtocolSettingsUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  ThirdPartyBadgeClaimed,
  ThirdPartyBadgeMinted,
  Upgraded
} from "../generated/TpBadgeModelController/TpBadgeModelController"

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

export function createNewThirdPartyBadgeModelEvent(
  badgeModelId: BigInt,
  tcrAddress: Address
): NewThirdPartyBadgeModel {
  let newThirdPartyBadgeModelEvent = changetype<NewThirdPartyBadgeModel>(
    newMockEvent()
  )

  newThirdPartyBadgeModelEvent.parameters = new Array()

  newThirdPartyBadgeModelEvent.parameters.push(
    new ethereum.EventParam(
      "badgeModelId",
      ethereum.Value.fromUnsignedBigInt(badgeModelId)
    )
  )
  newThirdPartyBadgeModelEvent.parameters.push(
    new ethereum.EventParam(
      "tcrAddress",
      ethereum.Value.fromAddress(tcrAddress)
    )
  )

  return newThirdPartyBadgeModelEvent
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

export function createThirdPartyBadgeClaimedEvent(
  originAddress: Address,
  recipientAddress: Address,
  badgeId: BigInt
): ThirdPartyBadgeClaimed {
  let thirdPartyBadgeClaimedEvent = changetype<ThirdPartyBadgeClaimed>(
    newMockEvent()
  )

  thirdPartyBadgeClaimedEvent.parameters = new Array()

  thirdPartyBadgeClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "originAddress",
      ethereum.Value.fromAddress(originAddress)
    )
  )
  thirdPartyBadgeClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "recipientAddress",
      ethereum.Value.fromAddress(recipientAddress)
    )
  )
  thirdPartyBadgeClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "badgeId",
      ethereum.Value.fromUnsignedBigInt(badgeId)
    )
  )

  return thirdPartyBadgeClaimedEvent
}

export function createThirdPartyBadgeMintedEvent(
  badgeId: BigInt,
  tcrItemId: Bytes
): ThirdPartyBadgeMinted {
  let thirdPartyBadgeMintedEvent = changetype<ThirdPartyBadgeMinted>(
    newMockEvent()
  )

  thirdPartyBadgeMintedEvent.parameters = new Array()

  thirdPartyBadgeMintedEvent.parameters.push(
    new ethereum.EventParam(
      "badgeId",
      ethereum.Value.fromUnsignedBigInt(badgeId)
    )
  )
  thirdPartyBadgeMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tcrItemId",
      ethereum.Value.fromFixedBytes(tcrItemId)
    )
  )

  return thirdPartyBadgeMintedEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
