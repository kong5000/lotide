let assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✓✓✓ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`xxx Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (obj, value) => {
  for(let key in obj){
      if(obj[key] === value){
        return key;
      }
  }
  return undefined
}

module.exports = findKeyByValue;


