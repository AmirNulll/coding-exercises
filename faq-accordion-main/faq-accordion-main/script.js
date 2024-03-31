const buttonsPlus = document.querySelectorAll(".btn-plus");
const answers = document.querySelectorAll(".answers");

answers.forEach((answer) => {
  answer.style.display = "none";
});

buttonsPlus.forEach((buttonPlus, index) => {
  buttonPlus.addEventListener("click", () => {
    toggleAnswer(index);
  });
});

function toggleAnswer(index) {
  answers.forEach((answer, i) => {
    if (i === index) {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
   
  });
}
