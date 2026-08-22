const apiKey = "7527d692";

// DOM Elements
const movieInput = document.getElementById("movieInput");
const searchBtn = document.getElementById("searchBtn");

const poster = document.getElementById("poster");
const title = document.getElementById("title");
const releaseDate = document.getElementById("releaseDate");
const rating = document.getElementById("rating");

// Hide poster initially
poster.style.display = "none";

const getMovie = async () => {

    const movieName = movieInput.value.trim();

    if (movieName === "") {
        alert("Please enter a movie name.");
        return;
    }

    searchBtn.disabled = true;
    searchBtn.textContent = "Loading...";

    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "False") {
            throw new Error("Movie not found.");
        }

        const {
            Title,
            Released,
            imdbRating,
            Poster
        } = data;

        poster.src = Poster;
        poster.style.display = "block";

        title.textContent = `Title : ${Title}`;
        releaseDate.textContent = `Release Date : ${Released}`;
        rating.textContent = `IMDb Rating : ${imdbRating}`;

    } catch (error) {

        poster.style.display = "none";
        poster.src = "";

        title.textContent = "";
        releaseDate.textContent = "";
        rating.textContent = "";

        alert(error.message);

    } finally {

        searchBtn.disabled = false;
        searchBtn.textContent = "Search";

    }

};

searchBtn.addEventListener("click", getMovie);