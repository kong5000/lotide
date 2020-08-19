let assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✓✓✓ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`xxx Assertion Failed: ${actual} !== ${expected}`);
  }
};

function countLetters(string) {
  let result = {}
  for (let letter of string) {
    if (letter !== ' ') {
      if (!result[letter]) {
        result[letter] = 1;
      } else {
        result[letter]++;
      }
    }
  }
  return result
}

console.log(countLetters("abcda ccccsfdsdf  aaa fsdfdsa fsdfdsfdsefg"))