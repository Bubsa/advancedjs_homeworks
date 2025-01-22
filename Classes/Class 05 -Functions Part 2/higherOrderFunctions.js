// Test data
const numbers = [2, 5, 8, 10, 15, 3, 7, 12, 17, 34, 53];

const mixedNumbers = [
  5, -3, 12, -8, 9, -4, 7, -1, 20, -15, 6, -10, 18, -2, 11, -13,
];

const users = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    occupation: "Software Engineer",
    gender: "female",
  },
  { id: 2, name: "Bob", age: 35, occupation: "Data Scientist", gender: "male" },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    occupation: "Graphic Designer",
    gender: "male",
  },
  {
    id: 4,
    name: "David",
    age: 42,
    occupation: "Marketing Manager",
    gender: "male",
  },
  {
    id: 5,
    name: "Eva",
    age: 31,
    occupation: "Product Manager",
    gender: "female",
  },
];

const students = ["Pane", "Stefan", "Olgica", "Ilina", "Petar", "Filip"];

// *forEach*
// Izvrshuva funkcija ednash za sekoj element na niza
// Ne vrakja vrednost (TOA ZNACHI, deka ne mozeme da promenime niza ako recheme ispisheme logika da gi stavi site broevi pomnozeni so 2 vo nova niza)
// Ja modificiara originalnata niza
// Primer 1: koristenje forEach za da izlogirash sekoj broj na konzola

numbers.forEach((num) => {
  console.log(num);
});

// Koristenje forEach da se pokaze informacija na korisnik

users.forEach((user) => {
  console.log(`${user.name} - ${user.age} old - ${user.occupation}`);
});

// * * MAP * *
// Map pravi nova niza od modificirani vrednosti
// Ne ja modificira originalnata niza
// Izvrshuva funkcija za sekoj element na niza

const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);
console.log(numbers);

// * * FILTER * *
// Izvrshuva odredena funkcija za sekoj element vo niza
// Ako elementite go pominat testot togas se vpishuva vo nizata
// Ne ja modificira originalnata niza

// Primer: da gi vrati parnite broevi

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// Da ni vrati korisnici sho se nad 30

const olderUsers = users.filter((user) => user.age > 30);
console.log(olderUsers);

// Da ni vrati male genders
const maleUsers = users.filter((user) => user.gender === "male");
console.log(maleUsers);

//  * * REDUCE * *
// Izvrshuva namaluvachka funkcija za sekoj element na niza i rezultatot na kalkulacijata od prethodniot element se dodava na sledniot element
// Vrakja edna vrednost

// Primer: iskoristuvanje reduce iskalkuliraj sumata na site brojki

const sum = numbers.reduce((acc, curr) => acc + curr, 0); // bara dva argumenti, edniot e total rezultat sho se vrakja na kraj, drugiot e iteratorot na koj sho e i za na kraj e potrebna pochetnata vrednost sho e 0, samite argumenti mozat da bidat imenuvani kako sakas. Naming convention si e sve
console.log(sum);

// Na ovoj nachin gi mnozis sekoj prethoden proizvod so sledniot broj vo nizata. Ne se stava 0 tuku 1 posho, ne se mnozi so 0
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product);

// Primer: Prosek na godini

const averageAge =
  users.reduce((acc, user) => acc + user.age, 0) / users.length;
console.log(averageAge);

// *  * SORT *  *
// Sortira elementi na niza i gi vrakja kako referenca vo istata niza

// Sortiraj brojki vo ascending ili descending

const numbersToSort = [
  5, -3, 12, -8, 9, -4, 7, -1, 20, -15, 6, -10, 18, -2, 11, -13,
];

numbersToSort.sort((a, b) => a - b); // Tuka se potrebni dvata argumenti a i b, i ja stavash arrow funkcijata, potoa stavash a-b za da bide vo ascending order
console.log("Ascending", numbersToSort);

numbersToSort.sort((a, b) => b - a); // Descending order
console.log("Descending", numbersToSort);
