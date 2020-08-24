const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }

  for (let key in object1) {
    if (!object2[key]) {
      return false
    } else if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object2[key] !== object1[key]) {
      return false;
    }
  }
  return true;
};

let assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✓✓✓ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`xxx Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: 1, b: 2, c: 3 }, { b: 2, c: 3, a: 1 })
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { b: 2, c: 3, z: 1 })

