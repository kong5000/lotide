let assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✓✓✓ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`xxx Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

module.exports  = assertEqual;

