const question = document.querySelector(".question_title");

function choose_question(var topic){
  fetch(topic + '/easy_multiple_choice.csv')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      lines.shift();
      const randomIndex = Math.floor(Math.random() * lines.length);
      const randomLine = lines[randomIndex];
    
      question.textContent = randomLine;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function begin_easy(var topic){
  choose_question(topic);
}
