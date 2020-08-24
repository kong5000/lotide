let assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✓✓✓ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`xxx Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key
    }
  }
  return undefined
}
module.exports = findKey;

assertEqual(
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  }, x => x.stars === 2), "noma"
)

assertEqual(
  findKey(
    {
      first: { data: 'abcdefg' },
      second: { data: 'abc' },
      third: { data: 'ab' }
    },
    x => x.data.length === 3),
  "second"
)

assertEqual(
  findKey(
    {
      first: { data: 'abcdefg' },
      second: { data: 'abc' },
      third: { data: 'ab' }
    },
    x => x.data === 'abcdefg'),
  "first"
)