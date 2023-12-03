import {
  Initialize as InitializeEvent,
  Initialized as InitializedEvent,
  NewThirdPartyBadgeModel as NewThirdPartyBadgeModelEvent,
  ProtocolSettingsUpdated as ProtocolSettingsUpdatedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  ThirdPartyBadgeClaimed as ThirdPartyBadgeClaimedEvent,
  ThirdPartyBadgeMinted as ThirdPartyBadgeMintedEvent,
  Upgraded as UpgradedEvent
} from "../generated/TpBadgeModelController/TpBadgeModelController"
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
} from "../generated/schema"

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

export function handleNewThirdPartyBadgeModel(
  event: NewThirdPartyBadgeModelEvent
): void {
  let entity = new NewThirdPartyBadgeModel(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.badgeModelId = event.params.badgeModelId
  entity.tcrAddress = event.params.tcrAddress

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

export function handleThirdPartyBadgeClaimed(
  event: ThirdPartyBadgeClaimedEvent
): void {
  let entity = new ThirdPartyBadgeClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.originAddress = event.params.originAddress
  entity.recipientAddress = event.params.recipientAddress
  entity.badgeId = event.params.badgeId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleThirdPartyBadgeMinted(
  event: ThirdPartyBadgeMintedEvent
): void {
  let entity = new ThirdPartyBadgeMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.badgeId = event.params.badgeId
  entity.tcrItemId = event.params.tcrItemId

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
