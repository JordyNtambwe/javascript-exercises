const fibonacci = function(count) {
  if (count < 0) {
    return;
  }
  if (count === 0) {
    return 0;
  };
  let a = 0;
  let b = 1;
  for (let i = 0; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  };
  return temp;
};

console.log(fibonacci(4));
console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
