import {
    createDivWithClass,
    createAWithClass,
    createH1WithClass,
    createImgWithClass
} from './constructor_html.js';

import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

// Manipulation du DOM
const sliderNewsMovies = document.querySelector('.dicover');
const swiper_action = document.querySelector('.actionMovie');
const swiper_animation = document.querySelector('.animationMovie');
const swiper_adventure = document.querySelector('.adventureMovie');
const swiper_comedy = document.querySelector('.comedyMovie');
const swiper_crime = document.querySelector('.crimeMovie');
const swiper_documentary = document.querySelector('.documentaryMovie');
const swiper_drama = document.querySelector('.dramaMovie');
const swiper_family = document.querySelector('.familyMovie');
const swiper_fantasy = document.querySelector('.fantasyMovie');
const swiper_history = document.querySelector('.historyMovie');
const swiper_horror = document.querySelector('.horrorMovie');
const swiper_music = document.querySelector('.musicMovie');
const swiper_mystery = document.querySelector('.mysteryMovie');
const swiper_romance = document.querySelector('.romanceMovie');
const swiper_science_fiction = document.querySelector('.science_fictionMovie');
const swiper_tv_movie = document.querySelector('.tv_movieMovie');
const swiper_thriller = document.querySelector('.thrillerMovie');
const swiper_war = document.querySelector('.warMovie');
const swiper_western = document.querySelector('.westernMovie');

// Création d'éléments HTML
const wrapper_action = createDivWithClass('swiper-wrapper action');
const title_action = createH1WithClass('title');
const action__nextMovie = createDivWithClass('swiper-button-next');
const action__prevMovie = createDivWithClass('swiper-button-prev');
title_action.textContent = 'Action';
swiper_action.appendChild(title_action);
swiper_action.appendChild(wrapper_action);
swiper_action.appendChild(action__nextMovie);
swiper_action.appendChild(action__prevMovie);

const wrapper_animation = createDivWithClass('swiper-wrapper animation');
const title_animation = createH1WithClass('title');
const animation__nextMovie = createDivWithClass('swiper-button-next');
const animation__prevMovie = createDivWithClass('swiper-button-prev');
title_animation.textContent = 'Animation';
swiper_animation.appendChild(title_animation);
swiper_animation.appendChild(wrapper_animation);
swiper_animation.appendChild(animation__nextMovie);
swiper_animation.appendChild(animation__prevMovie);

const wrapper_adventure = createDivWithClass('swiper-wrapper adventure');
const title_adventure = createH1WithClass('title');
const adventure__nextMovie = createDivWithClass('swiper-button-next');
const adventure__prevMovie = createDivWithClass('swiper-button-prev');
title_adventure.textContent = 'Aventure';
swiper_adventure.appendChild(title_adventure);
swiper_adventure.appendChild(wrapper_adventure);
swiper_adventure.appendChild(adventure__nextMovie);
swiper_adventure.appendChild(adventure__prevMovie);

const wrapper_comedy = createDivWithClass('swiper-wrapper comedy');
const title_comedy = createH1WithClass('title');
const comedy__nextMovie = createDivWithClass('swiper-button-next');
const comedy__prevMovie = createDivWithClass('swiper-button-prev');
title_comedy.textContent = 'Comédie';
swiper_comedy.appendChild(title_comedy);
swiper_comedy.appendChild(wrapper_comedy);
swiper_comedy.appendChild(comedy__nextMovie);
swiper_comedy.appendChild(comedy__prevMovie);

const wrapper_crime = createDivWithClass('swiper-wrapper crime');
const title_crime = createH1WithClass('title');
const crime__nextMovie = createDivWithClass('swiper-button-next');
const crime__prevMovie = createDivWithClass('swiper-button-prev');
title_crime.textContent = 'Crime';
swiper_crime.appendChild(title_crime);
swiper_crime.appendChild(wrapper_crime);
swiper_crime.appendChild(crime__nextMovie);
swiper_crime.appendChild(crime__prevMovie);

