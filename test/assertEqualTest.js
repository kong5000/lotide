const assertEqual = require("../assertEqual");
const assert = require('chai').assert;

describe("#assertEqual", () =>{
  it("returns true for 1 and 1", () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });
  it("returns false for 1 and -1", () => {
    assert.strictEqual(assertEqual(1, -1), false);
  });
  it("returns false for lighthouse and Lighthouse", () => {
    assert.strictEqual(assertEqual("lighthouse", "Lighthouse"), false);
  });
})
