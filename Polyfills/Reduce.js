// array method reduce polyfill => reduce()

// Array.reduce((acc, curr, i, arr) => {},initialValue);

Array.prototype.myReduce = function (callback, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};

const nums = [1, 2, 3, 4];

const sumOfAllNums = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
});

console.log(sumOfAllNums);
// 10
