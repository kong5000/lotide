const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#head", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };

  it("returns true if objects have the same key value pairs", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("returns false if objects don't have the same key value pairs", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it("still functions for nested objects", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true)
    assert.strictEqual(eqObjects(cd, cd2), false)
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1, k: 1 }, b: 2 }), false);
    assert.strictEqual(eqObjects({ a: { z: 1, k: { e: 100 } }, b: 2 }, { a: { z: 1, k: { e: 100 } }, b: 2 }), true);
  })
})
