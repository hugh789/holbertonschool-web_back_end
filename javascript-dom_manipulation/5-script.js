const updateHeaderElement = document.getElementById("update_header");
const headerElement = document.querySelector("header");

updateHeaderElement.addEventListener("click", function() {
  headerElement.textContent = "New Header!!!";
});
