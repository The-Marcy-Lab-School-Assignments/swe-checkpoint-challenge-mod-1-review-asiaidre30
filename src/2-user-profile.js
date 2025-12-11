// Return a new user object with username, email, isActive: true, loginCount: 0
const createUser = (username, email) => {
  const user = {
    username: username,
    email: email,
    isActive: true,
    loginCount: 0,
  };
  return user;
};

// Increase the user's loginCount by 1
const incrementLogin = (user) => {
  user.loginCount = user.loginCount + 1;
  return user;
};

// Set isActive to false and delete the email property. Return the user.
const deactivateUser = (user) => {
  user.isActive = false;
  delete user.email;
  return user;
};

// Print each property and value in the format "key: value"
const printUserInfo = (user) => {
  for (const Key in user) {
    console.log(`${Key}: ${user[Key]}`);
  }
};

// BONUS: Return a true copy of the user object (not a reference)
const cloneUser = (user) => {
  const newUser = {};

  for (const Key in user) {
    newUser[Key] = user[Key];
  }
  return newUser;
};

module.exports = {
  createUser,
  printUserInfo,
  incrementLogin,
  deactivateUser,
  cloneUser,
};
