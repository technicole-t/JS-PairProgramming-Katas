const sumDigits = require("../katas/sum-digits");
const { expect } = require("chai");

describe("sumDigits", () => {
  it("returns 0 when no argument is passed", () => {
    const sum = sumDigits();
    const expected = 0;
    expect(sum).to.eql(expected);
  });
  it("returns the number passed when only one number is passed", () => {
    const sum = sumDigits(5);
    const expected = 5;
    expect(sum).to.eql(expected);
  });
  it("returns the sum of the two digits when a two-digit number is passed", () => {
    const sum = sumDigits(22);
    const expected = 4;
    expect(sum).to.eql(expected);
  });
  it("returns the sum of a number passed that is not an integer", () => {
    const sum = sumDigits(22.2);
    const expected = 6;
    expect(sum).to.eql(expected);
  });
});