const wrapper_documentary = createDivWithClass('swiper-wrapper documentary');
const title_documentary = createH1WithClass('title');
const documentary__nextMovie = createDivWithClass('swiper-button-next');
const documentary__prevMovie = createDivWithClass('swiper-button-prev');
title_documentary.textContent = 'Documentaire';
swiper_documentary.appendChild(title_documentary);
swiper_documentary.appendChild(wrapper_documentary);
swiper_documentary.appendChild(documentary__nextMovie);
swiper_documentary.appendChild(documentary__prevMovie);

const wrapper_drama = createDivWithClass('swiper-wrapper drama');
const title_drama = createH1WithClass('title');
const drama__nextMovie = createDivWithClass('swiper-button-next');
const drama__prevMovie = createDivWithClass('swiper-button-prev');
title_drama.textContent = 'Drame';
swiper_drama.appendChild(title_drama);
swiper_drama.appendChild(wrapper_drama);
swiper_drama.appendChild(drama__nextMovie);
swiper_drama.appendChild(drama__prevMovie);

const wrapper_family = createDivWithClass('swiper-wrapper family');
const title_family = createH1WithClass('title');
const family__nextMovie = createDivWithClass('swiper-button-next');
const family__prevMovie = createDivWithClass('swiper-button-prev');
title_family.textContent = 'Famille';
swiper_family.appendChild(title_family);
swiper_family.appendChild(wrapper_family);
swiper_family.appendChild(family__nextMovie);
swiper_family.appendChild(family__prevMovie);

const wrapper_fantasy = createDivWithClass('swiper-wrapper fantasy');
const title_fantasy = createH1WithClass('title');
const fantasy__nextMovie = createDivWithClass('swiper-button-next');
const fantasy__prevMovie = createDivWithClass('swiper-button-prev');
title_fantasy.textContent = 'Fantastique';
swiper_fantasy.appendChild(title_fantasy);
swiper_fantasy.appendChild(wrapper_fantasy);
swiper_fantasy.appendChild(fantasy__nextMovie);
swiper_fantasy.appendChild(fantasy__prevMovie);

const wrapper_history = createDivWithClass('swiper-wrapper history');
const title_history = createH1WithClass('title');
const history__nextMovie = createDivWithClass('swiper-button-next');
const history__prevMovie = createDivWithClass('swiper-button-prev');
title_history.textContent = 'Historique';
swiper_history.appendChild(title_history);
swiper_history.appendChild(wrapper_history);
swiper_history.appendChild(history__nextMovie);
swiper_history.appendChild(history__prevMovie);

const wrapper_horror = createDivWithClass('swiper-wrapper horror');
const title_horror = createH1WithClass('title');
const horror__nextMovie = createDivWithClass('swiper-button-next');
const horror__prevMovie = createDivWithClass('swiper-button-prev');
title_horror.textContent = 'Horreur';
swiper_horror.appendChild(title_horror);
swiper_horror.appendChild(wrapper_horror);
swiper_horror.appendChild(horror__nextMovie);
swiper_horror.appendChild(horror__prevMovie);

const wrapper_music = createDivWithClass('swiper-wrapper music');
const title_music = createH1WithClass('title');
const music__nextMovie = createDivWithClass('swiper-button-next');
const music__prevMovie = createDivWithClass('swiper-button-prev');
title_music.textContent = 'Musique';
swiper_music.appendChild(title_music);
swiper_music.appendChild(wrapper_music);
swiper_music.appendChild(music__nextMovie);
swiper_music.appendChild(music__prevMovie);

const wrapper_mystery = createDivWithClass('swiper-wrapper mystery');
const title_mystery = createH1WithClass('title');
const mystery__nextMovie = createDivWithClass('swiper-button-next');
const mystery__prevMovie = createDivWithClass('swiper-button-prev');
title_mystery.textContent = 'Mystère';
swiper_mystery.appendChild(title_mystery);
swiper_mystery.appendChild(wrapper_mystery);
swiper_mystery.appendChild(mystery__nextMovie);
swiper_mystery.appendChild(mystery__prevMovie);

