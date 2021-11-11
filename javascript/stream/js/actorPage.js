import { 
    html__element__img 
} from './constructor_html.js'
import {
    IMG_URL
} from './tmdb_v3.js'

const picture_actor = document.querySelector('.picture__actor');
const gender_actor = document.querySelector('.gender')
const birthdate_actor = document.querySelector('.birthdate')
const dateOfDeath_actor = document.querySelector('.dateOfDeath')
const birthplace_actor = document.querySelector('.birthplace')
const alias_actor = document.querySelector('.alias')
const actor_name = document.querySelector('.actor__name')
const bio_actor = document.querySelector('.bio__actor')
const caroussel_movies_actor = document.querySelector('.caroussel__movies__actor')
const department_of_movies = document.querySelector('.department__of__movies')


let data_cast,
    data_crew;
let movie_cast = {
    id: '',
    title: '',
    src_img: ''
};
function swiper_movies_actor_creator(_data_actor) {
    data_cast = _data_actor[0].cast;
    data_crew = _data_actor[0].crew;

    data_cast.forEach(movie => {
        movie_cast.title = movie.title;
        movie_cast.id = movie.id;
        movie_cast.src_img = IMG_URL + movie.poster_path;
        html__element__img(movie_cast, 'movies__actor');
        // poster_path
        // id
    });

    // data_crew.forEach(movie => {
    //     // poster_path
    //     // id
    // });
}

function swiper_portrait_actor(_data_actor) {
    _data_actor.forEach(portrait => {
        let url_portrait = IMG_URL + portrait.file_path;
        html__element__img(url_portrait, 'portrait');
    });
    debugger
}


export {
    picture_actor,
    caroussel_movies_actor, 
    swiper_movies_actor_creator,
    swiper_portrait_actor
}