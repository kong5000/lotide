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

const middle = function (array) {
  let result = []
  const length = array.length;
  if (length <= 2) {
    return result;
  }
  if (length % 2 !== 0) {
    let midIndex = (length - 1) / 2
    return [array[midIndex]]
  } else {
    let midIndexStart = (length - 2) / 2
    return [array[midIndexStart], array[midIndexStart + 1]]
  }

}

assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle(["a", 'b', "c", "d"]), ["b", "c"])
