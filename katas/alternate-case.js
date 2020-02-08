/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str.charAt(i).toUpperCase();
    } else {
      result += str.charAt(i).toLowerCase();
    }
  }
  return result;
}

module.exports = alternateCase;
