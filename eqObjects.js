const eqArrays = require('./eqArrays')
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }

  for (let key in object1) {
    if (!object2[key]) {
      return false
    }
    if (typeof object1[key] === "object") {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object2[key] !== object1[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;