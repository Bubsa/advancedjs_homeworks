// ES6 syntax
// Base class: Person
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Iskoristuvajki sintaksa za konstruktor funkcija. Basically istoto ko ova pogore samo drugshie napishano
// Ako napravis hover over na trite tochki pod person, moes da stisnesh quick fix i ke ti konvertira vo novata podobra sintaksa
// function Person(firstName, lastName){
//     this.firstName = firstName
//     this.lastName = lastName
// }

// Person.prototype.getFullName = function (){
//     return `${this.firstName} ${this.lastName}`
// }

// Employee extends Person
class Employee extends Person {
  constructor(firstName, lastName, employeeId) {
    super(firstName, lastName);
    this.employeeId = employeeId;
  }

  getEmployeeInfo() {
    return `${this.getFullName()} (ID: ${this.employeeId})`;
  }
}

// Employee implementacija so sintaksa za konstruktor funkcija a.k.a kazano isto napishano ama drug nachin

// function Employee(firstName, lastName, employeeId){
//     Person.call(this, firstName, lastName) // Toa sho pishuva super pogore go menja ova delche
//     this.employeeId = employeeId
// }

// Stavanje lanec na nasledstvo

// Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.constructor = Employee

// Employee.prototype.getEmployeeInfo = function (){
//     return `${this.getFullName()} (ID: ${this.employeeId})`
// }

// Pravime Developer uloga

class Developer extends Employee {
  constructor(firstName, lastName, employeeId, programmingLanguage) {
    super(firstName, lastName, employeeId);
    this.programmingLanguage = programmingLanguage;
  }

  code() {
    console.log(
      `${this.getFullName()} is coding in ${this.programmingLanguage}`
    );
  }
}

// Pravime Manager uloga sho ja prodolzuva Employee
class Manager extends Employee {
  constructor(firstName, lastName, employeeId) {
    super(firstName, lastName, employeeId);
    this.team = [];
  }

  // Metodata ke dodava developer na menadzerskiot tim
  // Poveruva type safety
  addTeamMember(employee) {
    // tuka employee ti e naming convention
    if (employee instanceof Developer) {
      this.team.push(employee);
      console.log(
        `${employee.getFullName()} was added to ${this.getFullName()}`
      ); // Poso employee.getFullName gi zima informaciite od employee, this.getFull.Name bi
      // bilo od lugje sho bi bile instanci od menadzeri
    } else {
      console.log(
        `Error: ${employee.getFullName} is not a Developer and can't be added to the team`
      );
    }
  }
  listTeam() {
    console.log(`${this.getFullName()}'s Team`);
    this.team.forEach((member) => {
      console.log(
        `- ${member.getFullName()} (Developer in ${member.programmingLanguage})`
      );
    });
  }
}

const john = new Developer("John", "Doe", 101, "JavaScript");
const jane = new Developer("Jane", "Smith", 102, "Python");
const mark = new Manager("Mark", "Johnson", 201);
const lucy = new Manager("Lucy", "Adams", 103);

john.code();
jane.code(); // Ova raboti poso dvajcata se developeri a code metodata e specifichna za developeri
// lucy.code() nema da raboti poso ne e developer

mark.addTeamMember(john);
mark.addTeamMember(jane);
// mark.addTeamMember(lucy) istoto kako pogore

console.log(john instanceof Developer); // true
console.log(john instanceof Employee); // true
console.log(john instanceof Person); // true
console.log(mark instanceof Developer); // Manager doesn't inherit anything from the Developer class
console.log(mark instanceof Manager); //true
console.log(lucy instanceof Developer); //falce

mark.listTeam();
