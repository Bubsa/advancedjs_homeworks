const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "Skopje",
};

const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

// Nested Object destructuring
const pet = {
  petName: "Sharko",
  type: "Dog",
  age: 5,
  info: {
    breed: "Golden Retreiver",
    color: "Golden",
    characteristics: ["playful", "friendly", "loyal"],
  },
  caretakers: [
    { name: "Alice", phone: 123456 },
    { name: "Bob", phone: 654321 },
  ],
};

const {
  petName,
  type,
  info: {
    breed,
    characteristics: [trait1, trait2],
  }, // Trait 1 and 2 ti se naming convention, basically ke ti gi pristapi prvite dve karakteristiki i assign-ira na tie zborchinja
  caretakers: [{ name: caretake1, phone: caretaker1Phone }], // Caretaker1 i phone se isto naming convention. Samiot program si znae deka gi assajnira prvite indexi od nizata
} = pet;

console.log(`${petName} the ${type}'s ${caretake1}`);

// Destrukturiranje na niza
const numbers = [1, 2, 3, 4, 5, 6];
// Zadacha za destrukturiranje
const [firstNumber, secondNumber, , fourthNumber, ...rest] = numbers;
console.log(firstNumber, secondNumber, fourthNumber, ...rest); // Ako after the fact stavish nova vrednost vo niza, kako brojot 6ka. Ako nemas staveno tri tochki na console log
// togas ti gi stava vo nova niza. Ako im stavis i na prviot const i console log tri tochki kaj rest, togas ke ti se pojavat site edno do drugo

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArray = [...arr1, ...arr2];
console.log(newArray);
// Pravenje na kopija od new array
const coppiedArray = [...newArray];
console.log(coppiedArray);
