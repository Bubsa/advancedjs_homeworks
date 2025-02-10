// const obj = {};
// console.log(obj).prototype;
// Ako probame da vidime dali ovoj object ima prototype, ke ni iskochi undefined, posho e na top level i na nego nema nikakva metoda/funkcija. Ama proto moze da izvadi. PROTOTYPE IMA SAMO KAJ KONSTRUKTOR FUNKCII I KAJ EBANI KLASI. KAKO SHO KE VIDISH PODOLE. Ako stavish na samata konstruktor funkcija Animal da recheme, pishesh prototype, ke ti iskochi globalniot objekt
// function Animal() {}
// Animal.prototype.speak = function () {
//   console.log("Woof");
// };
// Vaka moze da se zakachi funkcija t.e metod na constructor. Toa znachi deka na sekoja instanca na funkcijata se pojavuva speak funkcijata
// const dog = new Animal();
// console.log(dog);
// console.log(dog.speak());
// __Proto__ moze da zeme i da stavi funkcija na samiot objekt mesto na samata klasa/constructor

// console.log(dog.__proto__ === Animal.prototype);
// console.log(dog.__proto__.__proto__ === Object.prototype);

console.log(
  `================================================================================`
);

// const me = {};
// E istiot nachin da se kreira objekt kako slednovo
const me2 = Object.create({});

// Ova e konstruktor funkcija. Tehnichki e fabrika sho kreira novi objekti od Person.

function Person(name) {
  (this.name = name),
    (this.speak = function () {
      return `${this.name} is speaking`;
    });
}

// function NewPerson(name) {
//     (this.name = name),
//       (this.talk = function () {
//         return `${this.name} is talking`;
//       });
//   }

// let me.__proto__ = NewPerson
// console.log(me.__proto__);

// let greeting = "Hello World";
// // console.log(greeting.__proto__); // Tuka dobivash prototype deka e string klasata
// let myNum = 10;
// // console.log(myNum.__proto__);// Tuka dobivash prototype deka e number klasata

// console.log(Object.getPrototypeOf(greeting)); // Tehnicki ova ti e istoto ko ova pogore

// const me = new Person("Jill");
// console.log(me.speak());
// me.age = 30;
// console.log(me);
// const you = new Person("Bob");
// console.log(you);

// console.log(Person);
// console.log(Person.prototype);

// // Ako menjame propertinja na konstruktor funkcija, nema da raboti na tie objekti
// Person.name = "Pink Panther";
// console.log();

// console.log(me.name);

// function User(name, email) {
//   (this.name = name), (this.email = email), (this.isOnline = false);
//   this.login = function () {
//     console.log(`${this.name} has logged in`);
//   };
// }

// let bob = new User("Bob", "bob@email.com");
// bob.isAdmin = false;
// // Slednovo ne se koristi ama e dobro da se znae
// let jill = Object.create(new User("Jill", "jill@email.com"));
// jill.isPremium = true;
// // Za ova izmegju liniive
// console.log(bob.isAdmin);
// console.log(bob.isPremium); // Posho ova se odnesuva na Jill samo kako user

// const vehicle = {
//   type: "Generic vehicle",
//   start: function () {
//     console.log(`${this.type} is starting`);
//   },
// };

// const car = {
//   brand: "Toyota",
//   model: "Yaris",
// };

// // Ne dobar nachin na pravenje na ovoj bullshit

// car.__proto__ = vehicle;
// console.log(car.__proto__);

// // Podobar nachin
// Object.setPrototypeOf(car, vehicle);
// console.log(car.brand);
// console.log(car.type);
// console.log(car.start());

// // Tuka ni vrakja prototip na vehicle i mu kazuvame da ni napravi nova metoda
// Object.getPrototypeOf(vehicle).stop = function () {
//   console.log(`${this.type} is stopping`);
// };

// car.stop();

// function Pet(name, sound) {
//   this.name = name;
//   this.sound = sound;
// }

// Pet.prototype.speak = function () {
//   console.log(`${this.name} says ${this.sound}`);
// };

// const garfield = new Pet("Garfield", "meow");
// garfield.speak();

// const max = new Pet("Max", "woof");
// max.speak();

// INHERITANCE ILI NASLEDUVANJE

// Ova ni e parent klasa
function Person(id, first, last, age) {
  this.id = id;
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

function Employee(id, first, last, age, division) {
  Object.setPrototypeOf(this, new Person(id, first, last, age)); // This referencira na celosniot objekt pogore
  this.division = division;
  this.work = function () {
    console.log(
      `The person ${this.firstName} ${this.lastName} works in ${this.division}`
    );
  };
}

let person = new Person(2, "John", "Doe", 25);
let employee1 = new Employee(1, "Ivan", "Ivanovski", 23, "Finance");
let employee2 = new Employee(2, "Ivana", "Ivanovska", 25, "IT");
console.log(employee1);

// INHERITANCE LEVEL 2
// Tuka nie sobirame propertinja od employee (ne od Person) i dodavame novi.

function Manager(id, first, last, age, division, team) {
  Object.setPrototypeOf(this, new Employee(id, first, last, age, division));
  this.team = team;
  this.assignTask = function (task) {
    console.log(
      `The manager ${this.firstName} assigned the following task ${task} to the team ${this.team}`
    );
  };
}
let manager = new Manager(6, "Bube", "Simonovikj", 30, "development", "G3");
console.log(manager);
