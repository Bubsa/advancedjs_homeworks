// Callback funkcija e funkcija sho e dadena kako argument na druga funkcija sho e
// ochekuvano da se egzekutira posle nekoja asinhrona operacija e izvrshena

// HIGH ORDER FUNCTIONS
let numsArray = [1, 2, 3, 4, 5];
// Prv nachin
// numsArray.forEach((num) => console.log(num));

// Vtor nachin
numsArray.forEach(function (num) {
  console.log(num);
});

// HANDLING EVENTS

// Prv nachin so eventi

// document.getElementById("btn").addEventListener("click", () => {
//   console.log("The button is clicked");
// });

// Vtor nachin so eventi
function logMessage() {
  console.log("The button is clicked");
}
document.getElementById("btn").addEventListener("click", logMessage);

// MAKING API REQUESTS

// Prv nachin da se napravi

const API_URL = "https://official-joke-api.appspot.com/jokes/programming/ten";

function getData(url, printFunction) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      printFunction(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function printDataInConsole(data) {
  console.log(data);
}
// getData(API_URL, printDataInConsole);

//Vtor nachin da se napravi
// getData(API_URL, (data) => {
//   console.log(data);
// });

// Tret nachin da se napravi
// getData(API_URL, function (result) {
//   console.log(result);
// });

// Chetvrt nachin da se napravi
// getData(API_URL, console.log); // Console log sama po sebe si e funkcija, nema potreba da se stavaat zagradi

// ASYNCHRONOUS OPERATIONS
function asyncOperation(callback) {
  console.log("STARTING"); // Prvo tuka pochnuva kodot i pochninja da se renderira i go logira prvo ova
  setTimeout(() => {
    const result = "COMPLETED";
    callback(result); // Poso tuka ima timeout od 3 sekundi go izostavuva za momentot
  }, 3000);
  console.log("THIS WILL LOG IN CONSOLE"); // Sledno go logira ova vo samata konzola zaradi ova pogore sho go pishav
}
function callbackFunction(str) {
  console.log(str);
}

asyncOperation(callbackFunction); // I posle 3 sekundi, togas se logira COMPLETED rezultatot
