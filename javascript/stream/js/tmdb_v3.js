import {
    html__element__img
} from './constructor_html.js'

// API Tmdb
const api_key = 'api_key=5ebb1b942f94f22ec3952d2c39768486';
const BASE_URL = 'https://api.themoviedb.org/3';
const backgroundIMG_URL = 'https://image.tmdb.org/t/p/original';
const url_discover = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + api_key;
const french = '&language=fr-FR';
const nextPage = '&page=';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?api_key=' + api_key;

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
/**
 * Je récupère une liste de tous films a découvrir depuis TMDB et j'en extrait l'ID
 * @param {number} indexMax Nombre de page(s) à récupéré
 */
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
/**
 * Je récupère les info d'un film par son id
 * @param {Array} movies_id Identifiant du film
 */
const getMoviesById = async function (movies_id) {
    for (let i = 0; i < movies_id.length; i++) {
        let movie_id  = movies_id[i];
        let url = `https://api.themoviedb.org/3/movie/${movie_id}?${api_key}${french}`;
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

let newDataMovie;
/**
 * Je récupère les info d'un film par son id
 * @param {number} movies_id Identifiant du film
 */
 const getMovieById = async function (movie_id) {
    let url = `https://api.themoviedb.org/3/movie/${movie_id}?${api_key}${french}`;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let dataMovie = await response.json();
            newDataMovie = dataMovie;
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }
}


let data_moviesWithUrl = [];
/**
 * Je récupère les images backdrops d'un film par son id
 * @param {number} movies_id Identifiant du film
 */
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
                    srcImg = backgroundIMG_URL + url__end;
                    let src_img = {
                        src_Language: 'fr',
                        src_img: srcImg
                    }
                    let object_moviesWithUrl = Object.assign(dataMoviesFR[indexMovie], src_img);
                    data_moviesWithUrl.push(object_moviesWithUrl)
                } else if (backdropsEN.length > 0) {
                    let url__end = backdropsEN[0].file_path;
                    srcImg = backgroundIMG_URL + url__end;
                    let src_img = {
                        src_Language: 'en',
                        src_img: srcImg
                    }
                    let object_moviesWithUrl = Object.assign(dataMoviesFR[indexMovie], src_img);
                    data_moviesWithUrl.push(object_moviesWithUrl)
                } else if (backdrops_noName > 0) {
                    let url__end = backdropsEN[0].file_path;
                    srcImg = backgroundIMG_URL + url__end;
                    let src_img = {
                        src_Language: 'none',
                        src_img: srcImg
                    }
                    let object_moviesWithUrl = Object.assign(dataMoviesFR[indexMovie], src_img);
                    data_moviesWithUrl.push(object_moviesWithUrl)
                } 

            } else {
                console.error('Retour du serveur : ', response.status);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

/**
 * Je partage les films selon le genre dans les sliders
 * @param {data} _data Données du film
 */
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

let video_movie = [];
/**
 * Je récupère les vidéo si elles éxistes
 * @param {number} _id Identifiant du film
 */
const getVideoMovieById = async function (_id) {
    let url = BASE_URL + '/movie/' + _id + '/videos?' + api_key + french;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            video_movie.push(data)
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }

}

// Je recherche les films portant le terme cherché soit plusieurs resultats
const getSearchMovies = async function(_keyword) {
    let keyword = _keyword;
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

let data_credits_movie = [];
/**
 * Recherche des infos sur l'équipe du film
 * @param {number} _id Identifiant du film
 */
const getCreditsMovie = async function(_movie_id) {
    let url = `https://api.themoviedb.org/3/movie/${_movie_id}/credits?${api_key}`;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            data_credits_movie.push(data);
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }
}

let actor_info;
/**
 * Je recherche les infos sur l'acteur
 * @param {number} _person_id Identifiant de l'acteur
 */
const getActorDetails = async function(_person_id) {
    let url = `https://api.themoviedb.org/3/person/${_person_id}?${api_key}&language=en-US`;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            actor_info = data;
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }
}

let actor_credits = [];
/**
 * Je recherche les crédits de l'acteur
 * @param {number} _person_id Identifiant de l'acteur
 */
const getActorMovieCredits = async function(_person_id) {
    let url = `https://api.themoviedb.org/3/person/${_person_id}/movie_credits?${api_key}&language=en-US`;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            actor_credits.push(data);
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * Je recherche les crédits combinés de l'acteur
 * @param {number} _person_id Identifiant de l'acteur
 */
const getActorCombinedCredits = async function(_person_id) {
    let url = `https://api.themoviedb.org/3/person/${person_id}/combined_credits?${api_key}&language=en-US`;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }
}

let actor_portrait;
/**
 * Je recherche les images de l'acteur
 * @param {number} _person_id Identifiant de l'acteur
 */
const getActorPictures = async function(_person_id) {
    let url = `https://api.themoviedb.org/3/person/${_person_id}/images?${api_key}`;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            actor_portrait = data.profiles;
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    backgroundIMG_URL,
    IMG_URL,
    idMoviesDiscover,
    dataMoviesFR,
    video_movie,
    data_credits_movie,
    data_moviesWithUrl,
    newDataMovie,
    actor_info,
    actor_credits,
    actor_portrait,
    getGenresMovies, 
    getMovieToDiscover, 
    getMoviesById, 
    getMovieBackdrops,
    getVideoMovieById,
    getCreditsMovie,
    getMovieById,
    getActorDetails,
    getActorMovieCredits,
    getActorPictures
}