// function generateNumbers() {
//   let arrayResult = [];
//   for (let i = 1; i <= 1000; i++) {
//     if (i % 3 === 0) {
//       arrayResult.push(i);
//     }
//   }
//   console.log(arrayResult);
//   return arrayResult;
// }

// generateNumbers();

// const evenNumbers = [];

// for (let i = 1; i <= 1000; i++) {
//   if (i % 4 === 0 && i % 2 === 0) {
//     evenNumbers.push(i);
//   }
// }
// console.log(evenNumbers);

// const oneNumbers = [];

// for (let i = 1; i <= 1000; i++) {
//   if (i % 10 === 1) {
//     oneNumbers.push(i);
//   }
// }
// console.log(oneNumbers);

// function Students(firstName, lastName, birthYear, academy, grades) {
//   this.name = firstName;
//   this.last = lastName;
//   this.year = birthYear;
//   this.academy = academy;
//   this.grades = grades;

//   this.getAge = function () {
//     let thisYear = new Date().getFullYear();
//     let age = thisYear - this.birthYear;
//     return age;
//   };
//   this.getInfo = function () {
//     return `This student ${this.name} ${this.last} from the academy ${this.academy}`;
//   };
//   this.getGradesAverage = function () {
//     let sum = 0;
//     for (let i = 0; i < this.grades.length; i++) {
//       sum += this.grades[i];
//     }
//     return sum / this.grades.length;
//   };
// }

// let student1 = new Students(
//   "Bob",
//   "Bobsky",
//   1980,
//   "Academy for Programming",
//   [5, 8, 10, 10]
// );

// console.log(student1.getInfo());

console.log(`=======================================================`);

// let body = document.getElementById("body");
// let pelement = document.getElementById("paragraph");
// window.addEventListener("load", function () {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);
//   paragraph.textContent = `${red}, ${green}, ${blue}`;
//   console.log(red, green, blue);
//   body.style["backgroundColor"] = `rgb(${red}, ${green}, ${blue})`;
//   paragraph.style.justifyContent = `center`;
//   paragraph.style.alignContent = `center`;
// });

let choiceArray = ["rock", "paper", "scissors"];
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let divElement = document.getElementById("result");
function getStuff(playerChoice) {
  let choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
  if (
    playerChoice === choice[0] ||
    playerChoice === choice[1] ||
    playerChoice === choice[2]
  ) {
    divElement.textContent += `It's a tie`;
  } else if (
    playerChoice === choice[1] ||
    playerChoice === choice[2] ||
    playerChoice === choice[0]
  ) {
    divElement.textContent = `You lose`;
  } else if (
    playerChoice === choice[2] ||
    playerChoice === choice[0] ||
    playerChoice === choice[2]
  ) {
    divElement.textContent = `You Win`;
  }
}

rockButton.addEventListener("click", function () {
  getStuff("rock");
});

paperButton.addEventListener("click", function () {
  getStuff("paper");
});

scissorsButton.addEventListener("click", function () {
  getStuff("scissors");
});
