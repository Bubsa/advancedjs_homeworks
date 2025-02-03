const searchButton = document.getElementById("searchButton");
const inputField = document.getElementById("inputField");
const europeCountries = document.getElementById("europeCountries");
const cardContainer = document.getElementById("allCards");

// Tuka gi vrakja site zemji vo samoto API
async function getData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    console.log(response);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Ova e za kodovite preku input da se stavi, sho se povrzani so kopcheto
async function getCountryByCode(code) {
  try {
    const URL = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const data = await URL.json();
    return data;
  } catch (error) {
    console.error("Error", error);
  }
}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Country:");

  getCountryByCode(inputField.value).then((response) => {
    console.log(response);
  });
});

// Tuka gi vrakja site evropski zemji preku filter
europeCountries.addEventListener("click", async () => {
  let allCountries = await getData();
  const filteredCountries = allCountries.filter(
    (user) => user.region === "Europe"
  );
  createCard(filteredCountries);
  console.log(filteredCountries);
});

function createCard(countries) {
  countries.forEach((country) => {
    const cardContainer = document.getElementById("allCards");
    const card = document.createElement("div");
    let name = country.name;
    let population = country.population;
    let capital = country.capital;
    const title = document.createElement("h2");
    title.innerHTML = name;
    const imeto = document.createElement("h3");
    imeto.innerHTML = capital;
    const description = document.createElement("p");
    description.innerHTML = population;
    card.appendChild(name);
    card.appendChild(capital);
    card.appendChild(population);
    cardContainer.appendChild(card);
  });
}
