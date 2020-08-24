const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.strictEqual(assertArraysEqual(middle([1]), []), true);
  });
  it("returns '[]' for [1, 2]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2]), []), true);
  });
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3]), [2]), true);
  });
  it("returns [\"b\", \"c\"] for [\"a\", \"b\", \"c\", \"d\"]", () => {
    assert.strictEqual(assertArraysEqual(middle(["a", 'b', "c", "d"]), ["b", "c"]), true);
  });

})