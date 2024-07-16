//get reference - character element
const characterElement = document.getElementById("character");
//fetch data
fetch("https://swapi-api.hbtn.io/api/people/5/?format=json")
  .then(response => response.json()) // Parse JSON response
  //update text
  .then(data => {
    characterElement.textContent = data.name;
  })
  //update error
  .catch(error => console.error("Error fetching character data:", error));
