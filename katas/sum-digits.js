/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(nums) {
  if (nums === undefined) return 0;
  const stringNum = nums
    .toString()
    .replace(/\./, "")
    .split("");
  const changeToNumber = stringNum.map(num => Number(num));
  return changeToNumber.reduce((a, b) => a + b);
}
// let turnToString = nums.toString();
// let regex = /\d+/g;
// let onlyNums = turnToString.match(regex);
// console.log(onlyNums);
// let singleDigits = onlyNums.map(num => num.split(""));
// let stringToNum = singleDigits.map(item => Number(item));
// console.log(stringToNum);
// let singleDigits = onlyNums.split("");
// console.log(singleDigits);
// console.log(turnToString);
// let allNumbers = turnToString.filter(num => typeof num === "number");
// console.log(allNumbers);
// let total = 0;
// for (let i = 0; i < turnToString.length; i++) {
//   if (turnToString.includes("."))
//   total += Number(turnToString[i]);
// }
// return total;

module.exports = sumDigits;
