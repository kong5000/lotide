const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

const middle = function (array) {
  let result = []
  const length = array.length;
  if (length <= 2) {
    return result;
  }
  if (length % 2 !== 0) {
    let midIndex = (length - 1) / 2
    return [array[midIndex]]
  } else {
    let midIndexStart = (length - 2) / 2
    return [array[midIndexStart], array[midIndexStart + 1]]
  }

}

console.log(middle([1]))
module.exports =  middle;
