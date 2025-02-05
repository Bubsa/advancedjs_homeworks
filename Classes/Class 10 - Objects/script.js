// Proceduralno VS OOP (Object Oriented Programming)

// Procedural

const baseSalary = 30000;
const overtime = 10;
const rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

// OOP approach

const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,

  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

// Constructor functions

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  // this.year = year ? year : 2022
  // this.year = year || 2022
  this.year = year ?? new Date().getFullYear(); // koga imame getFullYear, sekoja kola sho ke ja napravime ke bide 2025

  this.start = function () {
    return `Starting ${this.make} ${this.model} year: ${this.year}`;
  };
}

const car = new Car("Ford", "Fiesta");
console.log(car.start());

// Razbiranje na kluchniot zbor `this`

// 1. `This` vo regularna funkcija

function showThis() {
  console.log(this);
}
showThis(); // `this` go referencira globalniot objekt a.k.a (prozorecot vo browser)

// 2. `this` vo OBJEKTI

const person = {
  name: "John",
  age: 30,
  sayHello() {
    console.log(`Hey my name is ${this.name}`); // `this` go referencira objektot kaj sho se naogja
  },
  sayHelloArrow: () => {
    console.log(`Hey my name is ${this.name}`); // `this` iskacha od samiot objekt i se prilepuva na globalniot objekt sho e prozorecot vo browser. Vo samiot konsol log ke ti iskoci kako "hey my name is"
  },
};
person.sayHello();
person.sayHelloArrow();

// 3. `this` vo EVENT HANDLERS

const button = {
  addEventListener: function (event, callback) {
    // Simuliranje na event listener
    callback.call({ type: "click" });
  },
};
button.addEventListener("click", function () {
  console.log(this.type);
});

// 4. Moderni Javascript Features

// SPREAD OPERATOR

const colors = ["red", "green"];
const moreColors = [...colors, "blue"]; // so stavanje na tri tochki pred nizata colors togas se stava vrednosta od taa niza vo originalnata niza. Ako sakas da ja stavish kako prva vrednost togas, prvo ja stavash blue pa posle colors so trite tochki
console.log("Colors array", colors);
console.log("Colors array", ...colors); // so spread operatorot (trite tochki) ti gi vrakja samo vrednostite bez niza
console.log(moreColors); // so ova samo stava nov objekt samo po sebe

const carInfo = {
  manufacturer: "Toyota",
  model: "Camry",
};

console.log(carInfo);

const carDetails = {
  year: 2020,
  ...carInfo,
};

console.log("Car Details:", carDetails);

const numArr1 = [1, 2, 3];
const numArr2 = [4, 5, 6];
const combinedArr = [...numArr1, numArr2];
console.log(combinedArr);

const numbers = [2, 3, 5];

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(sumThree(...numbers));

// DESTRUCTURING

const { year, manufacturer } = carDetails;
console.log(year, manufacturer);
// const { year: carDetailsYear, manufacturer } = carDetails;
// console.log(carDetailsYear, manufacturer);

// Ovie dva gorni primeri si rabotat isto. So dve tochki moze da se imenuva drugshie varijablata i od taa linija podole, taka ke go referencirash

// DESTRUKTURIRANJE NA NIZI

const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor); // Vo nizi se pravi so drugite zagradi.

const rgb = [255, 255, 0];
const [red, green, blue] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`);

// DESTRUKTURIRANJE NA NIZA SO REST PARAMETERS

const [first, second, ...rest] = [1, 2, 3, 4];
console.log(first);
console.log(second);
console.log(rest);

// 5. METODI NA OBJEKTI

// OBJECT.CREATE() - toa e deprecated i ne se koristi vekje ama e dobro da se znae

const personPrototype = {
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};
const john = Object.create(personPrototype);
john.name = "John";
console.log(john.greet());

// OBJECT.ASSIGN()

const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

const result = Object.assign(target, source1, source2);
const result2 = { ...target, ...source1, ...source2 }; // Gorniot rezultat go dava i ovde samo na drugshie nachin
console.log(result);
console.log(result2);

// OBJECT.KEYS(), OBJECT.VALUES(), OBJECT.ENTRIES()

const sample = { a: 1, b: 2, c: 3 };
console.log(Object.keys(sample));
console.log(Object.values(sample));
console.log(Object.entries(sample));

const team = {
  john: "developer",
  sarah: "designer",
  mike: "developer",
  lisa: "manager",
  david: "developer",
};

function findByRole(role) {
  return Object.entries(team)
    .filter(([name, job]) => job === role)
    .map(([name]) => name);
}
console.log(findByRole("developer"));

// OBJECT.FREEZE(), OBJECT.SEAL()

const frozen = Object.freeze({
  prop: 42,
});
console.log(frozen);
frozen.prop = 44;
console.log(frozen);
// Go zamrznuvash objektot i ne mozes da go menjash

const sealed = Object.seal({
  prop: 42,
});
sealed.prop = 33; // Tuka shtom dodadesh nova vrednost, ti ja menja vrednosta
console.log(sealed);
sealed.newProp = 123;
console.log(sealed); // So seal ne moze da se dodavaat novi propertinja
