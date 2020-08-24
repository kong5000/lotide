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
module.exports = letterPositions;
