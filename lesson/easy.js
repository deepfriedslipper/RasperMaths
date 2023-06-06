const question = document.querySelector(".question_title");

function choose_question() {
  fetch('easy_multiple_choice.csv')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      lines.shift();
      console.log(lines);
      const randomIndex = Math.floor(Math.random() * lines.length);
      console.log(randomIndex);
      const randomLine = lines[randomIndex];
      lines.splice(randomIndex, 1);
      var array = randomLine.split(",");
      question.textContent = array[0];
      array.splice(0, 2);
      array = shuffle(array);
      console.log(array);
    })
    .catch(error => {
      question.textContent = 'Error: ' + error;
    });
}

function begin_easy() {
  choose_question();
}

function check() {

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