// users.js
const users = []; // In-memory user storage for demonstration

module.exports = {
  findUser: (username) => users.find(user => user.username === username),
  addUser: (user) => users.push(user),
  getAllUsers: () => users,
};
