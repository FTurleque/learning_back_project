import {
    createDivWithClass, 
    createAWithClass, 
    createH1WithClass, 
    createImgWithClass} from './constructor_html.js'
import {
    sliderNewsMovies,
    swiper__action,
    swiper__animation,
    swiper__adventure,
    swiper__comedy,
    swiper__crime,
    swiper__documentary,
    swiper__drama,
    swiper__family,
    swiper__fantasy,
    swiper__history,
    swiper__horror,
    swiper__music,
    swiper__mystery,
    swiper__romance,
    swiper__science_fiction,
    swiper__tv_movie,
    swiper__thriller,
    swiper__war,
    swiper__western
} from './app.js'
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

// Constructor du Swiper
const swiper = new Swiper(HTMLElement, {});

// API Tmdb
const api_key = 'api_key=5ebb1b942f94f22ec3952d2c39768486';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const img_backdrops = 'https://image.tmdb.org/t/p/original';
const french = '&language=fr-FR';
const url_discover = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + api_key;
const nextPage = '&page=';
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

let idMoviesDiscover = [];
// Je récupère une liste de tous films a découvrir depuis TMDB et j'en extrait l'ID
async function getMovieToDiscover(indexMax) {
    let page = 1;
    while (page < (indexMax + 1)) {
        try {
            let url = url_discover + nextPage + page;
            let response = await fetch(url);
            if (response.ok) {
                let tmp = await response.json();
                tmp.results.forEach(result => {
                    let result_id = result.id;
                    idMoviesDiscover.push(result_id);
                    
                });
            } else {
                console.error('Retour du serveur : ', response.status);
            }
        } catch (error) {
            console.log(error);
        }
        page++;
    }
}

let dataMoviesFR = [];
// Je récupère les info d'un film par son id
const getMovieById = async function (movies_id) {
    for (let i = 0; i < movies_id.length; i++) {
        let movie_id  = movies_id[i];
        let url = `https://api.themoviedb.org/3/movie/${movie_id}?${api_key}&language=en-US`;
        try {
            let response = await fetch(url);
            if (response.ok) {
                let dataMovie = await response.json();
                dataMoviesFR.push(dataMovie);
            } else {
                console.error('Retour du serveur : ', response.status);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

let data_moviesWithUrl = [];
// Je récupère les images backdrops d'un film par son id
const getMovieBackdrops = async function(movies_id) {
    for (let indexMovie = 0; indexMovie < movies_id.length; indexMovie++) {
        let movie_id  = movies_id[indexMovie];
        let url = `https://api.themoviedb.org/3/movie/${movie_id}/images?${api_key}`;
        try {
            let response = await fetch(url);
            if (response.ok) {
                let dataMovie = await response.json();
                let dataBackdrops = dataMovie.backdrops;
                let backdropsEN = [];
                let backdropsFR = [];
                let backdrops_noName = [];
                let srcImg = '';
            
                for (let indexBackdrop = 0; indexBackdrop < dataBackdrops.length; indexBackdrop++) {
                    if (dataBackdrops[indexBackdrop].iso_639_1 === 'en') {
                        backdropsEN.push(dataBackdrops[indexBackdrop]);
                    } else if (dataBackdrops[indexBackdrop].iso_639_1 === 'fr') {
                        backdropsFR.push(dataBackdrops[indexBackdrop]);
                    } else {
                        backdrops_noName.push(dataBackdrops[indexBackdrop]);
                    }
                }
            
                if (backdropsFR.length > 0) {
                    let url__end = backdropsFR[0].file_path;
                    srcImg = img_backdrops + url__end;
                    let src_img = {
                        src_Language: 'fr',
                        src_img: srcImg
                    }
                    let object_moviesWithUrl = Object.assign(dataMoviesFR[indexMovie], src_img);
                    data_moviesWithUrl.push(object_moviesWithUrl)
                } else if (backdropsEN.length > 0) {
                    let url__end = backdropsEN[0].file_path;
                    srcImg = img_backdrops + url__end;
                    let src_img = {
                        src_Language: 'en',
                        src_img: srcImg
                    }
                    let object_moviesWithUrl = Object.assign(dataMoviesFR[indexMovie], src_img);
                    data_moviesWithUrl.push(object_moviesWithUrl)
                } else if (backdrops_noName > 0) {
                    let url__end = backdropsEN[0].file_path;
                    srcImg = img_backdrops + url__end;
                    let src_img = {
                        src_Language: 'none',
                        src_img: srcImg
                    }
                    let object_moviesWithUrl = Object.assign(dataMoviesFR[indexMovie], src_img);
                    data_moviesWithUrl.push(object_moviesWithUrl)
                } else {
                    console.log('Pas de Backdrops');
                }

            } else {
                console.error('Retour du serveur : ', response.status);
            }
        } catch (error) {
            console.log(error);
        }
    }
    console.log(data_moviesWithUrl);
}


// Je partage les films selon le genre dans les sliders

const getGenresMovies = function(_data) {
    let genreName = '',
    genresMovie = [];
    for (let index_genres = 0; index_genres < _data.length; index_genres++) {
        genresMovie = _data[index_genres].genres;
        for (let i = 0; i < genresMovie.length; i++) {
            switch (genresMovie[i].id) {
                case 28:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 28) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 12:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 12) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 16:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 16) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 35:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 35) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 80:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 80) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 99:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 99) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 18:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 18) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 10751:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 10751) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 14:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 14) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 36:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 36) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 27:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 27) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 10402:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 10402) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 9648:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 9648) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 10749:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 10749) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 878:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 878) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 10770:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 10770) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 53:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 53) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 10752:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 10752) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
                case 37:
                    for (let indexGenres = 0; indexGenres < genres.length; indexGenres++) {
                        if (genres[indexGenres].id === 37) {
                            genreName = `${genres[indexGenres].name}`;
                        }
                    }
                    html__element__img(_data[index_genres], genreName);
                    break;
            
                default:
                    break;
            }
        }
    
    }
    

}


