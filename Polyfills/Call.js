// Polyfill for call method => call()
// methodName.call(context, ...args);
// args will be pass as comma separated.

let car = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`,
  );
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "it's not callable");
  }

  context.fn = this;
  context.fn(...args);
};
console.log(purchaseCar.myCall(car, "₹", 500));
// I have purchased Red - Ferrari car for ₹500
