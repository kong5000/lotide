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

const takeUntil = function(array, callback) {
  let result = []
  for(let i = 0; i < array.length; i++){
    if(callback(array[i])){
      break
    }
    result.push(array[i])
  }
  return result
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2])
assertArraysEqual(takeUntil(data1, x => x % 2 === 0), [1])

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','),["I've", "been", "to", "Hollywood"])
