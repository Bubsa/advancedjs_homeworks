"use strict"; // vaka avtomatski se stava dokumentot da bide strog

//Delete variables
let person = {
  firstName: "Bob",
  lastName: "Bobsky",
};

// Delete raboti u objekt dodeka ima strict mode
delete person.firstName;
console.log(person);

//ne moes da brishesh varijabli
let num = 10;
//delete.num ke izvadi greshka

//eval (ne go koristi ova poso basically e mnogu zafrknat kod poso mozat lugje da ti dzitnat exe file vo kodot)
// let result = eval("5+3+2");
// console.log(result);

//Dupliciranje na parametri
// function example(a, b, c) {
//   console.log(a);
//} Ako stavish dve varijabli staveni kako a i use edno a togas vo strict mode ke ti izvadi greshka

// Ako probash da stavis vrednost na nedeklarirana varijabla dodeka ti e vo strict mode nema da ti raboti
//undeclaredVariable = 42; //Se razbira ti e potrebno let ili const
