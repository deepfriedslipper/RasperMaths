const teacher = document.getElementById("teacher");
const student = document.getElementById("student");

const input = document.querySelector('.school');
const auto_box = document.querySelector('.auto-complete-box');
const school_wrapper = document.querySelector('school-wrapper');

const teacher_click = () => {
  student.classList.remove('btn-secondary');
  teacher.classList.remove('btn-light');
  student.classList.add('btn-light');
  teacher.classList.add('btn-secondary');
}

const student_click = () => {
  student.classList.remove('btn-light');
  teacher.classList.remove('btn-secondary');
  student.classList.add('btn-secondary');
  teacher.classList.add('btn-light');
}

auto_box.style.width = `${input.offsetWidth}px`;

window.addEventListener('resize', () => {
  auto_box.style.width = `${input.offsetWidth}px`;
});

let suggestions = [
  "Roundwood Park School",
  "Test",
  "Roundwood Primary School",
  "Also Test",
  "Test 3",
  "Test 4"
];

input.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().includes(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return data = '<li>' + data + '</li>';
    });
  }
  showSuggestions(emptyArray);
  let allList = auto_box.querySelectorAll("li");
  for (let i = 0; i < allList.length; i++) {
    allList[i].setAttribute("onclick", "fill(this)");
  }
}

function fill(element) {
  console.log(element.textContent);
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    if (input.value == "") {
      listData = '<li> Roundwood Park School</li> <li>Test</li> <li>Roundwood Primary School</li> <li>Also Test</li> <li>Test 3</li> <li>Test 4</li>';
    } else {
      listData = '<li class="not-listed">Is your school not listed here? <a href="#">Register here</a></li>';
    }
  } else {
    listData = list.join('');
  }
  auto_box.innerHTML = listData;
}
