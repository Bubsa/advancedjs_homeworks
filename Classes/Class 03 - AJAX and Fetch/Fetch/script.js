// https://v2.jokeapi.dev/joke/Any

function getJokes(jokesUrl, jokesCount = 1) {
  fetch(`${jokesUrl}?amount=${jokesCount}`)
    .then(function (response) {
      const parsedResponse = response.json();
      return parsedResponse;
    })
    .then(function (data) {
      console.log(data);
      const jokesContainer = document.getElementById("jokesContainer");
      jokesContainer.innerHTML = ""; // za da se brishat na sekoj load
      if (jokesCount === 1) {
        createJokeCard(jokesContainer, data);
      } else {
        for (const joke of data.jokes) {
          createJokeCard(jokesContainer, joke);
        }
      }
    })
    .catch(function (error) {
      console.log(`Something went awry`, error);
    });
}

//Render jokes

function createJokeCard(container, jokeObject) {
  const card = document.createElement("div");
  card.classList.add("Card");
  const title = document.createElement("h2");
  title.textContent = `Category: ${jokeObject.category}`;
  card.appendChild(title);

  // Da stavish logika na toa kakov tip na shega dali e single ili two part
  if (jokeObject.type === "single") {
    const jokeText = document.createElement("p");
    jokeText.textContent = jokeObject.joke;
    card.appendChild(jokeText);
  } else {
    const setupText = document.createElement("p");
    setupText.textContent = jokeObject.setup;
    const deliveryText = document.createElement("p");
    deliveryText.textContent = jokeObject.delivery;
    card.appendChild(setupText);
    card.appendChild(deliveryText);
  }
  container.appendChild(card);
}

const getJokesButton = document.getElementById("getJokesButton");
getJokesButton.addEventListener("click", function () {
  const jokesCount = document.getElementById("jokesCount").value;
  const parsedJokesCount = parseInt(jokesCount);
  getJokes("https://v2.jokeapi.dev/joke/Any", parsedJokesCount);
});

// getJokes("https://v2.jokeapi.dev/joke/Any", 5);
