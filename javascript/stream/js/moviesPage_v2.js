import {
    createDivWithClass, 
    createAWithClass, 
    createH1WithClassAndTxt, 
    createImgWithClassAndUrlAndTitle,
    createPWithClassAndContent
} from './constructor_html.js'
import {
    backgroundIMG_URL,
    IMG_URL
} from './tmdb_v3.js'

// Manipulation HTML via DOM
const header = document.querySelector('.title_container');
const synopsis = document.querySelector('.synopsis');
const body = document.querySelector('body');
const posterContainer = document.querySelector('.poster_container');
// const form = document.getElementById('form');
const search = document.getElementById('search');
const originalTitle = document.querySelector('.original_title');
const typeOfMovie = document.querySelector('.genres');
const originMovie = document.querySelector('.country');
const directingMovie = document.querySelector('.director');
const writingMovie = document.querySelector('.screenplay');
const vote = document.querySelector('.vote');
const actorsMovie = document.querySelector('#carrousel_actor_movie');


// Affichage des infos sur le film dans la page
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
        indexGenre = 0;
    genresMovieData.forEach(genre => {
        if (indexGenre < parseInt(Object.keys(genresMovieData)[Object.keys(genresMovieData).length - 1])) {
            genre = genresMovieData[indexGenre].name + ', ';
        } else {
            genre = genresMovieData[indexGenre].name;
        }
        genresMovie = genresMovie + genre;
        indexGenre++
    });

    let countriesMovieData = _data.production_countries;
    let countriesMovie = '',
        indexCountry = 0;
    countriesMovieData.forEach(country => {
        if (indexCountry < parseInt(Object.keys(countriesMovieData)[Object.keys(countriesMovieData).length - 1])) {
            country = countriesMovieData[indexCountry].iso_3166_1 + ', ';
        } else {
            country = countriesMovieData[indexCountry].iso_3166_1;
        }
        
        countriesMovie = countriesMovie + country;
        indexCountry++;
    });

    // Intégrer l'année
    const titleElement = createH1WithClassAndTxt('title', `${titleMovie}`)
    const pElement = createPWithClassAndContent(`${titleMovie}`, `${synopsisMovie}`);
    const backgroundImageMovie = createImgWithClassAndUrlAndTitle('background', `${backgroundIMG_URL + backgroundMovie}`, 'title')
    const posterElement = createAWithClass('poster', '#')
    posterElement.style.backgroundImage = `url(${IMG_URL + posterMovie})`;
    posterElement.style.backgroundRepeat = 'no-repeat';
    posterElement.style.backgroundSize = 'contain';
    const titleOriginalElement = createAWithClass('original_title', '#');
    titleOriginalElement.textContent = `${titleOriginal}`;
    const typeOfMovieElement = createAWithClass('movie_genres', '#');
    typeOfMovieElement.textContent = `${genresMovie}`;
    const countryElement = createAWithClass('country', '#');
    countryElement.textContent = `${countriesMovie}`;
    const voteElement = createAWithClass('movie_vote', '#');
    voteElement.textContent = `${voteMovie} / 10`;

    header.appendChild(titleElement);
    synopsis.appendChild(pElement);
    body.appendChild(backgroundImageMovie);
    posterContainer.appendChild(posterElement);
    originalTitle.appendChild(titleOriginalElement);
    typeOfMovie.appendChild(typeOfMovieElement);
    originMovie.appendChild(countryElement);
    vote.appendChild(voteElement);
}

/**
 * Affichage des infos sur l'équipe du film
 * @param {Object} _data 
 */
function showMovieCredits(_data) {
    let crewMovieData = _data[0].crew;
    let castMovieData = _data[0].cast;
    // console.log(castMovieData);
    // console.log(crewMovieData);
    let directorMovie = '',
        screenplayMovie = '',
        indexCrew = 0,
        indexCast = 0,
        indexDirector = 0,
        indexScreenplay = 0;

    crewMovieData.forEach(crew => {
        if (crewMovieData[indexCrew].job === 'Director') {
            let director = '';
            if (indexDirector < 1) {
                director = crewMovieData[indexCrew].name;
            } else if (indexDirector === 1) {
                director = ', ' + crewMovieData[indexCrew].name;
            }
            directorMovie = directorMovie + director;

            indexDirector++;
        } else if (crewMovieData[indexCrew].job === 'Screenplay') {
            let screenplay = '';
            if (indexScreenplay < 2) {
                screenplay = crewMovieData[indexCrew].name + ', ';
            } else if (indexScreenplay === 2) {
                screenplay = crewMovieData[indexCrew].name;
            }
            screenplayMovie = screenplayMovie + screenplay;
            indexScreenplay++;
        }
        indexCrew++;
    });

    // console.log(castMovieData);
    
    castMovieData.forEach(actor => {
        if (castMovieData[indexCast].profile_path !== null) {
            let actorPicture = document.createElement('img');
            actorPicture.src = IMG_URL + castMovieData[indexCast].profile_path;
            actorPicture.alt = castMovieData[indexCast].name;
            actorPicture.classList.add('img_actor');
            actorsMovie.appendChild(actorPicture);
        } else {

        }
        indexCast++;
    });

    const directingElement = createAWithClass('movie_director', '#');
    directingElement.textContent = `${directorMovie}`;
    const writingElement = createAWithClass('movie_writing', '#');
    writingElement.textContent = `${screenplayMovie}`;

    directingMovie.appendChild(directingElement);
    writingMovie.appendChild(writingElement);
}

// Je recupère le titre recherché dans le formulaire pour le traiter
// form.addEventListener('submit', (e) => {
//     // document.getElementById("form").reset();
//     e.preventDefault();
//     const searchTerm = search.value;
//     if(searchTerm) {
//         getSearchMovies(searchTerm)
//     }else{
//         console.error('Error')
//     }

// })

export {
    showMovie,
    showMovieCredits
}