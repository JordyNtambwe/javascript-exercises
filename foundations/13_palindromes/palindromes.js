const palindromes = function (string) {
  const alphabet = abcdefghijklmnopqrstuvwxyz;
  let notReversed = string
  .toLowerCase()
  .split('')
  .filter((character) => alphabet.includes(character))
  .join('')
  let reversed = notReversed.split('').reverse().join('')
  if (notReversed === reversed) {
    return true;
  } else {
    return false;
  };
};

console.log(palindromes('racecar'));
console.log(palindromes('tacos'));
// Do not edit below this line
module.exports = palindromes;
