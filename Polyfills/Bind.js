// Polyfill for bind method => bind()
// methodName.bind(context, ...args);

let car = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`,
  );
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = purchaseCar.myBind(car);
//   const newFunc = purchaseCar.myBind(car, "₹", 500);
// You can add args here or while invoking the newFunc method. Both are valid.
console.log(newFunc("₹", 500));
// I have purchased Red - Ferrari car for ₹500
