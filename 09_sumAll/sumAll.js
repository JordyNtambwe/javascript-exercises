const sumAll = function(sum1, sum2) {

  let result = 0;

  for (let i = 0; i < sum1; i++) {
    let num = sum1 + sum2
    if (Number.isInteger(num)) {
      result += num
    }
  }
  return result;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
