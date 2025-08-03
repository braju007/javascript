// Polyfill for apply method => apply()
// methodName.apply(context, [args]);
// args will be pass in array format.

let car = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`,
  );
}

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "it's not callable");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  context.fn = this;
  context.fn(...args);
};
console.log(purchaseCar.myApply(car, ["₹", 500]));
// I have purchased Red - Ferrari car for ₹500
