import {
    idMoviesDiscover,
    newDataMovie,
    data_moviesWithUrl,
    data_credits_movie,
    getGenresMovies, 
    getMovieToDiscover, 
    getMoviesById, 
    getMovieBackdrops,
    getVideoMovieById,
    getCreditsMovie,
    getMovieById

} from './tmdb_v3.js'
import {
    swiper_creation, 
    swiper__constructor__withBase
} from './swiper_elements.js'
import {
    showMovie,
    showMovieCredits
} from './moviesPage_v2.js'


if (document.body.id === 'body__discover__movies') {
    /**
     * Je manipule le DOM et je construit les elements de base pour mes sliders
     */
    swiper__constructor__withBase();

    /**
     * @param {number} x Nombre de page souhaité
     */
    await getMovieToDiscover(2);

    /**
     * @param {Array} idMoviesDiscover Liste des ids de films à découvrir
     */
    await getMoviesById(idMoviesDiscover);

    /**
     * @param {Array} idMoviesDiscover Liste des ids de films à découvrir
     */
    await getMovieBackdrops(idMoviesDiscover);

    /**
     * @param {Array} data_moviesWithUrl Tableau d'objets avec
     */
    getGenresMovies(data_moviesWithUrl);

    /**
     * Je construit mes sliders avec l'API swiper
     */
    swiper_creation()

    
} else if (document.body.id === 'body__movie__info') {
    const new__movieID = sessionStorage.getItem('id');
    debugger
    await getMovieById(new__movieID);
    showMovie(newDataMovie);
    await getCreditsMovie(new__movieID);
    showMovieCredits(data_credits_movie);
}

// var id__to__view;
let a__movies = document.querySelectorAll('a');
for (let i = 0; i < a__movies.length; i++) {
    let a__movie = a__movies[i];
    const getNewIdMovie = async function() {
        
        let id__to__view = this.id;
        sessionStorage.setItem('id', id__to__view);
        debugger
    }
    a__movie.addEventListener('click', getNewIdMovie, false)
}




// document.addEventListener('click', function() {
//     let id__to__check = document.getElementsByTagName('a')[0].getAttribute('id');
//     id__to__view = id__to__check;
//     // id__to__view = e.target.id;
//     preventDefault();
//     debugger
// }, false);

// document.querySelector('a').addEventListener('click', function(e) {
//     debugger
//     id__to__view = e.target.id;
    
// })

// const controller = new AbortController();
// function checkID() {
//     let element = document.getElementsByTagName('a');
//     elementId = element[0].getAttribute('id');
//     controller.abort();
//     debugger
// }

// document.addEventListener('click', checkID, { signal: controller.signal })


// const capture = {
//     capture: true
//   };

// const a_link = document.querySelectorAll('a');

// document.addEventListener('click', captureHandler, capture);

// function captureHandler(event) {
//     debugger
//     let id__element = event.path[1].attributes.id.value;
    
//     // event.stopImmediatePropagation();
//     // console.log(elementId);
// }
