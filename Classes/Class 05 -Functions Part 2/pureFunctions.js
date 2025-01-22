// Chista ili pure funkcija ne smee da zavisi od varijabli sho se staveni nadvor od funkcijata
// Toa znaci deka parametrite treba da bidat vrapnati vo funkcijata i da gi davaat istite rezultati kolku pati i da e povikana
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));
console.log(add(5, 3));

//Nechista ili impure funkcija dava razlichni rezultati od istiot input, sho znaci ako varijablata e deklarirana nad funkcijata
// ti mozes da ja menjas vrednosta na varijablata ako sakas

let total = 0;
function addToTotal(value) {
  // ako tuka stavime let total = 0 togas taka ke bide pure function
  total += value;
  return total;
}
console.log(addToTotal(8));

// Ova e nechista funkcija poso ja menja nizata
let array = [1, 2, 3];

function addToArray(element) {
  array.push(element);
}
console.log(4);

// Isto taka nechista funkcija posho zema elementi i samata funkcija gi menja
function addToArray1(arr, element) {
  // Nikad ne smee da se vnesuvaat argumenti od pochetok poso im ja menjas vrednosta
  arr.push(element);
  return arr;
}

// Chista verzija na istata funkcija ko pogore bi bilo ova
function addToArrayPure(arr, element) {
  let newArray = []; //deklarirash prazna niza za da gi ima kaj da gi kopira site elementi od originalnata niza
  for (const e of arr) {
    //so ovoj for of loop gi pushtash da se vrtat i gi stavash vo novata niza
    newArray.push(e);
  }
  newArray.push(element);
  return newArray;
}

addToArrayPure(array, 4);

//Nechista funkcija, zavisi od math.random radi nepredvidlivosta poso vadi nov broj sekoj pat koga e povikana
function getRandomNumber() {
  return Math.random;
}
console.log(getRandomNumber());

// Nechista funkcija e isto taka koga treba da menjash stvari vo DOM
function changeHeading() {
  document.getElementById("sample").innerHTML = "We changed the text";
}
changeHeading();