const wrapper_romance = createDivWithClass('swiper-wrapper romance');
const title_romance = createH1WithClass('title');
const romance__nextMovie = createDivWithClass('swiper-button-next');
const romance__prevMovie = createDivWithClass('swiper-button-prev');
title_romance.textContent = 'Romance';
swiper_romance.appendChild(title_romance);
swiper_romance.appendChild(wrapper_romance);
swiper_romance.appendChild(romance__nextMovie);
swiper_romance.appendChild(romance__prevMovie);

const wrapper_science_fiction = createDivWithClass('swiper-wrapper science_fiction');
const title_science_fiction = createH1WithClass('title');
const science_fiction__nextMovie = createDivWithClass('swiper-button-next');
const science_fiction__prevMovie = createDivWithClass('swiper-button-prev');
title_science_fiction.textContent = 'Science Fiction';
swiper_science_fiction.appendChild(title_science_fiction);
swiper_science_fiction.appendChild(wrapper_science_fiction);
swiper_science_fiction.appendChild(science_fiction__nextMovie);
swiper_science_fiction.appendChild(science_fiction__prevMovie);

const wrapper_tv_movie = createDivWithClass('swiper-wrapper tv_movie');
const title_tv_movie = createH1WithClass('title');
const tv_movie__nextMovie = createDivWithClass('swiper-button-next');
const tv_movie__prevMovie = createDivWithClass('swiper-button-prev');
title_tv_movie.textContent = 'Téléfilm';
swiper_tv_movie.appendChild(title_tv_movie);
swiper_tv_movie.appendChild(wrapper_tv_movie);
swiper_tv_movie.appendChild(tv_movie__nextMovie);
swiper_tv_movie.appendChild(tv_movie__prevMovie);

const wrapper_thriller = createDivWithClass('swiper-wrapper thriller');
const title_thriller = createH1WithClass('title');
const thriller__nextMovie = createDivWithClass('swiper-button-next');
const thriller__prevMovie = createDivWithClass('swiper-button-prev');
title_thriller.textContent = 'Thriller';
swiper_thriller.appendChild(title_thriller);
swiper_thriller.appendChild(wrapper_thriller);
swiper_thriller.appendChild(thriller__nextMovie);
swiper_thriller.appendChild(thriller__prevMovie);

const wrapper_war = createDivWithClass('swiper-wrapper war');
const title_war = createH1WithClass('title');
const war__nextMovie = createDivWithClass('swiper-button-next');
const war__prevMovie = createDivWithClass('swiper-button-prev');
title_war.textContent = 'Guerre';
swiper_war.appendChild(title_war);
swiper_war.appendChild(wrapper_war);
swiper_war.appendChild(war__nextMovie);
swiper_war.appendChild(war__prevMovie);

const wrapper_western  = createDivWithClass('swiper-wrapper western');
const title_western = createH1WithClass('title');
const western__nextMovie = createDivWithClass('swiper-button-next');
const western__prevMovie = createDivWithClass('swiper-button-prev');
title_western.textContent = 'Western';
swiper_western.appendChild(title_western);
swiper_western.appendChild(wrapper_western);
swiper_western.appendChild(western__nextMovie);
swiper_western.appendChild(western__prevMovie);


// API Tmdb
const api_key = 'api_key=5ebb1b942f94f22ec3952d2c39768486';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const img_backdrops = 'https://image.tmdb.org/t/p/original';
const french = '&language=fr-FR';
const url_discover = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + api_key;
const nextPage = '&page=';
let page = 1;
const urlWithPage = url_discover + nextPage + page;
const genres = [
    { "id": 28, "name": "action" },
    { "id": 12, "name": "adventure" },
    { "id": 16, "name": "animation" },
    { "id": 35, "name": "comedy" },
    { "id": 80, "name": "crime" },
    { "id": 99, "name": "documentary" },
    { "id": 18, "name": "drama" },
    { "id": 10751, "name": "family" },
    { "id": 14, "name": "fantasy" },
    { "id": 36, "name": "history" },
    { "id": 27, "name": "horror" },
    { "id": 10402, "name": "music" },
    { "id": 9648, "name": "mystery" },
    { "id": 10749, "name": "romance" },
    { "id": 878, "name": "science_fiction" },
    { "id": 10770, "name": "tv_movie" },
    { "id": 53, "name": "thriller" },
    { "id": 10752, "name": "war" },
    { "id": 37, "name": "western" }
]

