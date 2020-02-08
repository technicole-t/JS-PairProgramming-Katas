const alternateCase = require("../katas/alternate-case");
const { expect } = require("chai");

describe.only("alternateCase", () => {
  it("returns a string of two letters with the first letter capitalised and the second letter lowercase", () => {
    const str = "hi";
    const actual = alternateCase(str);
    const expected = "Hi";
    expect(actual).to.eql(expected);
  });
  it("returns a string of one long word with every other letter capitalised", () => {
    const str = "concentrate";
    const actual = alternateCase(str);
    const expected = "CoNcEnTrAtE";
    expect(actual).to.eql(expected);
  });
  it("returns a string with more than one work with every other letter capitalised", () => {
    const str = "once upon a time";
    const actual = alternateCase(str);
    const expected = "OnCe uPoN A TiMe";
    expect(actual).to.eql(expected);
  });
});
