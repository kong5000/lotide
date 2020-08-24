const assert = require('chai').assert;
const countOnly = require('../countOnly')


describe("countOnlyTest", () => {
  it("returns correct count of each item specified", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.strictEqual(result1["Jason"], 1);
    assert.strictEqual(result1["Karima"], undefined);
    assert.strictEqual(result1["Fang"], 2);
  })
})
