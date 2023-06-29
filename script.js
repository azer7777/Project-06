
async function getData(anyUrl, loadData, loadMovieInfo){
    let response = await fetch(anyUrl);
    let data = await response.json();
    loadData(data, loadMovieInfo);
}
function getBestMovieUrl(data, loadMovieInfo){
    let bestMovieUrl = data.results[0].url;
    getData(bestMovieUrl, loadMovieInfo);   
}
function loadBestMovieInfo(dataMovie){
    document.getElementById("bestmovieImage").innerHTML = "<img src=" + dataMovie.image_url + "alt='image best movie ' height='450' width='100%'/>";
    document.getElementById("titleBestMovie").innerHTML = dataMovie.title;
    document.getElementById("description").innerHTML = dataMovie.description;
}
let ratingSortedMovieUrl = "http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score"
getData(ratingSortedMovieUrl, getBestMovieUrl, loadBestMovieInfo);
getData(ratingSortedMovieUrl, getBestMovieUrl, loadInfoToModal);
function loadInfoToModal(dataMovie){
    document.getElementById("imageMovie").innerHTML = "<img src=" + dataMovie.image_url + "alt='image best movie '/>";
    document.getElementById("title").innerHTML = dataMovie.title;
    document.getElementById("genres").innerHTML = "genres : " + dataMovie.genres;   
    document.getElementById("datePublished").innerHTML = "datePublished : " + dataMovie.date_published;
    document.getElementById("rated").innerHTML = "rated : " + dataMovie.rated;
    document.getElementById("imdbScore").innerHTML = "imdbScore : " + dataMovie.imdb_score;
    document.getElementById("directors").innerHTML = "directors : " + dataMovie.directors;
    document.getElementById("actors").innerHTML = "actors : " + dataMovie.actors;
    document.getElementById("duration").innerHTML = "duration : " + dataMovie.duration + ' min';
    document.getElementById("countries").innerHTML = "countries : " + dataMovie.countries;
    document.getElementById("worldwideGrossIncome").innerHTML = "worldwideGrossIncome : " + dataMovie.worldwide_gross_income + ' $';
    document.getElementById("longDescription").innerHTML = "longDescription : " + dataMovie.long_description;
}





let slideIndex = [1,1];
let slideId = ["bestRatedMovies", "familyMovies"]
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