function html__element__img(_data, _class) {
    let swiperSlide = createDivWithClass('swiper-slide');
    let aMovie = createAWithClass('item__container');
    aMovie.href = 'movies_presentation.html';
    let imgMovie = createImgWithClass('picture');
    imgMovie.src = _data.src_img;
    imgMovie.alt = _data.title;
    aMovie.appendChild(imgMovie);
    swiperSlide.appendChild(aMovie)
    document.querySelector('.' + _class).appendChild(swiperSlide);
}

function swiper_creation() {
    // News
    const wsMovies = new Swiper(sliderNewsMovies, {
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


    // Films slider Action
    const action = new Swiper(swiper__action, {
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

    // Films slider Animation
    const animation = new Swiper(swiper__animation, {
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

    // Films slider Aventure
    const adventure = new Swiper(swiper__adventure, {
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

    // Films slider Comédie
    const comedy = new Swiper(swiper__comedy, {
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

    // Films slider Crime
    const crime = new Swiper(swiper__crime, {
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

    // Films slider Documentaire
    const documentary = new Swiper(swiper__documentary, {
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

    // Films slider Drame
    const drama = new Swiper(swiper__drama, {
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

    // Films slider Famille
    const family = new Swiper(swiper__family, {
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

    // Films slider Fantastique
    const fantasy = new Swiper(swiper__fantasy, {
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

    // Films slider Historique
    const history = new Swiper(swiper__history, {
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

    // Films slider Horreur
    const horror = new Swiper(swiper__horror, {
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

    // Films slider Musique
    const music = new Swiper(swiper__music, {
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

    // Films slider Mystère
    const mystery = new Swiper(swiper__mystery, {
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

    // Films slider Romance
    const romance = new Swiper(swiper__romance, {
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

    // Films science Fiction
    const science_fiction = new Swiper(swiper__science_fiction, {
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

    // Films slider Téléfilm
    const tv_movie = new Swiper(swiper__tv_movie, {
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

    // Films slider Thriller
    const thriller = new Swiper(swiper__thriller, {
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

    // Films slider Guerre
    const war = new Swiper(swiper__war, {
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

    // Films slider Western
    const western = new Swiper(swiper__western, {
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

// getMovieToDiscover(url_WithPage);

export {
    idMoviesDiscover, 
    data_moviesWithUrl, 
    dataMoviesFR,
    swiper_creation,
    getGenresMovies, 
    getMovieToDiscover, 
    getMovieById, 
    getMovieBackdrops}