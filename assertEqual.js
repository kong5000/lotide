let assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✓✓✓ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`xxx Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(1, 1);
assertEqual(-1, 1);
assertEqual("lighthouse", "Lighthouse");
assertEqual("lighthouse", "lighthouse");