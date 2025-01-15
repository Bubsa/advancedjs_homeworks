let buttonStyle = document.getElementById("buttonOne");
let paragraph = document.getElementById("paragraphOne");

buttonStyle.addEventListener("click", function () {
  paragraph.style.color = `red`;
  paragraph.style.fontSize = `small`;
});

let unList = document.getElementById("itemList");
let buttonTwo = document.getElementById("buttonAdd");

buttonTwo.addEventListener("click", function () {
  let listItem = document.createElement("li");
  listItem.innerHTML = "New Item";
  unList.appendChild(listItem);
});
