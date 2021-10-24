import {getVideoMovieById, getMovieById, getMovieBackdrops, getMovieToDiscover, url_discover} from './tmdb.js'
import {createDivWithClass, createAWithClass, createH2WithClass, createImgClass} from './constructor_html.js'
const sliderNewsMovies = document.querySelector('.dicover');
const sliderAction = document.querySelector('.action');
const sliderAnimation = document.querySelector('.animation');
// const sliderAventure = document.querySelector('.aventure');
// const sliderComédie = document.querySelector('.comédie');
// const sliderCrime = document.querySelector('.crime');
// const sliderDocumentaire = document.querySelector('.documentaire');
// const sliderDrame = document.querySelector('.drame');
// const sliderFamilial = document.querySelector('.familial');
// const sliderFantastique = document.querySelector('.fantastique');
// const sliderGuerre = document.querySelector('.guerre');
// const sliderHistoire = document.querySelector('.histoire');
// const sliderHorreur = document.querySelector('.horreur');
// const sliderMystère = document.querySelector('.mystère');
// const sliderMusique = document.querySelector('.musique');
// const sliderRomance = document.querySelector('.romance');
// const sliderScienceFiction = document.querySelector('.science_fiction');
// const sliderThriller = document.querySelector('.thriller');
// const sliderWestren = document.querySelector('.westren');

// Je récupère les données des films a découvrir
let discoverMovie = await getMovieToDiscover(url_discover);
console.log(discoverMovie);

// J'extrait les données de chaque film à découvrir
let idMoviesToDiscover = [];
function extractData(_data) {
    _data.results.forEach(movie => {
        idMoviesToDiscover.push(movie.id);
    });
}

extractData(discoverMovie)

// getMovieBackdrops(580489);

// let trailerMovie = getVideoMovieById(580489);

// getMovieById(580489);
