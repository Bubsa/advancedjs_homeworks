// Obichna struktura na funkcija
const button = document.getElementById("myButton");
function printFullName(firstName = "Ivan", lastName = "Apostolovski") {
  //so stavanje ednakvo na parametrite taka se zadava default vrednost
  return `Hello ${firstName} ${lastName}`;
}
const fullName = printFullName("Bob", "Bobsky"); // chim tuka i stavas actual vrednost na parametrite, togas gi implementira tie vo kodot
console.log(fullName);

// Anonimni funkcii
// Funkcii bez ime sho najchesto se stavani na variabi ili parsirani kako argumenti. Cesto se koristeni kako callbacks ili event handlers

// button.addEventListener("click", function(){ // Ova e anonimna funkcija
// })

// Istata funkcija ama imenuvana
function clickButton() {
  console.log("Button clicked");
}
button.addEventListener("click", clickButton);

// Used as callback
const array = [
  2,
  4,
  5,
  function () {
    return 2 + 5 - 7;
  },
];
console.log(array);
console.log(array[3]());

// Arrow functions

// Napravena kako obichna funkcija

// function square(x) {
//   return x * x;
// }

const square = (x) => x * x;
console.log(square(2));

const add = (a, b) => a + b;
const result = add(5, 10);
console.log(result);

const calculate = (a, b) => {
  const result = a * b;
  return result * 2;
};
console.log(calculate(5, 5));

const test = {
  name: "Ivan",
  myFunction() {
    console.log(this.name);
    console.log(this);
  },
};
console.log(test.name);
test.myFunction();

const test1 = {
  name: "Ane",
  myFunction: () => {
    console.log(this.name);
    console.log(this);
  },
};
test1.myFunction;
// Namerno ne se koristat arrow functions vo objekti poso ne go pochituvaat "this"

// function createFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`
// }

const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
const createFullNameOne = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const isPositive = (number) => number > 0;

const getWeatherArrow = (temperature) => {
  if (temperature > 25) return "hot";
  return "cold";
};
console.log(getWeatherArrow(26));

// Ova e ternary arrow function
const getWeatherTurnaryArrow = (temperature) =>
  temperature > 25 ? "hot" : "cold";
console.log(getWeatherTurnaryArrow(33));

// function countVowels(text) {
//   let count = 0;
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (const letter of text) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("Hello there"));

const countVowels = (text) => {
  // Tehnicki skoro nula razlika ima od obichna funkcija do arrow function. Samo sintaksata e razlichna, nisho drugo. Osven sho samo vo arrow function moes na ista linija da vratis return
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (const letter of text) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("Hello there"));

// Self invoked functions (IIFE)
// Ifinja odma se iskoristuvaat, nema potreba da si stavash na varijabli ili nesho slichno

(function () {
  console.log("I run immediately");
})();

// Anonimna ifi arrow funkcija
(() => {
  let result = 5;
  console.log(result);
})();

(function (num1, num2) {
  console.log(num1 + num2);
})(2, 5);

const result2 = (function (num1, num2) {
  return num1 + num2;
})(5, 5);
console.log(result2);

// Rekurzija e koga funkcija se povikuva samata sebesi za da reshi pogolem problem so toa sho deli na pomali parchinja
// Toa bara:
// 1. Obichen sluchaj za da prekine rekurzija
// 2. Rekurziven slucaj koj sho ide kon obichniot sluchaj

function factorial(n) {
  //Obichen slucaj
  if (n <= 1) return 1;
  //Rekurziven sluchaj
  return n * factorial(n - 1);
}
console.log(factorial(5));

// Fibonacci sequence e kade sho sekoj broj e suma na prethodnite dva
function fibonacci(n) {
  //Obichen sluchaj
  if (n <= 1) return n;
  //Rekurziven sluchaj
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));
