// 
const listMoviesElement = document.getElementById("list_movies");

fetch("https://swapi-api.hbtn.io/api/films/?format=json")
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    const movies = data.results; // Extract movies array
    movies.forEach(movie => {
      const listItem = document.createElement("li");
      listItem.textContent = movie.title;
      listMoviesElement.appendChild(listItem);
    });
  })
  .catch(error => console.error("Error fetching movie data:", error));
