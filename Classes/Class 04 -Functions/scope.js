const globalVariable = "I am accessible everywhere";
function someFunction() {
  console.log(globalVariable);
}
someFunction;

// Karakteristiki na globalen scope
// Dostapni preku cel program
// Moze da dojde do konflikti so imenuvanje
// Gi pravi kodovite poteshko da se testiraat
// Moze da napravi debugging poteshko da bide

//Function scope
//Variabli deklarirani vnatre vo funkcija se samo dostapni vnatre vo funkcijata

function outer() {
  const message = "Hello from outer!";

  function inner() {
    console.log(message);
    const innerMessage = "Hello from inner!";
  }
  inner();
  console.log(innerMessage); // Ova ne e pristaplivo
}
console.log(message); // Ne go pokazuva poso e vnatre vo funkcija

outer();

// Benefiti na funkcijata scope
// Enkapsulira varijabli
// Preventira konflikti so imenuvanje
// Go pravi kodot po odrzliv
// Polesno za testiranje i debagiranje

// Block scope (let and const)
// Block scope limitira pristap kon varijabli na blokot kade sho se deklarirani

if (true) {
  let blockScoped = "Only available in this block";
  const alsoBlockScoped = "Same here";
}
console.log(blockScoped);

const getNumberStats = (number) => {};
