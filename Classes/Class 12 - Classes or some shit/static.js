class Calculator {
  // Ke imame dve propertinja svrzani za sama instanca na klasa
  operations;
  name;

  constructor(name) {
    this.operations = [];
    this.name = name;
  }
  // Metodi za instancata
  addToHistory(operation, result) {
    this.operations.push(`${operation}: ${result}`);
  }
  getHistory() {
    return this.operations;
  }
  static add(a, b) {
    const result = a + b;
    return result;
  } // Koga se korsiti statichna metoda, nemame pristap do propertinjata so se vrzuvaat na samata instanca
  static subtract(a, b) {
    return a - b;
  }
  static multiply(a, b) {
    return a * b;
  }
}

// Statichni metodi se zalepeni do klasata
// Za Instance metodi mora da se napravi instanca od niv kako na primer:
// const calculator = new Calculator("Test")
// calculator.addToHistory()
// Kako ova podole sho e

const myCalc = new Calculator("Bube's calculator");
const result = Calculator.add(5, 3);
myCalc.addToHistory("addition(5,3)", result);
console.log(myCalc.getHistory());

console.log(Calculator.add(5, 5));
console.log(Calculator.subtract(6, 5));
console.log(Calculator.multiply(6, 5));
