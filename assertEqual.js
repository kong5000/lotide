let assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✓✓✓ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`xxx Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports  = assertEqual;

