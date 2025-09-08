const removeFromArray = function(item1, ...item2) {
  return item1.filter(value => !item2.includes(value))
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
