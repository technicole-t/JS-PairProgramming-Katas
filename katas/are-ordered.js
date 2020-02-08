/*
  the areOrdered function should take an array of numbers as an input.
  It should return true if all the numbers are in ascending order and false if they are not.
  An empty array should return false.
*/

function areOrdered(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

module.exports = areOrdered;
