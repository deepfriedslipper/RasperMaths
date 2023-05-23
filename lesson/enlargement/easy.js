const question = document.querySelector("#question_title");

function readCSVFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const contents = event.target.result;
      const lines = contents.trim().split('\n');
      resolve(lines);
    };

    reader.onerror = (event) => {
      reject(event.target.error);
    };

    reader.readAsText(file);
  });
}

function pickRandomLine(lines) {
  const randomIndex = Math.floor(Math.random() * (lines.length - 1)) + 1;
  return lines[randomIndex];
}

function begin_easy(subject) {
  var question_type = Math.floor(Math.random() * 2);
  if (question_type == 1) {
    const csvFilePath = subject + '/easy_multiple_choice.csv';

    readCSVFile(csvFilePath)
      .then(lines => {
        const randomLine = pickRandomLine(lines);
        console.log('Random Line:', randomLine);
      })
      .catch(err => {
        console.error('Error:', err);
      });
  } else {
    const csvFilePath = subject + '/easy_questions.csv';

    readCSVFile(csvFilePath)
      .then(lines => {
        const randomLine = pickRandomLine(lines);
        console.log('Random Line:', randomLine);
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }
}
