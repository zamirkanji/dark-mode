let checkbox = document.querySelector("input[name=checkbox]");
let body = document.getElementById("body");
let container = document.querySelector(".container");
let button = document.getElementById("btn-dark");

checkbox.addEventListener("click", toggleCB);
button.addEventListener("click", toggleBtn);

function toggleCB() {
  if (checkbox.checked == true) {
    container.classList.remove("light-mode");
    container.classList.add("dark-mode");
  } else {
    container.className = "container light-mode";
  }
}

function toggleBtn() {
  container.classList.toggle("dark-mode");
}
