// Storiranje funkcija kako varijabla

function add(first, second) {
  return first + second;
}
const sumFunction = add;
console.log(sumFunction(5, 10));

const sayHello = (username) => {
  return `Hi there ${username}`;
};

console.log(sayHello("Bube"));

//----------------------------------

function add(first, second) {
  return first + second;
}

// Iskoristuvanje na funkcija kako argument
// function operations(func, firstNumber, secondNumber) {
//   return func(firstNumber, secondNumber);
// }
// console.log(operations(add(10, 10)));

//Vrakjanje na funkcija od druga funkcija
const greetingGenerator = (language) => {
  switch (language) {
    case "english":
      return (name) => console.log(`Hello ${name}`);
    case "spanish":
      return (name) => console.log(`Hola ${name}`);
    case "french":
      return (name) => console.log(`Bonjour ${name}`);
    default:
      return (name) => console.log(`Unsupported language ${name}`);
  }
};

const greetInEnglish = greetingGenerator("english");
const greetInSpanish = greetingGenerator("spanish");
const greetInFrench = greetingGenerator("french");

greetInEnglish("Bube");
greetInSpanish("Bube");
greetInFrench("Bube");
