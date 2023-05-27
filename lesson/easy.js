const question = document.querySelector(".question_title");

function choose_question(topic) {
  fetch('enlargement/easy_multiple_choice.csv')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      const randomIndex = Math.floor(Math.random() * lines.length);
      const randomLine = lines[randomIndex];

      question.textContent = randomLine;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
