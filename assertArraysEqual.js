const eqArrays = require('./eqArrays')

let assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✓✓✓ Assertion Passed: ${array1} === ${array2}`);
    return true;
  } else {
    console.log(`xxx Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
};


module.exports = assertArraysEqual;
