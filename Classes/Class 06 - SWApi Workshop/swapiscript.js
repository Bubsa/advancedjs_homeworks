// People: https://swapi.py4e.com/api/people/
// Ships: https://swapi.py4e.com/api/starships/

async function getPeople(apiUrl) {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people/");
    const data = await response.json();
    console.log(response);
    console.log(data);
  } catch (error) {
    console.log("Error found:", error.message);
  }
}
getPeople();

async function getStarships(apiUEL) {
  try {
    const response = await fetch("https://swapi.py4e.com/api/starships/");
    const data = await response.json();
    console.log(response);
    console.log(data);
  } catch (error) {
    console.log("Error found:", error.message);
  }
}
getStarships();

const buttonPeople = document.getElementById("getPeople");
buttonPeople.addEventListener("click", getPeople);

const buttonShips = document.getElementById("getShips");
buttonShips.addEventListener("click", getStarships);

function tablePeople() {}
