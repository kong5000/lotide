const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true with [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual([1, 2, 3], [1, 2, 3]);
  })
  it("returns false with [1, \"2\", 3] and [1, 2, 3]", () => {
    assert.deepEqual([1, "2", 3], [1, 2, 3]);
  })
})

