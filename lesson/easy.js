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
const input_submit = document.querySelector(".input-submit");
const qcounter = document.querySelector(".question-counter");
const dropdown = document.querySelector(".difficulty-dropdown");

var selection = null;
var ans = null;
var shuffled;
var submitted = false;

function choose_question() {
  var num = Math.floor(Math.random() * 2);
  var file;

  if (num == 1) { file = 'easy_multiple_choice.csv'; }
  else { file = 'easy.csv'; }

  return fetch(file)
    .then(response => response.text())
    .then(data => {
      var lines = data.split('\n');
      lines.shift();
      var randomIndex = Math.floor(Math.random() * lines.length);
      var randomLine = lines[randomIndex];
      lines.splice(randomIndex, 1);
      return randomLine;
    })
    .catch(error => {
      alert('Something has gone wrong. Try refreshing the page.\n\n' + error);
    });
}

function begin_easy() {
  dropdown.style.display = 'none';
  submitted = false;
  var promises = [];

  for (var i = 0; i < 10; i++) {
    promises.push(choose_question());
  }

  Promise.all(promises)
    .then(async results => {
      var questions = results.filter(question => question !== undefined);
      for (var i = 0; i < 10; i++) {
        submitted = false;
        qcounter.innerHTML = (i + 1) + '/10';
        var firstCharacter = questions[i][0];
        if (firstCharacter === '1') {
          multiple_choice(questions[i]);
          await waitForSubmitted();
        } else {
          input(questions[i]);
          await waitForSubmitted();
        }
      }
      input_box.style.display = 'none';
      input_submit.style.display = 'none';
      option_1_wrapper.style.display = 'none';
      option_2_wrapper.style.display = 'none';
      option_3_wrapper.style.display = 'none';
      option_4_wrapper.style.display = 'none';
      submit.style.display = 'none';
      img.style.display = 'none';
      qcounter.style.display = 'none';

      question.textContent = 'COMPLETED';
    });
}



function input(q) {
  input_box.style.display = 'inline-block';
  input_submit.style.display = 'block';
  option_1_wrapper.style.display = 'none';
  option_2_wrapper.style.display = 'none';
  option_3_wrapper.style.display = 'none';
  option_4_wrapper.style.display = 'none';
  submit.style.display = 'none';

  array = q.split(',');
  question.textContent = array[0];

  if (array[1] != 'null') {
    img.src = array[1];
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }

  ans = array[2];
}

function multiple_choice(q) {
  input_box.style.display = 'none';
  input_submit.style.display = 'none';
  option_1_wrapper.style.display = 'flex';
  option_2_wrapper.style.display = 'flex';
  option_3_wrapper.style.display = 'flex';
  option_4_wrapper.style.display = 'flex';
  option_1_wrapper.style.background = "white";
  option_2_wrapper.style.background = "white";
  option_3_wrapper.style.background = "white";
  option_4_wrapper.style.background = "white";
  submit.style.display = 'block';

  array = q.split(',')
  question.textContent = array[0].substring(1);

  if (array[1] != 'null') {
    img.src = array[1];
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }

  array.splice(0, 2);
  ans = array[0];
  shuffled = shuffle(array);
  option_1.textContent = shuffled[0];
  option_2.textContent = shuffled[1];
  option_3.textContent = shuffled[2];
  option_4.textContent = shuffled[3];
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

function waitForSubmitted() {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      if (submitted) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
}

option_1.onclick = function () {
  if (selection == 1) {
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

option_2.onclick = function () {
  if (selection == 2) {
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

option_3.onclick = function () {
  if (selection == 3) {
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

option_4.onclick = function () {
  if (selection == 4) {
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

submit.onclick = function () {
  switch (selection) {
    case 1:
      if (option_1.innerHTML == ans) { submitted = true; }
      else { console.log("INCORRECT!"); }
      break;
    case 2:
      if (option_2.innerHTML == ans) { submitted = true; }
      else { console.log("INCORRECT!"); }
      break;
    case 3:
      if (option_3.innerHTML == ans) { submitted = true; }
      else { console.log("INCORRECT!"); }
      break;
    case 4:
      if (option_4.innerHTML == ans) { submitted = true; }
      else { console.log("INCORRECT!"); }
      break;
    case null:
      submitted = true;
      break;
    default:
      submitted = true;
  }
}

input_submit.onclick = function () {
  if (input_box.value == ans) {
    input_box.value = '';
    submitted = true;
  }
  else { console.log("INCORRECT!"); }
}
