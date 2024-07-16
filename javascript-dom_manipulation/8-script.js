// Get Reference by ID
const helloElement = document.getElementById("hello");
//script executes only after DOM content is load
document.addEventListener("DOMContentLoaded", function() {
  //fetch data using Fetch API
    fetch("https://hellosalut.stefanbohacek.dev/?lang=fr")
    .then(response => response.json()) // Parse JSON response
    // Update text - extract hello from data object and set as text content for helloElement
    .then(data => {
      helloElement.textContent = data.hello;
    })
    // Error handling
    .catch(error => console.error("Error fetching translation:", error));
});
