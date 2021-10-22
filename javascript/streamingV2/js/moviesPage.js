// Manipulation HTML via DOM
const header = document.querySelector('.title_container');
const synopsis = document.querySelector('.synopsis');
const body = document.querySelector('body');
const posterContainer = document.querySelector('.poster_container');
const form = document.getElementById('form');
const search = document.getElementById('search');
const originalTitle = document.querySelector('.original_title');
const typeOfMovie = document.querySelector('.genres');
const originMovie = document.querySelector('.country');
const directingMovie = document.querySelector('.director');
const writingMovie = document.querySelector('.screenplay');
const vote = document.querySelector('.vote');
const actorsMovie = document.querySelector('#carrousel_actor_movie');
// const directing = document.querySelector('.directing');

// Création élément HTML
const titleElement = document.createElement('h1');
const pElement = document.createElement('p');
const backgroundImageMovie = document.createElement('img');
const posterElement = document.createElement('div');
const titleOriginalElement = document.createElement('a');
const typeOfMovieElement = document.createElement('a');
const countryElement = document.createElement('a');
const directingElement = document.createElement('a');
const writingElement = document.createElement('a');
const voteElement = document.createElement('a');


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

let idMovie;

// Je test pour avoir un e correspondance entre l'entrée utilisateur et les titres recuperé de notre recherche
function checkTitle(_data) {
    // console.log(_data);
    let dataMovie = new Array;
    dataMovie = _data.results;
    let i = 0;
    let titleCheck;

    do {
        titleCheck = dataMovie[i].title;
        if (titleCheck === keyword) {
            // J'extrai l'id du film pour effectuer une recherche plus précise
            idMovie = dataMovie[i].id;
            getMovieById(idMovie);
        }
        i++
    } while (titleCheck !== keyword);

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

function showMovie(_data) {
    // console.log(_data);
    let titleMovie = _data.title;
    let synopsisMovie = _data.overview;
    let posterMovie = _data.poster_path;
    let backgroundMovie = _data.backdrop_path;
    // let dateMovie = _data.release_date;
    let titleOriginal = _data.original_title;
    // let taglineTitle = _data.tagline;
    // let studioMovie = _data.production_compagnies;
    let voteMovie = _data.vote_average;
    
    let genresMovieData = _data.genres;
    let genresMovie = '',
        i = 0;

    genresMovieData.forEach(genres => {
        // Enlever la dernière virgule
        let genre = genresMovieData[i].name + ', ';
        genresMovie = genresMovie + genre;
        i++
    });

    let countriesMovieData = _data.production_countries;
    let countriesMovie = '',
        index = 0;
    countriesMovieData.forEach(countries => {
        let country = countriesMovieData[index].iso_3166_1 + ', ';
        countriesMovie = countriesMovie + country;
        index++;
    });

    // Intégrer l'année
    titleElement.classList.add('title');
    titleElement.textContent = `${titleMovie}`;
    pElement.textContent = `${synopsisMovie}`;
    backgroundImageMovie.src = `${backgroundIMG_URL + backgroundMovie}`;
    backgroundImageMovie.classList.add('background');
    posterElement.className = 'poster';
    posterElement.style.backgroundImage = `url(${IMG_URL + posterMovie})`;
    posterElement.style.backgroundRepeat = 'no-repeat';
    posterElement.style.backgroundSize = 'contain';
    titleOriginalElement.href = '#';
    titleOriginalElement.textContent = `${titleOriginal}`;
    typeOfMovieElement.href = '#';
    typeOfMovieElement.textContent = `${genresMovie}`;
    countryElement.href = '#';
    countryElement.textContent = `${countriesMovie}`;
    voteElement.href = '#';
    voteElement.textContent = `${voteMovie}`;

    header.appendChild(titleElement);
    synopsis.appendChild(pElement);
    body.appendChild(backgroundImageMovie);
    posterContainer.appendChild(posterElement);
    originalTitle.appendChild(titleOriginalElement);
    typeOfMovie.appendChild(typeOfMovieElement);
    originMovie.appendChild(countryElement);
    vote.appendChild(voteElement);

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
        } else {
            console.error('Retour du serveur : ', response.status);
        }

    } catch (error) {
        console.log(error);
    }
}

function showMovieCredits(_data) {
    let crewMovieData = _data.crew;
    let castMovieData = _data.cast;
    console.log(castMovieData);
    console.log(crewMovieData);
    let directorMovie = '',
        screenplayMovie = '',
        indexCrew = 0,
        indexCast = 0;

    crewMovieData.forEach(cast => {
        if (crewMovieData[indexCrew].job === 'Director') {
            let director = crewMovieData[indexCrew].name;
            directorMovie = directorMovie + director;
        } else if (crewMovieData[indexCrew].job === 'Screenplay') {
            let screenplay = crewMovieData[indexCrew].name + ', ';
            screenplayMovie = screenplayMovie + screenplay;
        }
        indexCrew++;
    });

    castMovieData.forEach(actor => {
        let actorPicture = document.createElement('img');
        actorPicture.src = IMG_URL + castMovieData[indexCast].profile_path;
        actorPicture.alt = castMovieData[indexCast].name;
        actorPicture.classList.add('img_actor');
        actorsMovie.appendChild(actorPicture);
        indexCast++;
    });

    directingElement.href = '#';
    directingElement.textContent = `${directorMovie}`;
    writingElement.href = '#';
    writingElement.textContent = `${screenplayMovie}`;

    directingMovie.appendChild(directingElement);
    writingMovie.appendChild(writingElement);
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
