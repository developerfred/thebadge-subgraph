import {
  BadgeModelControllerAdded as BadgeModelControllerAddedEvent,
  BadgeModelControllerUpdated as BadgeModelControllerUpdatedEvent,
  BadgeModelCreated as BadgeModelCreatedEvent,
  BadgeModelSuspended as BadgeModelSuspendedEvent,
  BadgeModelUpdated as BadgeModelUpdatedEvent,
  BadgeModelVersionUpdated as BadgeModelVersionUpdatedEvent,
  Initialize as InitializeEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent
} from "../generated/TheBadgeModels/TheBadgeModels"
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
} from "../generated/schema"

export function handleBadgeModelControllerAdded(
  event: BadgeModelControllerAddedEvent
): void {
  let entity = new BadgeModelControllerAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.controllerName = event.params.controllerName.toHexString();
  entity.controllerAddress = event.params.controllerAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBadgeModelControllerUpdated(
  event: BadgeModelControllerUpdatedEvent
): void {
  let entity = new BadgeModelControllerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.controllerName = event.params.controllerName.toHexString();
  entity.controllerAddress = event.params.controllerAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBadgeModelCreated(event: BadgeModelCreatedEvent): void {
  let entity = new BadgeModelCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.badgeModelId = event.params.badgeModelId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBadgeModelSuspended(
  event: BadgeModelSuspendedEvent
): void {
  let entity = new BadgeModelSuspended(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.badgeModelId = event.params.badgeModelId
  entity.suspended = event.params.suspended

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBadgeModelUpdated(event: BadgeModelUpdatedEvent): void {
  let entity = new BadgeModelUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.badgeModelId = event.params.badgeModelId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBadgeModelVersionUpdated(
  event: BadgeModelVersionUpdatedEvent
): void {
  let entity = new BadgeModelVersionUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.badgeModelId = event.params.badgeModelId
  entity.newBadgeModelId = event.params.newBadgeModelId
  entity.version = event.params.version

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
