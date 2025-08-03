// array method filter polyfill => filter()

// Array.filter((num, i, arr) => {});

Array.prototype.myFilter = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const nums = [1, 2, 3, 4];

const divisibleByTwo = nums.myFilter((num, i, arr) => {
  return num % 2 === 0;
});

console.log(divisibleByTwo);
// [ 2, 4 ]
