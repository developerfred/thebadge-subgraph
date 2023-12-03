import {
  DepositReturned as DepositReturnedEvent,
  Initialize as InitializeEvent,
  Initialized as InitializedEvent,
  KlerosBadgeChallenged as KlerosBadgeChallengedEvent,
  KlerosChallengeEvidenceAdded as KlerosChallengeEvidenceAddedEvent,
  MintKlerosBadge as MintKlerosBadgeEvent,
  NewKlerosBadgeModel as NewKlerosBadgeModelEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProtocolSettingsUpdated as ProtocolSettingsUpdatedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  Upgraded as UpgradedEvent
} from "../generated/KlerosBadgeModelController/KlerosBadgeModelController"
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
} from "../generated/schema"

export function handleDepositReturned(event: DepositReturnedEvent): void {
  let entity = new DepositReturned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.badgeId = event.params.badgeId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialize(event: InitializeEvent): void {
  let entity = new Initialize(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.admin = event.params.admin
  

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleKlerosBadgeChallenged(
  event: KlerosBadgeChallengedEvent
): void {
  let entity = new KlerosBadgeChallenged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.badgeId = event.params.badgeId
  entity.challenger = event.params.challenger
  entity.evidence = event.params.evidence

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleKlerosChallengeEvidenceAdded(
  event: KlerosChallengeEvidenceAddedEvent
): void {
  let entity = new KlerosChallengeEvidenceAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.badgeId = event.params.badgeId
  entity.challenger = event.params.challenger
  entity.evidence = event.params.evidence

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintKlerosBadge(event: MintKlerosBadgeEvent): void {
  let entity = new MintKlerosBadge(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.badgeId = event.params.badgeId
  entity.evidence = event.params.evidence

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewKlerosBadgeModel(
  event: NewKlerosBadgeModelEvent
): void {
  let entity = new NewKlerosBadgeModel(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.badgeModelId = event.params.badgeModelId
  entity.tcrAddress = event.params.tcrAddress
  entity.registrationMetaEvidence = event.params.registrationMetaEvidence
  entity.clearingMetaEvidence = event.params.clearingMetaEvidence

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProtocolSettingsUpdated(
  event: ProtocolSettingsUpdatedEvent
): void {
  let entity = new ProtocolSettingsUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
