const schools = ["School 1", "School 2", "School 3", "School 4", "School 5", "School 6"];

const schoolInput = document.getElementById('schoolInput');
const suggestionsBox = document.getElementById('suggestions-box');

var isTeacher;

suggestionsBox.style.width = schoolInput.offsetWidth + 'px';

schoolInput.addEventListener('input', function (e) {
  const inputText = e.target.value;
  suggestionsBox.innerHTML = '';

  if (inputText.length > 0) {
    const matchedSchools = schools.filter(school => school.toLowerCase().startsWith(inputText.toLowerCase()));
    if (matchedSchools.length > 0) {
      matchedSchools.forEach(school => {
        const li = document.createElement('li');
        li.textContent = school;
        li.addEventListener('click', function () {
          schoolInput.value = school;
          suggestionsBox.style.display = 'none';
        });
        suggestionsBox.appendChild(li);
      });
      suggestionsBox.style.display = 'block';
    } else {
      suggestionsBox.style.display = 'none';
    }
  } else {
    suggestionsBox.style.display = 'none';
  }
});

studentButton.addEventListener('click', function () {
  studentButton.classList.add('active');
  teacherButton.classList.remove('active');
  isTeacher = false;
});

teacherButton.addEventListener('click', function () {
  teacherButton.classList.add('active');
  studentButton.classList.remove('active');
  isTeacher = true;
});

document.addEventListener('click', function (e) {
  if (!suggestionsBox.contains(e.target)) {
    suggestionsBox.style.display = 'none';
  }
});

function login() {
  if (isTeacher) {
    window.location.href = 'raspermaths.github.io/teacher';
  } else if (!isTeacher) {
    window.location.href = 'raspermaths.github.io/student';
  } else {
    console.log("Error");
    error.error(Error)
  }
}
