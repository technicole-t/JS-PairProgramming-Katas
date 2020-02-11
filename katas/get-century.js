/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 10,000 (the '101st' century)
*/

function getCentury(year) {
  if (year === undefined) return "Please enter a year";

  const yearStart = Math.floor(year / 100) + 1;
  const century = yearStart.toString();
  const thRegex = /[0|4-9]/g;
  const endCharCentury = century[century.length - 1];

  if ((thRegex.test(endCharCentury) === true) || yearStart > 10 && yearStart < 20) {
    return `${century}th`;
  } else if (endCharCentury === "1") {
    return `${century}st`
  } else if (endCharCentury === "2") {
    return `${century}nd`
  } else if (endCharCentury === "3") {
    return `${century}rd`
  }
};

module.exports = getCentury;