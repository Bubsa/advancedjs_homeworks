// const users = [
//   {
//     id: 1,
//     name: "Alice",
//     age: 28,
//     occupation: "Software Engineer",
//     gender: "female",
//   },
//   { id: 2, name: "Bob", age: 35, occupation: "Data Scientist", gender: "male" },
//   {
//     id: 3,
//     name: "Charlie",
//     age: 22,
//     occupation: "Graphic Designer",
//     gender: "male",
//   },
//   {
//     id: 4,
//     name: "David",
//     age: 42,
//     occupation: "Marketing Manager",
//     gender: "male",
//   },
//   {
//     id: 5,
//     name: "Eva",
//     age: 31,
//     occupation: "Product Manager",
//     gender: "female",
//   },
// ];

// // Sortiranje korisnici po ime

// // Ascending order
// const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));

// // Descending order
// // const sortedUsers = users.sort((a, b) => b.name.localeCompare(a.name));
// console.log(sortedUsers);

// // EVERY - Proveruva sekoj element dali pominuva niz odreden uslov
// // Tuka bara dali SITE se nad 18 godini. Chim ispolnuva vrakja boolean t.e TRUE. Ako ne e togas vrakja false
// const areAllUsersAdult = users.every((user) => user.age >= 18);
// console.log(areAllUsersAdult);

// // SOME- Vrakja barem EDEN od nizata dali ja ima taa vrednost
// const areThereProgrammers = users.some(
//   (user) => user.occupation === "Software Engineer"
// );
// console.log(areThereProgrammers);

// // FIND
// const foundUser = users.find((user) => user.age === 22);
// console.log(foundUser);
