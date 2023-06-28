
async function getData(anyUrl, loadData){
    let reponse = await fetch(anyUrl);
    let data = await reponse.json();
    loadData(data);
}
function getBestMovieUrl(data){

    let bestMovieUrl = data.results[0].url;
    getData(bestMovieUrl, loadBestMovieInfo);
    
}
function loadBestMovieInfo(bestMovieUrl){
    document.getElementById("bestmovie_image").innerHTML = "<img src=" + bestMovieUrl.image_url + "alt='image best movie ' height='500' width='100%'/>";
    document.getElementById("title-one").innerHTML = bestMovieUrl.title;
    document.getElementById("description").innerHTML = bestMovieUrl.description;
}
let ratingSortedMovieUrl = "http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score"
getData(ratingSortedMovieUrl, getBestMovieUrl);

 









