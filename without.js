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


function without(source, itemsToRemove) {
  let result = [];
  for (sourceItem of source) {
    let removeItem = false;
    for (itemToRemove of itemsToRemove) {
      if(sourceItem === itemToRemove){
        removeItem = true;
      }
    }
    if(!removeItem){
      result.push(sourceItem)
    }
  }
  return result;
}

assertArraysEqual(without([1,2,3],[2,3]), [1])
assertArraysEqual(without([1,2,3],[2,"3"]), [1,3])
assertArraysEqual(without(["1",2,3],["1",3]), [2])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);