const toggleHeaderElement = document.getElementById("toggle_header");
const headerElement = document.querySelector("header");

toggleHeaderElement.addEventListener("click", function() {
  const currentClass = headerElement.classList.value; // Get current class

  // Toggle class based on current state
  if (currentClass === "red") {
    headerElement.classList.remove("red");
    headerElement.classList.add("green");
  } else {
    headerElement.classList.remove("green");
    headerElement.classList.add("red");
  }
});