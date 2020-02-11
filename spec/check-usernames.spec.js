const checkUsernames = require("../katas/check-usernames");
const { expect } = require("chai");

describe.only("checkUsernames", () => {
  it("returns true if the username is at least 5 characters", () => {
    let username = "dumbledore";
    let actual = checkUsernames(username);
    let expected = true;
    expect(actual).to.equal(expected);

    username = "roy";
    actual = checkUsernames(username);
    expected = false;
    expect(actual).to.equal(expected);
  });
  it("returns username is no longer than 20 characters", () => {
    let username = "supercalifragilisticexpialidocious";
    let actual = checkUsernames(username);
    let expected = false;
    expect(actual).to.equal(expected);
  });
});
