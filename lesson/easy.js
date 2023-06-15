const question = document.querySelector(".question_title");
const option_1 = document.querySelector(".option1");
const option_2 = document.querySelector(".option2");
const option_3 = document.querySelector(".option3");
const option_4 = document.querySelector(".option4");
const option_1_wrapper = document.querySelector(".option1-wrapper");
const option_2_wrapper = document.querySelector(".option2-wrapper");
const option_3_wrapper = document.querySelector(".option3-wrapper");
const option_4_wrapper = document.querySelector(".option4-wrapper");
const img = document.querySelector(".question_img");
const input_box = document.querySelector(".input-box");
const submit = document.querySelector(".submit_button");

var selection = null;
var ans = null;

function choose_question() {
  var num = Math.floor(Math.random() * 2);
  if (num == 1) {
    multiple_choice();
  } else {
    input();
  }
}

function input() {
  input_box.style.display = 'inline-block';
  option_1_wrapper.style.display = 'none';
  option_2_wrapper.style.display = 'none';
  option_3_wrapper.style.display = 'none';
  option_4_wrapper.style.display = 'none';

  fetch('easy.csv')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      lines.shift();
      const randomIndex = Math.floor(Math.random() * lines.length);
      const randomLine = lines[randomIndex];
      lines.splice(randomIndex, 1);
      var array = randomLine.split(",");
      console.log(array[0]);
      question.textContent = array[0];

      if (array[1] != 'null') {
        console.log("Is not null");
        img.src = array[1];
      } else {
        console.log("Is null");
        img.src = null;
      }
    })
    .catch(error => {
      question.textContent = 'Error: ' + error;
    });
}

function multiple_choice() {
  input_box.style.display = 'none';
  option_1_wrapper.style.display = 'flex';
  option_2_wrapper.style.display = 'flex';
  option_3_wrapper.style.display = 'flex';
  option_4_wrapper.style.display = 'flex';
  option_1_wrapper.style.background = "white";
  option_2_wrapper.style.background = "white";
  option_3_wrapper.style.background = "white";
  option_4_wrapper.style.background = "white";

  fetch('easy_multiple_choice.csv')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      lines.shift();
      const randomIndex = Math.floor(Math.random() * lines.length);
      lines.splice(randomIndex, 1);
      const randomLine = lines[randomIndex];
      var array = randomLine.split(",");
      question.textContent = array[0];

      if (array[1] != 'null') {
        console.log("Is not null");
        img.src = array[1];
      } else {
        console.log("Is null");
        img.src = null;
      }

      array.splice(0, 2);
      ans = array[0];
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

option_1.onclick = function(){
  if (selection == 1){
    selection = null;
    option_1_wrapper.style.background = "white";
  } else {
    selection = 1;
    option_1_wrapper.style.background = "red";
    option_2_wrapper.style.background = "white";
    option_3_wrapper.style.background = "white";
    option_4_wrapper.style.background = "white";
  }
}

option_2.onclick = function(){
  if (selection == 2){
    selection = null;
    option_2_wrapper.style.background = "white";
  } else {
    selection = 2;
    option_1_wrapper.style.background = "white";
    option_2_wrapper.style.background = "red";
    option_3_wrapper.style.background = "white";
    option_4_wrapper.style.background = "white";
  }
}

option_3.onclick = function(){
  if (selection == 3){
    selection = null;
    option_3_wrapper.style.background = "white";
  } else {
    selection = 3;
    option_1_wrapper.style.background = "white";
    option_2_wrapper.style.background = "white";
    option_3_wrapper.style.background = "red";
    option_4_wrapper.style.background = "white";
  }
}

option_4.onclick = function(){
  if (selection == 4){
    selection = null;
    option_4_wrapper.style.background = "white";
  } else {
    selection = 4;
    option_1_wrapper.style.background = "white";
    option_2_wrapper.style.background = "white";
    option_3_wrapper.style.background = "white";
    option_4_wrapper.style.background = "red";
  }
}

submit.onclick = function(){
  switch (selection){
    case 1:
      if (option_1.text_content == ans){choose_question();}
      break;
    case 2:
      if (option_2.text_content == ans){choose_question();}
      break;
    case 3:
      if (option_3.text_content == ans){choose_question();}
      break;
    case 1:
      if (option_4.text_content == ans){choose_question();}
      break;
    default:
      choose_question();
  }
}
