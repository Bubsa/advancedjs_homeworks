import { users } from "./users.js";

// console.log(users);

function getUserByEmail(email) {
  // filter ti vrakja niza dodeka find ti go vrakja prviot i posle zavrshuva
  return users.find((user) => user.email === email);
}

function getUserByUsername(username) {
  return users.find((user) => user.username === username);
}

function getUsersByRole(role) {
  return users.filter((user) => user.role === role);
}

function getAllUserNames() {
  return users.map((user) => user.username);
}

export { getUserByEmail, getUserByUsername, getUsersByRole, getAllUserNames };