// Constructor du Swiper
const swiper = new Swiper(HTMLElement, {});


// Je récupère une liste de tous films a découvrir depuis TMDB et j'en extrait l'ID
const getMovieToDiscover = async function (_url) {
    while (page < 2) {
        try {
            let response = await fetch(urlWithPage);
            if (response.ok) {
                let tmp = await response.json();
                tmp.results.forEach(result => {
                    let moviesId = result.id;

                    getGenresMovies(result);
                });
                page++;

            } else {
                console.error('Retour du serveur : ', response.status);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

// Je récupère les info d'un film par son id
const getMovieById = async function (_id) {
    let url = BASE_URL + '/movie/' + _id + '?' + api_key;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data)
            debugger
            // getGenresMovies(data);
            // const backdropMovie = getMovieBackdrops(_id);
            // console.log(backdropMovie)
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }
}

let genreName = '',
    srcImg = '';

// Je partage les films selon le genre dans les sliders
const getGenresMovies = function(_data) {
    debugger
    let genresMovie = _data.genre_ids;
    let idMovie = _data.id;
    for (let i = 0; i < genresMovie.length; i++) {
        switch (genresMovie[i]) {
            case 28:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 28) {
                        genreName = `${genres[indexGenres].name}`;
                    }
                }
                getMovieById(idMovie);
                // html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 12:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 12) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 16:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 16) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 35:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 35) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 80:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 80) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 99:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 99) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 18:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 18) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 10751:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 10751) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 14:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 14) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 36:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 36) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 27:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 27) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 10402:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 10402) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 9648:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 9648) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 10749:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 10749) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 878:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 878) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 10770:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 10770) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 53:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 53) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 10752:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 10752) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
            case 37:
                for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                    if (genres[indexGenres].id === 37) {
                        genreName = `${genres[indexGenres].name}`;
                        getMovieById(idMovie);
                    }
                }   
                html__element__img(genreName, srcImg, _data);
                debugger
                break;
        
            default:
                break;
        }
    }
}

// Je récupère les images backdrops d'un film par son id
const getMovieBackdrops = async function(_id) {
    debugger
    let urlBackdrops = BASE_URL + '/movie/' + _id + '/images?' + api_key;
    try {
        let response = await fetch(urlBackdrops);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            debugger
            srcImg = sendBackdropSrcToImg(data);
            
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }
    debugger
}

function sendBackdropSrcToImg(_data) {
    let dataBackdrops = _data.backdrops;
    let backdropsEN = [];
    let backdropsFR = [];
    let srcImg = '';

    for (let i = 0; i < dataBackdrops.length; i++) {
        if (dataBackdrops[i].iso_639_1 === 'en') {
            backdropsEN.push(dataBackdrops[i]);
        } else if (dataBackdrops[i].iso_639_1 === 'fr') {
            backdropsFR.push(dataBackdrops[i]);
        }
    }

    if (backdropsFR.length > 0) {
        let url__end = backdropsFR[0].file_path;
        srcImg = img_backdrops + url__end;
    } else if (backdropsEN.length > 0) {
        let url__end = backdropsEN[0].file_path;
        srcImg = img_backdrops + url__end;
    } else {
        console.log('Pas de Backdrops');
    }
    return srcImg;
}

function html__element__img(_class, _urlImg, _data) {
    let swiperSlide = createDivWithClass('swiper-slide');
    let aMovie = createAWithClass('item__container');
    aMovie.href ='#';
    let imgMovie = createImgWithClass('picture');
    imgMovie.src = _urlImg;
    imgMovie.alt = _data.title;
    aMovie.appendChild(imgMovie);
    swiperSlide.appendChild(aMovie)
    document.querySelector('.' + _class).appendChild(swiperSlide);

}


const getVideoMovieById = async function (_id) {
    let url = BASE_URL + '/movie/' + _id + '/videos?' + api_key + french;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data)
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }

}

getMovieToDiscover(urlWithPage);
