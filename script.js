
async function getMovies(endpoint){
    const reponse = await fetch("http://localhost:8000/api/v1/titles/" + endpoint);
    const movies = await reponse.json();
    return movies
}
const bestMovie = ((getMovies("?sort_by=-votes,-imdb_score"))[0])["image_url"];
const imageBestMovie = document.createElement("img");
imageBestMovie.src = bestMovie.image;
const sectionMovies = document.querySelector(".image1");

sectionMovies.appendChild(imageBestMovie);