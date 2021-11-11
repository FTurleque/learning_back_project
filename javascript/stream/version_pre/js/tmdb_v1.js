import {
    createDivWithClass,
    createAWithClass,
    createH2WithClass,
    createImgClass
} from './constructor_html.js';

import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

// Manipulation du DOM
const sliderNewsMovies = document.querySelector('.dicover');
const slider_action = document.querySelector('.action');
const slider_animation = document.querySelector('.animation');
const slider_adventure = document.querySelector('.adventure');
const slider_comedy = document.querySelector('.comedy');
const slider_crime = document.querySelector('.crime');
const slider_documentary = document.querySelector('.documentary');
const slider_drama = document.querySelector('.drama');
const slider_family = document.querySelector('.family');
const slider_fantasy = document.querySelector('.fantasy');
const slider_history = document.querySelector('.history');
const slider_horror = document.querySelector('.horror');
const slider_music = document.querySelector('.music');
const slider_mystery = document.querySelector('.mystery');
const slider_romance = document.querySelector('.romance');
const slider_science_fiction = document.querySelector('.science_fiction');
const slider_tv_movie = document.querySelector('.tv_movie');
const slider_thriller = document.querySelector('.thriller');
const slider_war = document.querySelector('.war');
const slider_western = document.querySelector('.western');

// 

// API Tmdb
const api_key = 'api_key=5ebb1b942f94f22ec3952d2c39768486';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const img_backdrops = 'https://image.tmdb.org/t/p/original';
const french = '&language=fr-FR';
const url_discover = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + api_key + french;
const nextPage = '&page=';
let page = 1;
const urlWithPage = url_discover + nextPage + page;
const genres = [
    { "id": 28, "name": "Action" },
    { "id": 12, "name": "Aventure" },
    { "id": 16, "name": "Animation" },
    { "id": 35, "name": "Comédie" },
    { "id": 80, "name": "Crime" },
    { "id": 99, "name": "Documentaire" },
    { "id": 18, "name": "Drame" },
    { "id": 10751, "name": "Familial" },
    { "id": 14, "name": "Fantastique" },
    { "id": 36, "name": "Histoire" },
    { "id": 27, "name": "Horreur" },
    { "id": 10402, "name": "Musique" },
    { "id": 9648, "name": "Mystère" },
    { "id": 10749, "name": "Romance" },
    { "id": 878, "name": "Science-Fiction" },
    { "id": 10770, "name": "Téléfilm" },
    { "id": 53, "name": "Thriller" },
    { "id": 10752, "name": "Guerre" },
    { "id": 37, "name": "Western" }
]

// A voir ou le placer pour répartir selon le genre
const sectionTitle = createH2WithClass('news');
sectionTitle.textContent = 'News';
const swiperWrapper = createDivWithClass('swiper-wrapper');
const nextMovie = createDivWithClass('swiper-button-next');
const prevMovie = createDivWithClass('swiper-button-prev');
sliderNewsMovies.appendChild(sectionTitle);
sliderNewsMovies.appendChild(swiperWrapper);
sliderNewsMovies.appendChild(nextMovie);
sliderNewsMovies.appendChild(prevMovie);

const swiper = new Swiper(HTMLElement, {});


// Je récupère une liste de tous films a découvrir depuis TMDB et j'en extrait l'ID
const getMovieToDiscover = async function (_url) {
    let index = 0;
    while (page < 2) {
        try {
            let response = await fetch(urlWithPage);
            if (response.ok) {
                let tmp = await response.json();
                tmp.results.forEach(result => {
                    let movieData = tmp.results;
                    let moviesId = movieData[index].id;
                    console.log(moviesId)
                    index++;
                    // getMovieById(moviesId);
                    // getVideoMovieById(moviesId);
                    getMovieBackdrops(moviesId);
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
    let url = BASE_URL + '/movie/' + _id + '?' + api_key + french;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data)
            debugger
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }

}

// Je récupère les images backdrops d'un film par son id
const getMovieBackdrops = async function (_id) {
    let url = BASE_URL + '/movie/' + _id + '/images?' + api_key;
    let dataFrFind = false;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();

            let dataBackdrops = data.backdrops;
            let backdropsEN = [];
            let backdropsFR = [];

            for (let i = 0; i < dataBackdrops.length; i++) {
                if (dataBackdrops[i].iso_639_1 === 'en') {
                    backdropsEN.push(dataBackdrops[i]);
                } else if (dataBackdrops[i].iso_639_1 === 'fr') {
                    backdropsFR.push(dataBackdrops[i]);
                }
            }
            // console.log(backdropsEN);
            // console.log(backdropsFR);

            if (backdropsFR.length > 0) {
                let swiperSlide = createDivWithClass('swiper-slide');
                let aMovie = createAWithClass('item__container');
                let imgMovie = createImgClass('picture');
                imgMovie.src = `${img_backdrops}${backdropsFR[0].file_path}`;
                swiperSlide.appendChild(aMovie);
                aMovie.appendChild(imgMovie);
                swiperWrapper.appendChild(swiperSlide);
            } else if (backdropsEN.length > 0) {
                let swiperSlide = createDivWithClass('swiper-slide');
                let aMovie = createAWithClass('item__container');
                let imgMovie = createImgClass('picture');
                imgMovie.src = `${img_backdrops}${backdropsEN[0].file_path}`;
                swiperSlide.appendChild(aMovie);
                aMovie.appendChild(imgMovie);
                swiperWrapper.appendChild(swiperSlide);
            } else {
                console.log('Pas de Backdrops');
            }
        } else {
            console.error('Retour du serveur : ', response.status);
        }
        swiper = new Swiper(sliderNewsMovies, {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            spaceBetween: 5,
            slidesPerView: 5,
            // loop: true,
            // freeMode: true,
            // speed: 500,
        });
    } catch (error) {
        console.log(error);
    }
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
