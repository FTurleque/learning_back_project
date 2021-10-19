// Manipulation HTML via DOM
const header = document.querySelector('.title_container');
const synopsis = document.querySelector('.synopsis');
const body = document.querySelector('body');
const posterContainer = document.querySelector('.poster_container');
const form = document.getElementById('form');
const search = document.getElementById('search');
const originalTitle = document.querySelector('.original_title');
// const directing = document.querySelector('.directing');

// Création élément HTML
const titleElement = document.createElement('h1');
const pElement = document.createElement('p');
const backgroundImageMovie = document.createElement('img');
const posterElement = document.createElement('div');
const titleOriginalElement = document.createElement('a');


const API_KEY = '5ebb1b942f94f22ec3952d2c39768486';
const BASE_URL = 'https://api.themoviedb.org/3';
const backgroundIMG_URL = 'https://image.tmdb.org/t/p/original';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?api_key=' + API_KEY;
const french = '&language=fr-FR';

let keyword;

// Je recherche les films portant le terme cherché soit plusieurs
const getSearchMovies = async function(_keyword) {
    keyword = _keyword;
    let url = searchURL + '&query=' + _keyword + french;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            // console.log(data);
            checkTitle(data);
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }
}

// let index = 0;
let idMovie;

// Je test pour avoir un e correspondance entre l'entrée utilisateur et les titres recuperé de notre recherche
function checkTitle(_data) {
    // console.log(_data);
    let dataMovie = new Array;
    dataMovie = _data.results;

    for (let i = 0; i < dataMovie.length; i++) {
        let titleCheck = dataMovie[i].title;
        if (titleCheck !== keyword) {
            console.log('Lose')
        } else {
            // J'extrai l'id du film pour effectuer une recherche plus précise
            idMovie = dataMovie[i].id;
            getMovieById(idMovie);
        }
        i++
    }
    // _data.results.forEach(movie => {
    //     let titleCheck = _data.results[index].title;
    //     if (titleCheck !== keyword) {
    //         console.log(titleCheck);
    //     } else {
    //         let movieData = _data.results[index];
    //         return showMovie(movieData);
    //     }
    //     index++;
    // });

}

//recherche du film par son id tmdb
const getMovieById = async function(_id) {
    let url = BASE_URL + '/movie/' + _id + '?api_key=' + API_KEY + french;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            // console.log(data);
            showMovie(data);
        } else {
            console.error('Retour du serveur : ', response.status);
        }

    } catch (error) {
        console.log(error);
    }
}

let genresMovie = new Array;

function showMovie(_data) {
    console.log(_data);
    let titleMovie = _data.title;
    let synopsisMovie = _data.overview;
    let posterMovie = _data.poster_path;
    let backgroundMovie = _data.backdrop_path;
    // let dateMovie = _data.release_date;
    let titleOriginal = _data.original_title;

    titleElement.classList.add('title');
    titleElement.textContent = `${titleMovie}`;
    pElement.textContent = `${synopsisMovie}`;
    backgroundImageMovie.src = `${backgroundIMG_URL + backgroundMovie}`;
    backgroundImageMovie.classList.add('background');
    posterElement.className = 'poster';
    posterElement.style.backgroundImage = `url(${IMG_URL + posterMovie})`;
    posterElement.style.backgroundRepeat = 'no-repeat';
    posterElement.style.backgroundSize = 'contain';
    titleOriginalElement.textContent = `${titleOriginal}`;

    header.appendChild(titleElement);
    synopsis.appendChild(pElement);
    body.appendChild(backgroundImageMovie);
    posterContainer.appendChild(posterElement);

    getCreditsMovie(idMovie)
}

const getCreditsMovie = async function(_id) {
    let url = BASE_URL + '/movie/' + _id + '/credits?api_key=' + API_KEY + french;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            showMovieCredits(data);
            // carousel actor
        } else {
            console.error('Retour du serveur : ', response.status);
        }

    } catch (error) {
        console.log(error);
    }
}



// Je recupère le titre recherché dans le formulaire pour le traiter
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm) {
        getSearchMovies(searchTerm)
    }else{
        console.error('Error')
    }

})
