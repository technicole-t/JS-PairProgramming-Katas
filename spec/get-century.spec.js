const getCentury = require('../katas/get-century');
const { expect } = require('chai');

describe('getCentury', () => {
  it("returns 'Please enter a year' if no argument is passed", () => {
    expect(getCentury()).to.equal("Please enter a year");
  });
  it("returns a string containing the correct century if passed a 'th' year", () => {
    let actual = getCentury(1999)
    let expected = "20th"
    expect(actual).to.equal(expected)

    actual = getCentury(1400)
    expected = "15th"
    expect(actual).to.equal(expected)
  });
  it("returns a string containing the correct century if passed a 'st' year", () => {
    let actual = getCentury(2000)
    let expected = "21st"
    expect(actual).to.equal(expected)

    actual = getCentury(10000);
    expected = '101st';
    expect(actual).to.equal(expected)
  });
  it("returns a string containing the correct century if passed a 'nd' year", () => {
    let actual = getCentury(2122)
    let expected = "22nd"
    expect(actual).to.equal(expected)

    actual = getCentury(9100);
    expected = '92nd';
    expect(actual).to.equal(expected)
  });
  it("returns a string containing the correct century if passed a 'rd' year", () => {
    let actual = getCentury(2222)
    let expected = "23rd"
    expect(actual).to.equal(expected)

    actual = getCentury(9200);
    expected = '93rd';
    expect(actual).to.equal(expected)
  });
});