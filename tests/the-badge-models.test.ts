import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { BadgeModelControllerAdded } from "../generated/schema"
import { BadgeModelControllerAdded as BadgeModelControllerAddedEvent } from "../generated/TheBadgeModels/TheBadgeModels"
import { handleBadgeModelControllerAdded } from "../src/the-badge-models"
import { createBadgeModelControllerAddedEvent } from "./the-badge-models-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let controllerName = "Example string value"
    let controllerAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newBadgeModelControllerAddedEvent = createBadgeModelControllerAddedEvent(
      controllerName,
      controllerAddress
    )
    handleBadgeModelControllerAdded(newBadgeModelControllerAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BadgeModelControllerAdded created and stored", () => {
    assert.entityCount("BadgeModelControllerAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BadgeModelControllerAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "controllerName",
      "Example string value"
    )
    assert.fieldEquals(
      "BadgeModelControllerAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "controllerAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
