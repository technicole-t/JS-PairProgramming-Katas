const areOrdered = require("../katas/are-ordered");
const { expect } = require("chai");

describe.only("areOrdered", () => {
  it("returns false when an empty array is passed", () => {
    const nums = [];
    const actual = areOrdered(nums);
    const expected = false;
    expect(actual).to.eql(expected);
  });
  it("should return false if array of 2 numbers in not in ascending order", () => {
    const nums = [2, 1];
    const actual = areOrdered(nums);
    const expected = false;
    expect(actual).to.eql(expected);
  });
  it("should return true in an array of two numbers that are sorted in ascending order", () => {
    const nums = [1, 2];
    const actual = areOrdered(nums);
    const expected = true;
    expect(actual).to.eql(expected);
  });
  it("should return false if array of multiple numbers is not in ascending order", () => {
    const nums = [7, 6, 9, 2, 70, 8];
    const actual = areOrdered(nums);
    const expected = false;
    expect(actual).to.eql(expected);
  });
  it("should return true in an array with multiple numbers in ascending order", () => {
    const nums = [1, 2, 5, 10, 50, 99, 100];
    const actual = areOrdered(nums);
    const expected = true;
    expect(actual).to.eql(expected);
  });
});
