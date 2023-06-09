const question = document.querySelector(".question_title");
const option_1 = document.querySelector(".option1");
const option_2 = document.querySelector(".option2");
const option_3 = document.querySelector(".option3");
const option_4 = document.querySelector(".option4");
const img = document.querySelector(".question_img");
const input_box = document.querySelector(".input-box");

function choose_question() {
  var num = Math.floor(Math.random() * 2);
  if (num == 1){
    multiple_choice();
  } else {
    input();
  }
}

function input() {
  fetch('easy.csv')
}

function multiple_choice() {
    fetch('easy_multiple_choice.csv')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      lines.shift();
      const randomIndex = Math.floor(Math.random() * lines.length);
      const randomLine = lines[randomIndex];
      lines.splice(randomIndex, 1);
      var array = randomLine.split(",");
      question.textContent = array[0];

      if (array[1] != 'null') {
        img.src = array[1];
      } else {
        img.src = null;
      }

      array.splice(0, 2);
      array = shuffle(array);
      option_1.textContent = array[0];
      option_2.textContent = array[1];
      option_3.textContent = array[2];
      option_4.textContent = array[3];
    })
    .catch(error => {
      question.textContent = 'Error: ' + error;
    });
}

function begin_easy() {
  choose_question();
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
