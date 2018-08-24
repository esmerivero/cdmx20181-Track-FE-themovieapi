window.getMovies = (api) => {
    fetch(api)
    .then((response) =>{
        return response.json();
    })
    .then((dataJson) => {
        console.log(dataJson);
        
        return dataJson.Search;
    })
    .then((movies) => {
        console.log(movies)
        return movies;
    })
}