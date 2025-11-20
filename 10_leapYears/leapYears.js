const leapYears = function (year) {
  const leapYearsDivisibleByFour = year % 4 === 0;
  const aCentury = year % 100 === 0;
  const leapYearsDivisibleByFourHundred = year % 400 === 0;

  if (
    leapYearsDivisibleByFour &&
    (!aCentury || leapYearsDivisibleByFourHundred)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(leapYears(2000));
console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
