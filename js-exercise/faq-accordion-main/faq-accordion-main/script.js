const buttonsPlus = document.querySelectorAll(".plus");
const buttonsMin = document.querySelectorAll(".min");
const answers = document.querySelectorAll(".answers");

buttonsMin.forEach((min) => {
  min.style.display = "none";
});

answers.forEach((answer) => {
  answer.style.display = "none";
});

buttonsPlus.forEach((buttonPlus, index) => {
  buttonPlus.addEventListener("click", () => {
    toggleAnswer(index);
  });
});
buttonsMin.forEach((buttonMin, index) => {
  buttonMin.addEventListener("click", () => {
    removeAnswer(index);
  });
});

function toggleAnswer(index) {
  answers.forEach((answer, i) => {
    if (i === index) {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
    buttonsMin.forEach((buttonmin, i) => {
      if (i === index) {
        buttonmin.style.display = "block";
      } else {
        buttonmin.style.display = "none";
      }
    });
    buttonsPlus.forEach((buttonplus, i) => {
      if (i === index) {
        buttonplus.style.display = "none";
      } else {
        buttonplus.style.display = "block";
      }
    });
  });
}

function removeAnswer(index) {
  buttonsMin.forEach((min, i) => {
    if (i === index) {
      min.style.display = "none";
    }
    buttonsPlus.forEach((plus, i) => {
      if (i === index) {
        plus.style.display = "block";
      }
    });
    answers.forEach((answer, i) => {
      if (i === index) {
        answer.style.display = "none";
      }
    });
  });
}
