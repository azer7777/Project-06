
async function getData(anyUrl, loadData, loadMovieInfo, index){
    let response = await fetch(anyUrl);
    let data = await response.json();
    loadData(data, loadMovieInfo, index);
}
function getBestMovieUrl(data, loadMovieInfo, index){
    let bestMovieUrl = data.results[index].url;
    getData(bestMovieUrl, loadMovieInfo, index);   
}
function loadBestMovieInfo(dataMovie){
    document.getElementById("bestmovieImage").innerHTML = "<img src=" + dataMovie.image_url + "alt='image best movie ' height='450' width='100%'/>";
    document.getElementById("titleBestMovie").innerHTML = dataMovie.title;
    document.getElementById("description").innerHTML = dataMovie.description;
}
let ratingSortedMoviesUrl = "http://localhost:8000/api/v1/titles/?sort_by=-votes,-imdb_score"
let familyMoviesUrl = "http://localhost:8000/api/v1/titles/?sort_by=-votes,-imdb_score&genre=animation"
getData(ratingSortedMoviesUrl, getBestMovieUrl, loadBestMovieInfo, 0);
getData(ratingSortedMoviesUrl, getBestMovieUrl, loadInfoToModal, 0);
for (let i=1; i<5; i++){
    if (i == 5){
      ratingSortedMoviesUrl = "http://localhost:8000/api/v1/titles/?page=2&sort_by=-votes%2C-imdb_score"
    }
    getData(ratingSortedMoviesUrl, getBestMovieUrl, loadMoviesImg1, i);
}
ratingSortedMoviesUrl = "http://localhost:8000/api/v1/titles/?sort_by=-votes,-imdb_score"
let n = 2
for (let i=0; i<4; i++){
    if (n == 5){
      ratingSortedMoviesUrl = "http://localhost:8000/api/v1/titles/?page=2&sort_by=-votes%2C-imdb_score"
      n = 0
    }
    getData(ratingSortedMoviesUrl, getBestMovieUrl, loadMoviesImg2, n);
    n ++
}
ratingSortedMoviesUrl = "http://localhost:8000/api/v1/titles/?sort_by=-votes,-imdb_score"
n = 3
for (let i=0; i<4; i++){
    if (n == 5){
      ratingSortedMoviesUrl = "http://localhost:8000/api/v1/titles/?page=2&sort_by=-votes%2C-imdb_score"
      n = 0
    }
    getData(ratingSortedMoviesUrl, getBestMovieUrl, loadMoviesImg3, n);
    n ++
}
function loadInfoToModal(dataMovie){
    document.getElementById("imageMovie").innerHTML = "<img src=" + dataMovie.image_url + "alt='image best movie '/>";
    document.getElementById("title").innerHTML = dataMovie.title;
    document.getElementById("genres").innerHTML = "Genres : " + dataMovie.genres;   
    document.getElementById("datePublished").innerHTML = "Date published : " + dataMovie.date_published;
    document.getElementById("rated").innerHTML = "Rated : " + dataMovie.rated;
    document.getElementById("imdbScore").innerHTML = "Imdb score : " + dataMovie.imdb_score;
    document.getElementById("directors").innerHTML = "Directors : " + dataMovie.directors;
    document.getElementById("actors").innerHTML = "Actors : " + dataMovie.actors;
    document.getElementById("duration").innerHTML = "Duration : " + dataMovie.duration + ' min';
    document.getElementById("countries").innerHTML = "Countries : " + dataMovie.countries;
    document.getElementById("worldwideGrossIncome").innerHTML = "Worldwide gross income : " + dataMovie.worldwide_gross_income + ' $';
    document.getElementById("longDescription").innerHTML = "Long description : " + dataMovie.long_description;
}

function loadMoviesImg1(dataMovie){  
    const sectionslideshow = document.getElementById("bestRatedMovies_1");
    const imageElement = document.createElement("img");
    imageElement.src = dataMovie.image_url;
    sectionslideshow.appendChild(imageElement);
}
function loadMoviesImg2(dataMovie){  
    const sectionslideshow = document.getElementById("bestRatedMovies_2");
    const imageElement = document.createElement("img");
    imageElement.src = dataMovie.image_url;
    sectionslideshow.appendChild(imageElement);
}
function loadMoviesImg3(dataMovie){  
    const sectionslideshow = document.getElementById("bestRatedMovies_3");
    const imageElement = document.createElement("img");
    imageElement.src = dataMovie.image_url;
    sectionslideshow.appendChild(imageElement);
}
function loadMoviesImg4(dataMovie){  
    const sectionslideshow = document.getElementById("bestRatedMovies_4");
    const imageElement = document.createElement("img");
    imageElement.src = dataMovie.image_url;
    sectionslideshow.appendChild(imageElement);
}
let slideIndex = [1,1];
let slideId = ["mySlides1", "familyMovies"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}






// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");
let imageMovie = document.getElementById("rated_movie_img_1");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





