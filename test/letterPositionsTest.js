const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("letterPositions test", () =>{
  it("returns the positions of specified letter", () => {
    assert.deepEqual(letterPositions("hello").h, [0])
    assert.deepEqual(letterPositions("hello").l, [2, 3])
  });
})
