
async function getData(anyUrl){
    let reponse = await fetch(anyUrl);
    let data = await reponse.json();
    return data;
}



function getBestMovieUrl(urlSortedMovie){
    let ratedSortedMovies = getData(urlSortedMovie);
    let bestMovieUrl = ratedSortedMovies.url;
    let bestMovie = getData(bestMovieUrl);
    let bestMovieImageUrl = bestMovie.url;
    document.getElementById("bestmovie_image").innerHTML = "<img src=" + bestMovieImageUrl + "alt='image best movie ' height='300' width='100%'/>";
    
}

getBestMovieUrl("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score");


 









