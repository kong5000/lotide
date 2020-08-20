let eqArrays = (array1, array2) => {
  if(array1.length !== array2.length){
    return false;
  }
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(["a", "ab", "abc"],word => word[0]), ["a", "a", "a"])

//Using map to get last letter of each string
assertArraysEqual(map(["a", "ab", "abc"],word => word[word.length - 1]), ["a", "b", "c"])

//Using map to get the middle letter of each string
assertArraysEqual(map(["baab", "abc", "dce"],word => word[Math.round((word.length -1)/ 2)]), ["a", "b", "c"])