const tail = require('../tail')
const assert = require('chai').assert;

describe("#tail", () =>{
  it("does not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3); 
  })
  it("returns \"Lighthouse\" for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], 'Labs'); 
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], 'Lighthouse'); 
  });
})
