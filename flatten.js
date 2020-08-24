function flatten(array) {
  let result = [];

  for (let item of array) {
    if (!Array.isArray(item)) {
      result.push(item)
    } else {
      for (let innerItem of item) {
        result.push(innerItem)
      }
    }
  }
  return result;
}

module.exports = flatten;



