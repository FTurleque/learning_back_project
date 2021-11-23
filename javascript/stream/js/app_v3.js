import {
    idMoviesDiscover,
    newDataMovie,
    data_moviesWithUrl,
    data_credits_movie,
    actor_info,
    actor_credits,
    actor_portrait,
    getGenresMovies, 
    getMovieToDiscover, 
    getMoviesById, 
    getMovieBackdrops,
    getCreditsMovie,
    getMovieById,
    getActorDetails,
    getActorMovieCredits,
    getActorPictures
} from './tmdb_v3.js'
import {
    swiper_creation, 
    swiper__constructor__withBase,
    swiper__actor__element,
    swiper__actor__creation,
    swiper_portrait_actor
} from './swiper_elements.js'
import {
    showMovie,
    showMovieCredits
} from './moviesPage_v2.js'
import {
    picture_actor,
    caroussel_movies_actor,
    swiper_movies_actor_creator,
    actor_info_creation
} from './actorPage.js'

switch (document.body.id) {
    case 'body__discover__movies':
            /**
         * Je manipule le DOM et je construit les elements de base pour mes sliders
         */
        swiper__constructor__withBase();
    debugger
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

        break;
        
    case 'body__movie__info':
        const new__movieID = sessionStorage.getItem('id');
        await getMovieById(new__movieID);
        showMovie(newDataMovie);
        await getCreditsMovie(new__movieID);
        showMovieCredits(data_credits_movie);
        
        break;

    case 'body__actor__info':
        const actor_id = sessionStorage.getItem('id');
        swiper__actor__element(picture_actor, 'actor_item');
        await getActorDetails(11701);
        await getActorMovieCredits(11701);
        await getActorPictures(11701);
        const actor_picture_data = {
            src_img: actor_portrait
        };
        debugger
        const info_actor = {actor_picture_data, actor_info};
        swiper_portrait_actor(info_actor);
        // await getActorDetails(actor_id)
        // await getActorDetails(11701);
        // debugger
        swiper__actor__element(caroussel_movies_actor, 'movies__actor');
        swiper_movies_actor_creator(actor_credits);
        swiper__actor__creation();
        actor_info_creation(actor_info);

        break;

    default:
        break;
}

// if (document.body.id === 'body__discover__movies') {
//     /**
//      * Je manipule le DOM et je construit les elements de base pour mes sliders
//      */
//     swiper__constructor__withBase();

//     /**
//      * @param {number} x Nombre de page souhaité
//      */
//     await getMovieToDiscover(2);

//     /**
//      * @param {Array} idMoviesDiscover Liste des ids de films à découvrir
//      */
//     await getMoviesById(idMoviesDiscover);

//     /**
//      * @param {Array} idMoviesDiscover Liste des ids de films à découvrir
//      */
//     await getMovieBackdrops(idMoviesDiscover);

//     /**
//      * @param {Array} data_moviesWithUrl Tableau d'objets avec
//      */
//     getGenresMovies(data_moviesWithUrl);

//     /**
//      * Je construit mes sliders avec l'API swiper
//      */
//     swiper_creation()

    
// } else if (document.body.id === 'body__movie__info') {
//     const new__movieID = sessionStorage.getItem('id');
//     debugger
//     await getMovieById(new__movieID);
//     showMovie(newDataMovie);
//     await getCreditsMovie(new__movieID);
//     debugger
//     showMovieCredits(data_credits_movie);
//     // sessionStorage.clear();
// }

// var id__to__view;
let a__movies = document.querySelectorAll('a');
for (let i = 0; i < a__movies.length; i++) {
    let a__movie = a__movies[i];
    const getNewIdMovie = async function() {
        
        let id__to__view = this.id;
        sessionStorage.setItem('id', id__to__view);
    }
    a__movie.addEventListener('click', getNewIdMovie, false)
}
