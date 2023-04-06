var input = document.querySelector(".searchbar");
var navElements = document.querySelectorAll(".nav-element");

function showElement(element) {
  element.style.display = "";
}

input.addEventListener("focus", function () {
  for (var i = 0; i < navElements.length; i++) {
    navElements[i].style.display = "none";
  }
});

input.addEventListener("blur", function () {
  for (var i = 0; i < navElements.length; i++) {
    setTimeout(showElement, i * 100, navElements[i]);
  }
});
