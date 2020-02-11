/*
  The function checkUsernames should take an array of usernames and 
  return true if they are all valid and false if any are not valid.
  A valid username:
  - is at least 5 characters long
  - may only contain lowercase letters, numbers and underscores
  - is no longer than 20 characters
*/

function checkUsernames(usernames) {
  if (usernames.length === 0) return false;
  const usernameRulezRegex = /^[a-z0-9_]{5,20}$/g;
  if (usernameRulezRegex.test(usernames[0])) {
    return true;
  };
  return false;
};

module.exports = checkUsernames;
