const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true with [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  })
  it("returns false with [1, \"2\", 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, "2", 3], [1, 2, 3]), false);
  })
})

