// Url: https://jsonplaceholder.typicode.com/users

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   console.log(await response.json());
  return response.json();
};

// Zemi usernames:
const getUsernames = async () => {
  const users = await fetchUsers();
  //   console.log(users);
  return users.map((user) => user.username);
};

// async function runTests() {
//   console.log("Usernames:", await getUsernames());
// }
// runTests();

const getUsersByCity = async () => {
  const users = await fetchUsers();
  console.log(users);
  return users.filter((user) => user.address.city === "Gwenborough");
};

const getEmailsWithWebsites = async () => {
  const users = await fetchUsers();
  return users.filter((user) => user.website).map((user) => user.email);
};

const companiesStartingWith = async () => {
  const users = await fetchUsers();
  return users
    .filter((user) => user.company.name.toLowerCase().startsWith("r"))
    .map((user) => user.company.name);
};

const getUserSumaries = async () => {
  const users = await fetchUsers();
  return users.map((user) => ({
    name: user.name,
    company: user.company.name,
    phone: user.phone,
  }));
};

const getUsersWithLongNames = async () => {
  const users = await fetchUsers();
  return users.filter((user) => user.name.length > 20);
};

(async () => {
  console.log("Usernames:", await getUsernames());
  console.log("Users by City:", await getUsersByCity());
  console.log("Emails with Websites:", await getEmailsWithWebsites());
  console.log("Companies startin with letter:", await companiesStartingWith());
  console.log("User summaries:", await getUserSumaries());
  console.log("Users with long names:", await getUsersWithLongNames());
})();
