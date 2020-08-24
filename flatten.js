let eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}

let assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✓✓✓ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`xxx Assertion Failed: ${array1} !== ${array2}`);
  }
};

function flatten(array) {
  let result = [];

  for (let item of array) {
    if (!Array.isArray(item)) {
      result.push(item)
    } else {
      for (let innerItem of item) {
        result.push(innerItem)
      }
    }
  }
  return result;
}

module.exports = flatten;

assertArraysEqual(flatten([1, 2, 3, [4, 5, 6], 7, 8]), [1,2,3,4,5,6,7,8])
assertArraysEqual(flatten([["a","b","c","d"]]), ["a","b","c","d"])
assertArraysEqual(flatten([["a","b","c","d"], "e", "f"]), ["a","b","c","d","e","f"])

