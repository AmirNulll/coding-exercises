const input = document.querySelector(".js-input");
const button = document.querySelector(".btn");
const listContainer = document.querySelector(".list-container");
const inputvalue = input.value;

function getInputData() {
  if (inputvalue === "") {
    alert("you must write someting");
  } else if (inputvalue === !null) {
    let li = document.createElement("li");
    li.innerHTML = inputvalue;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "/u00d7";
    li.appendChild(span);
  }
  inputvalue = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === LI) {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === SPAN) {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem(data, listContainer.innerHTML);
}
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
