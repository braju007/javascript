// array method map polyfill => map()

// Array.map((num, i, arr) => {});

Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};

const nums = [1, 2, 3, 4];

const multiplyThree = nums.myMap((num, i, arr) => {
  return num * 3;
});

console.log(multiplyThree);
// [ 3, 6, 9, 12 ]
