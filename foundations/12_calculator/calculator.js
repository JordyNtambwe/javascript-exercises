const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return b - a;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((sum, current) => sum * current, 0);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function() {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
