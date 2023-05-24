const question = document.querySelector("#question_title");
const fs = require('fs');

// Function to read a CSV file
function readCSVFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.trim().split('\n');
      resolve(lines);
    });
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
