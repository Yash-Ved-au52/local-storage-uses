const movieInput = document.getElementById("movieInput");
const addMovieBtn = document.getElementById("addMovieBtn");
const moviesContainer = document.getElementById("moviesContainer");

let movies = JSON.parse(localStorage.getItem("movies")) || [];

const renderMovies = () => {
  moviesContainer.innerHTML = '';
  movies.forEach((movie, index) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const movieTitle = document.createElement("span");
    movieTitle.textContent = movie.name;
    if(movie.watched)
    {

      movieTitle.classList.add("watched");
    }

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      movies.splice(index, 1);
      localStorage.setItem("movies", JSON.stringify(movies));
      renderMovies();
    });

    const toggleWatchedBtn = document.createElement("button");
    toggleWatchedBtn.textContent = movie.watched ? "Unwatch" : "Watched";
    toggleWatchedBtn.addEventListener("click", () =>{
      movie.watched = !movie.watched;
      localStorage.setItem("movies", JSON.stringify(movies));
      renderMovies();
    });

    movieDiv.appendChild(movieTitle);
    movieDiv.appendChild(toggleWatchedBtn);
    movieDiv.appendChild(removeBtn);
    moviesContainer.appendChild(movieDiv);
  });
};

addMovieBtn.addEventListener("click", () => {
  const movieName = movieInput.value.trim();
  if(movieName)
  {
    movies.push({ name: movieName, watched: false });
    movieInput.value = '';
    localStorage.setItem("movies", JSON.stringify(movies));
    renderMovies();
  }
});

renderMovies();
