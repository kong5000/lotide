const assertEqual = require('./assertEqual')
let tail = function(array) {
  const result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};
module.exports = tail;
