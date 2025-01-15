// 3rd exercise
let buttonColor = document.getElementById("change");
let inputPlace = document.getElementById("colorInput");

buttonColor.addEventListener("click", function () {
  document.body.style.backgroundColor = inputPlace.value;
});

// 4th exercise
let buttonRemove = document.getElementById("removeKebap");
let unorderedList = document.getElementById("removableList");

buttonRemove.addEventListener("click", function () {
  unorderedList.removeChild(unorderedList.firstElementChild);
});

// 5th exercise

const questions = document.querySelectorAll(".question");
console.log("all questions", questions);

for (const question of questions) {
  console.log("question", question);
  question.addEventListener("click", function () {
    const answer = question.nextElementSibling;
    console.log(answer);

    if (answer.style.display === "block") {
      answer.style.display = "none";
      question.classList.remove("explanded");
    } else {
      answer.style.display = "block";
      question.classList.add("expanded");
    }
  });
}

// 6th exercise
async function getJoke() {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    console.log(response);
    console.log(data);
    let text = `${data.fact}  ${data.length}`; // basically pristapuvas kon podatocite kako sho gi pishuva na samoto API objekt
    document.getElementById("jokeContainer").innerHTML = text;
  } catch (error) {
    console.error(error);
  }
}
document.getElementById("getJoke").addEventListener("click", getJoke);
