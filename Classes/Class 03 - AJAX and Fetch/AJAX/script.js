// API e tehnicki kelner vo restoran sho ja nosi hranata/informacijata od klient/jadachi kon serverot/kujnata

// https://dog.ceo/api/breeds/image/random

function getData(apiUrl) {
  $.ajax({
    url: apiUrl, // tuka ne ja pishuvas vo string poso vaka ako ja imas dole ke ja imas kako reiskoristliva funkcija da stavish bilo kakvo API vo nego so toa sho go stavash linkot kako parametar vo funkcijata
    success: function (response) {
      console.log(response);
      const dogImage = document.getElementById("dogImage");
      console.log(dogImage);
      const imageUrl = response.message;
      dogImage.src = imageUrl;
      dogImage.style.display = "block";
    },
    error: function (err) {
      console.log("The Request failed");
    },
  });
}

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", function () {
  getData("https://dog.ceo/api/breeds/image/random");
});

document.addEventListener("DOMContentLoaded", function () {
  getData("https://dog.ceo/api/breeds/image/random");
});
