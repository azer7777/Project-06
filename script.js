
async function getMovies(endpoint){
    const reponse = await fetch(endpoint);
    const movies = await reponse.json();
    return movies
}
const bestMovie = getMovies("https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg");

const imageBestMovie = document.createElement("img");

imageBestMovie.src = bestMovie.image;
const sectionMovies = document.querySelector(".image1");

sectionMovies.appendChild(imageBestMovie);