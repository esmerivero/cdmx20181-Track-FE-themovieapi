// window.movies = () =>{
//     getMovies : (api) => {

//     }
// };

let apiToyStory = 'https://www.omdbapi.com/?s=toy+story&plot=full&apikey=256f52a2';
let apiAvengers = 'https://www.omdbapi.com/?s=avengers&plot=full&apikey=256f52a2';
let apiIronMan = 'https://www.omdbapi.com/?s=iron-man&plot=full&apikey=256f52a2';
let btnToyStory = document.getElementById('toy-story');
let btnAvengers = document.getElementById('avengers');
let btnIronMan = document.getElementById('iron-man');
let cardBody = document.getElementById('card-body');

btnToyStory.addEventListener('click', () => {
    getMovie(apiToyStory);
});

btnAvengers.addEventListener('click', () => {
    getMovie(apiAvengers);
});

btnIronMan.addEventListener('click', () => {
    getMovie(apiIronMan);
    // .then
    // const drawMovies = (movies) => {

});

let getMovie = (api) => {
    fetch(api)
        .then((response) => {
            return response.json();
        })
        .then((dataJson) => {
            return dataJson.Search;
        })
        .then((movies) => {
            cardBody.innerHTML = ``;
            for (const key in movies) {
                if (movies.hasOwnProperty(key)) {
                    const element = movies[key];

                    if (element.Poster != 'N/A') {
                        cardBody.innerHTML += `
                        <input type="image" id="image" alt="Login" src="${element.Poster}" data-toggle="modal" data-target="#${element.imdbID}" />

                        <div class="modal fade" id="${element.imdbID}" tabindex="-1" role="dialog" aria-labelledby="${element.imdbID}Label" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <center>
                                            <h5 class="modal-title" id="${element.imdbID}Label">${element.Title}</h5>
                                        </center>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <figure>
                                            <center>
                                                <b>Año:</b> ${element.Year}</center>
                                            <br>
                                            <center>
                                                <b>Tipo:</b> ${element.Type}</center>
                                            <br>
                                            <center>
                                                <img src="${element.Poster}">
                                            </center>
                                        </figure>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                }
            }
        })
};
