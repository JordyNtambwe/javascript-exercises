const removeFromArray = function(array, ...elementToRemove) {
  return array.filter(item => !elementToRemove.includes(item));
};
removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
