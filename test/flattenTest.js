const assert = require('chai').assert;
const flatten  = require('../flatten')

assert.deepEqual(flatten([1, 2, 3, [4, 5, 6], 7, 8]), [1,2,3,4,5,6,7,8])
assert.deepEqual(flatten([["a","b","c","d"]]), ["a","b","c","d"])
assert.deepEqual(flatten([["a","b","c","d"], "e", "f"]), ["a","b","c","d","e","f"])
