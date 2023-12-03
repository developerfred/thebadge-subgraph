import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { DepositReturned } from "../generated/schema"
import { DepositReturned as DepositReturnedEvent } from "../generated/KlerosBadgeModelController/KlerosBadgeModelController"
import { handleDepositReturned } from "../src/kleros-badge-model-controller"
import { createDepositReturnedEvent } from "./kleros-badge-model-controller-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let recipient = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount = BigInt.fromI32(234)
    let badgeId = BigInt.fromI32(234)
    let newDepositReturnedEvent = createDepositReturnedEvent(
      recipient,
      amount,
      badgeId
    )
    handleDepositReturned(newDepositReturnedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DepositReturned created and stored", () => {
    assert.entityCount("DepositReturned", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DepositReturned",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "recipient",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DepositReturned",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "DepositReturned",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "badgeId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
