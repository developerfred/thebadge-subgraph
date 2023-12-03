import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  DepositReturned,
  Initialize,
  Initialized,
  KlerosBadgeChallenged,
  KlerosChallengeEvidenceAdded,
  MintKlerosBadge,
  NewKlerosBadgeModel,
  OwnershipTransferred,
  ProtocolSettingsUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Upgraded
} from "../generated/KlerosBadgeModelController/KlerosBadgeModelController"

export function createDepositReturnedEvent(
  recipient: Address,
  amount: BigInt,
  badgeId: BigInt
): DepositReturned {
  let depositReturnedEvent = changetype<DepositReturned>(newMockEvent())

  depositReturnedEvent.parameters = new Array()

  depositReturnedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  depositReturnedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositReturnedEvent.parameters.push(
    new ethereum.EventParam(
      "badgeId",
      ethereum.Value.fromUnsignedBigInt(badgeId)
    )
  )

  return depositReturnedEvent
}

export function createInitializeEvent(
  admin: Address,
  tcrFactory: Address
): Initialize {
  let initializeEvent = changetype<Initialize>(newMockEvent())

  initializeEvent.parameters = new Array()

  initializeEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  initializeEvent.parameters.push(
    new ethereum.EventParam(
      "tcrFactory",
      ethereum.Value.fromAddress(tcrFactory)
    )
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

export function createKlerosBadgeChallengedEvent(
  badgeId: BigInt,
  challenger: Address,
  evidence: string
): KlerosBadgeChallenged {
  let klerosBadgeChallengedEvent = changetype<KlerosBadgeChallenged>(
    newMockEvent()
  )

  klerosBadgeChallengedEvent.parameters = new Array()

  klerosBadgeChallengedEvent.parameters.push(
    new ethereum.EventParam(
      "badgeId",
      ethereum.Value.fromUnsignedBigInt(badgeId)
    )
  )
  klerosBadgeChallengedEvent.parameters.push(
    new ethereum.EventParam(
      "challenger",
      ethereum.Value.fromAddress(challenger)
    )
  )
  klerosBadgeChallengedEvent.parameters.push(
    new ethereum.EventParam("evidence", ethereum.Value.fromString(evidence))
  )

  return klerosBadgeChallengedEvent
}

export function createKlerosChallengeEvidenceAddedEvent(
  badgeId: BigInt,
  challenger: Address,
  evidence: string
): KlerosChallengeEvidenceAdded {
  let klerosChallengeEvidenceAddedEvent = changetype<
    KlerosChallengeEvidenceAdded
  >(newMockEvent())

  klerosChallengeEvidenceAddedEvent.parameters = new Array()

  klerosChallengeEvidenceAddedEvent.parameters.push(
    new ethereum.EventParam(
      "badgeId",
      ethereum.Value.fromUnsignedBigInt(badgeId)
    )
  )
  klerosChallengeEvidenceAddedEvent.parameters.push(
    new ethereum.EventParam(
      "challenger",
      ethereum.Value.fromAddress(challenger)
    )
  )
  klerosChallengeEvidenceAddedEvent.parameters.push(
    new ethereum.EventParam("evidence", ethereum.Value.fromString(evidence))
  )

  return klerosChallengeEvidenceAddedEvent
}

export function createMintKlerosBadgeEvent(
  badgeId: BigInt,
  evidence: string
): MintKlerosBadge {
  let mintKlerosBadgeEvent = changetype<MintKlerosBadge>(newMockEvent())

  mintKlerosBadgeEvent.parameters = new Array()

  mintKlerosBadgeEvent.parameters.push(
    new ethereum.EventParam(
      "badgeId",
      ethereum.Value.fromUnsignedBigInt(badgeId)
    )
  )
  mintKlerosBadgeEvent.parameters.push(
    new ethereum.EventParam("evidence", ethereum.Value.fromString(evidence))
  )

  return mintKlerosBadgeEvent
}

export function createNewKlerosBadgeModelEvent(
  badgeModelId: BigInt,
  tcrAddress: Address,
  registrationMetaEvidence: string,
  clearingMetaEvidence: string
): NewKlerosBadgeModel {
  let newKlerosBadgeModelEvent = changetype<NewKlerosBadgeModel>(newMockEvent())

  newKlerosBadgeModelEvent.parameters = new Array()

  newKlerosBadgeModelEvent.parameters.push(
    new ethereum.EventParam(
      "badgeModelId",
      ethereum.Value.fromUnsignedBigInt(badgeModelId)
    )
  )
  newKlerosBadgeModelEvent.parameters.push(
    new ethereum.EventParam(
      "tcrAddress",
      ethereum.Value.fromAddress(tcrAddress)
    )
  )
  newKlerosBadgeModelEvent.parameters.push(
    new ethereum.EventParam(
      "registrationMetaEvidence",
      ethereum.Value.fromString(registrationMetaEvidence)
    )
  )
  newKlerosBadgeModelEvent.parameters.push(
    new ethereum.EventParam(
      "clearingMetaEvidence",
      ethereum.Value.fromString(clearingMetaEvidence)
    )
  )

  return newKlerosBadgeModelEvent
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
