const api_key = 'api_key=5ebb1b942f94f22ec3952d2c39768486';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const french = '&language=fr-FR';
const url_discover = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + api_key + french;

// Je récupère une liste de films a découvrir depuis TMDB
const getMovieToDiscover = async function(url) {
    try {
        let response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }
    
}

// Je récupère les info d'un film par son id
const getMovieById = async function(_id) {
    let url = BASE_URL + '/movie/' + _id + '?' + api_key;
    try {
        let response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }
    
}

// Je récupère les images backdrops d'un film par son id
const getMovieBackdrops = async function(_id) {
    let url = BASE_URL + '/movie/' + _id + '/images?' + api_key + french;
    try {
        let response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }
}

const getVideoMovieById = async function(_id) {
    let url = BASE_URL + '/movie/' + _id + '/videos?' + api_key + french;
    try {
        let response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }

}


export {getVideoMovieById, getMovieById, getMovieBackdrops, getMovieToDiscover, url_discover}