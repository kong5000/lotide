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

const letterPositions = function (sentence) {
  const results = {};
  let index = 0;
  for (let char of sentence) {
    if (char !== ' ') {
      if (!results[char]) {
        results[char] = [index]
      } else {
        results[char].push(index)
      }
    }
    index++;
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"))
assertArraysEqual(letterPositions("hello").h, [0])
assertArraysEqual(letterPositions("hello").l, [2, 3])