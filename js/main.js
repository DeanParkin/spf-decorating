var tuggle = true;
var navTuggle = document.querySelector(".nav-icon");

document.querySelector('#hamburger').addEventListener('click', function () {
  if (tuggle == true) {
    tuggle = false;
    navTuggle.classList.add("x");
  } else {
    tuggle = true;
    navTuggle.classList.remove("x");
  }
});
