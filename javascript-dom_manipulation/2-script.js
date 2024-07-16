const redHeaderElement = document.getElementById("red_header");
const headerElement = document.querySelector("header");

redHeaderElement.addEventListener("click", function() {
  headerElement.classList.add("red");
});
