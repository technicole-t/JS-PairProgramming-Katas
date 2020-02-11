const checkUsernames = require("../katas/check-usernames");
const { expect } = require("chai");

describe.only("checkUsernames", () => {
  it("returns false when an empty array is passed", () => {
    const usernames = [];
    const actual = checkUsernames(usernames);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("returns true if there is only one username in the array which is at least 5 characters", () => {
    let usernames = ["dumbledore"];
    let actual = checkUsernames(usernames);
    let expected = true;
    expect(actual).to.equal(expected);

    usernames = ["roy"];
    actual = checkUsernames(usernames);
    expected = false;
    expect(actual).to.equal(expected);
  });
  it("returns false if there is only one username in the array which is more than 20 characters", () => {
    let usernames = ["supercalifragilisticexpialidocious"];
    let actual = checkUsernames(usernames);
    let expected = false;
    expect(actual).to.equal(expected);
  });
  // it("may only contain lowercase letters, numbers and underscores", () => {

  // })
});
