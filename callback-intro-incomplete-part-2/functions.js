const identity = function (value) {
  return value;
};

const indexOf = function (array, target) {
  var result = -1;

  each(array, function (item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });
  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const filter = function (collection, callBack) {

  let result = [];

  each(collection, function (element) {
    if (callBack(element)) {
      result.push(element)
    }
  })
  return result
}
// from like 39 up to the function on 33 is the callback
const map = function (collection, iterator) {
  let result = [];
  each(collection, function (item) {
    result.push(iterator(item))
  })
  return result
};

const reject = function (collection, callbackTest) {
  return filter(collection, function (item) {
    return !callbackTest(item)
    // isEven
  })
}
// value is the number that is put into the test
// collection = full array
// element = single item of array


// const uniq = function (array) {
//   let result = [];
//   filter(array, function(item){
//     if (!result.includes(item)) {
//       result.push(item)
//     }
//   })
//   return result
// }

const uniq = function (array) {
  let result = [];
  each(array, function(element, index, collection) {
    if (indexOf(result, element) === -1)
    result.push(element)
  })
  return result
}

const reduce = function (collection, iterator, accumulator) {
  
};

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
