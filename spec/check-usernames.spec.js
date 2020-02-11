const checkUsernames = require("../katas/check-usernames");
const { expect } = require("chai");

describe.only("checkUsernames", () => {
  it("returns false when an empty array is passed", () => {
    const usernames = [];
    const actual = checkUsernames(usernames);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("returns true if the one username passed is at least 5 characters", () => {
    let usernames = ["dumbledore"];
    let actual = checkUsernames(usernames);
    let expected = true;
    expect(actual).to.equal(expected);
  });
  it("returns false if the one username passed is less than 5 characters", () => {
    let usernames = ["roy"];
    let actual = checkUsernames(usernames);
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("returns false if there is only one username in the array which is more than 20 characters", () => {
    const usernames = ["supercalifragilisticexpialidocious"];
    const actual = checkUsernames(usernames);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("returns false if the username contains uppercase characters", () => {
    const usernames = ["Dumbledore"];
    const actual = checkUsernames(usernames);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("returns true if the username contains letters and numbers", () => {
    const usernames = ["dumbl3d0r3"];
    const actual = checkUsernames(usernames);
    const expected = true;
    expect(actual).to.equal(expected);
  });
  it("returns true if the username contains only numbers", () => {
    const usernames = ["345678"];
    const actual = checkUsernames(usernames);
    const expected = true;
    expect(actual).to.equal(expected);
  });
  it("returns true if the username contains an underscore", () => {
    const usernames = ["booooo_m"];
    const actual = checkUsernames(usernames);
    const expected = true;
    expect(actual).to.equal(expected);
  });
});
