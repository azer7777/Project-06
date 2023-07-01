
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

function loadMoviesImg1(dataMovie, nb){ 
  document.getElementById("besMovieimg_" + nb).innerHTML = "<img src=" + dataMovie.image_url + "alt='movie image '/>";
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




// slideshow part

let arrowPrev1 = document.querySelector('.arrow.prev1')
let arrowNext1 = document.querySelector('.arrow.next1')
let arrowPrev2 = document.querySelector('.arrow.prev2')
let arrowNext2 = document.querySelector('.arrow.next2')
let arrowPrev3 = document.querySelector('.arrow.prev3')
let arrowNext3 = document.querySelector('.arrow.next3')
let arrowPrev4 = document.querySelector('.arrow.prev4')
let arrowNext4 = document.querySelector('.arrow.next4')

arrowNext1.onclick = function() {
  let className = '.card-wrapper1'
  let arrowPrev = arrowPrev1
  let arrowNext = arrowNext1
  slideshow(className, arrowPrev, arrowNext)
}

arrowPrev1.onclick = function() {
  let className = '.card-wrapper1'
  let arrowPrev = arrowPrev1
  let arrowNext = arrowNext1
  slideshow(className, arrowPrev, arrowNext)
}

arrowNext2.onclick = function() {
  let className = '.card-wrapper2'
  let arrowPrev = arrowPrev2
  let arrowNext = arrowNext2
  slideshow(className, arrowPrev, arrowNext)
}

arrowPrev2.onclick = function() {
  let className = '.card-wrapper2'
  let arrowPrev = arrowPrev2
  let arrowNext = arrowNext2
  slideshow(className, arrowPrev, arrowNext)
}

arrowNext3.onclick = function() {
  let className = '.card-wrapper3'
  let arrowPrev = arrowPrev3
  let arrowNext = arrowNext3
  slideshow(className, arrowPrev, arrowNext)
}

arrowPrev3.onclick = function() {
  let className = '.card-wrapper3'
  let arrowPrev = arrowPrev3
  let arrowNext = arrowNext3
  slideshow(className, arrowPrev, arrowNext)
}

arrowNext4.onclick = function() {
  let className = '.card-wrapper4'
  let arrowPrev = arrowPrev4
  let arrowNext = arrowNext4
  slideshow(className, arrowPrev, arrowNext)
}

arrowPrev4.onclick = function() {
  let className = '.card-wrapper4'
  let arrowPrev = arrowPrev4
  let arrowNext = arrowNext4
  slideshow(className, arrowPrev, arrowNext)
}


function  slideshow(className, arrowPrev, arrowNext){
  let cardWrapper = document.querySelector(className)
  let widthToScroll = cardWrapper.children[0].offsetWidth
  let cardBounding = cardWrapper.getBoundingClientRect()
  let cardImageAndLink = cardWrapper.querySelectorAll('img, a')
  let currScroll = 0
  let initPos = 0
  let clicked = false

  cardImageAndLink.forEach(item=> {
    item.setAttribute('draggable', false)
  })

  arrowPrev.onclick = function() {
    cardWrapper.scrollLeft -= widthToScroll
  }

  arrowNext.onclick = function() {
    cardWrapper.scrollLeft += widthToScroll
  }

  cardWrapper.onmousedown = function(e) {
    cardWrapper.classList.add('grab')
    initPos = e.clientX - cardBounding.left
    currScroll = cardWrapper.scrollLeft
    clicked = true
  }

  cardWrapper.onmousemove = function(e) {
    if(clicked) {
      const xPos = e.clientX - cardBounding.left
      cardWrapper.scrollLeft = currScroll + -(xPos - initPos)
    }
  }

  cardWrapper.onmouseup = mouseUpAndLeave
  cardWrapper.onmouseleave = mouseUpAndLeave

  function mouseUpAndLeave() {
    cardWrapper.classList.remove('grab')
    clicked = false
  }
}










// modal part
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





