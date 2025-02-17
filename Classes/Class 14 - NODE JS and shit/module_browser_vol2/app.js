// import {
//   getUserByUsername,
//   getUserByEmail,
//   getUsersByRole,
//   getAllUserNames,
// } from "./userService.js";

import * as userService from "./userService.js";

const usernames = userService.getAllUserNames();
console.log(usernames);
