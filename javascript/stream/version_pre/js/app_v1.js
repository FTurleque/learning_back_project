import {
    createDivWithClass, 
    createH1WithClassAndTxt
} from './constructor_html.js'
import {
    idMoviesDiscover, 
    data_moviesWithUrl, 
    swiper_creation,
    getGenresMovies, 
    getMovieToDiscover, 
    getMovieById, 
    getMovieBackdrops
} from './tmdb_v3.js'

debugger


// Manipulation du DOM
const sliderNewsMovies = document.querySelector('.dicover');
const swiper__action = document.querySelector('.actionMovie');
const swiper__animation = document.querySelector('.animationMovie');
const swiper__adventure = document.querySelector('.adventureMovie');
const swiper__comedy = document.querySelector('.comedyMovie');
const swiper__crime = document.querySelector('.crimeMovie');
const swiper__documentary = document.querySelector('.documentaryMovie');
const swiper__drama = document.querySelector('.dramaMovie');
const swiper__family = document.querySelector('.familyMovie');
const swiper__fantasy = document.querySelector('.fantasyMovie');
const swiper__history = document.querySelector('.historyMovie');
const swiper__horror = document.querySelector('.horrorMovie');
const swiper__music = document.querySelector('.musicMovie');
const swiper__mystery = document.querySelector('.mysteryMovie');
const swiper__romance = document.querySelector('.romanceMovie');
const swiper__science_fiction = document.querySelector('.science_fictionMovie');
const swiper__tv_movie = document.querySelector('.tv_movieMovie');
const swiper__thriller = document.querySelector('.thrillerMovie');
const swiper__war = document.querySelector('.warMovie');
const swiper__western = document.querySelector('.westernMovie');

// Création d'éléments HTML
// Slider Action
const wrapper__action = createDivWithClass('swiper-wrapper action');
const title_action = createH1WithClassAndTxt('title', 'Action');
const action__nextMovie = createDivWithClass('swiper-button-next');
const action__prevMovie = createDivWithClass('swiper-button-prev');
swiper__action.appendChild(title_action);
swiper__action.appendChild(wrapper__action);
swiper__action.appendChild(action__nextMovie);
swiper__action.appendChild(action__prevMovie);

// Slider Animation
const wrapper__animation = createDivWithClass('swiper-wrapper animation');
const title_animation = createH1WithClassAndTxt('title', 'Animation');
const animation__nextMovie = createDivWithClass('swiper-button-next');
const animation__prevMovie = createDivWithClass('swiper-button-prev');
swiper__animation.appendChild(title_animation);
swiper__animation.appendChild(wrapper__animation);
swiper__animation.appendChild(animation__nextMovie);
swiper__animation.appendChild(animation__prevMovie);

// Slider Aventure
const wrapper__adventure = createDivWithClass('swiper-wrapper adventure');
const title_adventure = createH1WithClassAndTxt('title', 'Aventure');
const adventure__nextMovie = createDivWithClass('swiper-button-next');
const adventure__prevMovie = createDivWithClass('swiper-button-prev');
swiper__adventure.appendChild(title_adventure);
swiper__adventure.appendChild(wrapper__adventure);
swiper__adventure.appendChild(adventure__nextMovie);
swiper__adventure.appendChild(adventure__prevMovie);

// Slider Comédie
const wrapper__comedy = createDivWithClass('swiper-wrapper comedy');
const title_comedy = createH1WithClassAndTxt('title', 'Comédie');
const comedy__nextMovie = createDivWithClass('swiper-button-next');
const comedy__prevMovie = createDivWithClass('swiper-button-prev');
swiper__comedy.appendChild(title_comedy);
swiper__comedy.appendChild(wrapper__comedy);
swiper__comedy.appendChild(comedy__nextMovie);
swiper__comedy.appendChild(comedy__prevMovie);

// Slider Crime
const wrapper__crime = createDivWithClass('swiper-wrapper crime');
const title_crime = createH1WithClassAndTxt('title', 'Crime');
const crime__nextMovie = createDivWithClass('swiper-button-next');
const crime__prevMovie = createDivWithClass('swiper-button-prev');
swiper__crime.appendChild(title_crime);
swiper__crime.appendChild(wrapper__crime);
swiper__crime.appendChild(crime__nextMovie);
swiper__crime.appendChild(crime__prevMovie);

// Slider Documentaire
const wrapper__documentary = createDivWithClass('swiper-wrapper documentary');
const title_documentary = createH1WithClassAndTxt('title', 'Documentaire');
const documentary__nextMovie = createDivWithClass('swiper-button-next');
const documentary__prevMovie = createDivWithClass('swiper-button-prev');
swiper__documentary.appendChild(title_documentary);
swiper__documentary.appendChild(wrapper__documentary);
swiper__documentary.appendChild(documentary__nextMovie);
swiper__documentary.appendChild(documentary__prevMovie);

// Slider Drame
const wrapper__drama = createDivWithClass('swiper-wrapper drama');
const title_drama = createH1WithClassAndTxt('title', 'Drame');
const drama__nextMovie = createDivWithClass('swiper-button-next');
const drama__prevMovie = createDivWithClass('swiper-button-prev');
swiper__drama.appendChild(title_drama);
swiper__drama.appendChild(wrapper__drama);
swiper__drama.appendChild(drama__nextMovie);
swiper__drama.appendChild(drama__prevMovie);

// Slider Famille
const wrapper__family = createDivWithClass('swiper-wrapper family');
const title_family = createH1WithClassAndTxt('title', 'Famille');
const family__nextMovie = createDivWithClass('swiper-button-next');
const family__prevMovie = createDivWithClass('swiper-button-prev');
swiper__family.appendChild(title_family);
swiper__family.appendChild(wrapper__family);
swiper__family.appendChild(family__nextMovie);
swiper__family.appendChild(family__prevMovie);

// Slider Fantastique
const wrapper__fantasy = createDivWithClass('swiper-wrapper fantasy');
const title_fantasy = createH1WithClassAndTxt('title', 'Fantastique');
const fantasy__nextMovie = createDivWithClass('swiper-button-next');
const fantasy__prevMovie = createDivWithClass('swiper-button-prev');
swiper__fantasy.appendChild(title_fantasy);
swiper__fantasy.appendChild(wrapper__fantasy);
swiper__fantasy.appendChild(fantasy__nextMovie);
swiper__fantasy.appendChild(fantasy__prevMovie);

// Slider Historique
const wrapper__history = createDivWithClass('swiper-wrapper history');
const title_history = createH1WithClassAndTxt('title', 'Historique');
const history__nextMovie = createDivWithClass('swiper-button-next');
const history__prevMovie = createDivWithClass('swiper-button-prev');
swiper__history.appendChild(title_history);
swiper__history.appendChild(wrapper__history);
swiper__history.appendChild(history__nextMovie);
swiper__history.appendChild(history__prevMovie);

// Slider Horreur
const wrapper__horror = createDivWithClass('swiper-wrapper horror');
const title_horror = createH1WithClassAndTxt('title', 'Horreur');
const horror__nextMovie = createDivWithClass('swiper-button-next');
const horror__prevMovie = createDivWithClass('swiper-button-prev');
swiper__horror.appendChild(title_horror);
swiper__horror.appendChild(wrapper__horror);
swiper__horror.appendChild(horror__nextMovie);
swiper__horror.appendChild(horror__prevMovie);

// Slider Musique
const wrapper__music = createDivWithClass('swiper-wrapper music');
const title_music = createH1WithClassAndTxt('title', 'Musique');
const music__nextMovie = createDivWithClass('swiper-button-next');
const music__prevMovie = createDivWithClass('swiper-button-prev');
swiper__music.appendChild(title_music);
swiper__music.appendChild(wrapper__music);
swiper__music.appendChild(music__nextMovie);
swiper__music.appendChild(music__prevMovie);

// Slider Mystère
const wrapper__mystery = createDivWithClass('swiper-wrapper mystery');
const title_mystery = createH1WithClassAndTxt('title', 'Mystère');
const mystery__nextMovie = createDivWithClass('swiper-button-next');
const mystery__prevMovie = createDivWithClass('swiper-button-prev');
swiper__mystery.appendChild(title_mystery);
swiper__mystery.appendChild(wrapper__mystery);
swiper__mystery.appendChild(mystery__nextMovie);
swiper__mystery.appendChild(mystery__prevMovie);

// Slider Romance
const wrapper__romance = createDivWithClass('swiper-wrapper romance');
const title_romance = createH1WithClassAndTxt('title', 'Romance');
const romance__nextMovie = createDivWithClass('swiper-button-next');
const romance__prevMovie = createDivWithClass('swiper-button-prev');
swiper__romance.appendChild(title_romance);
swiper__romance.appendChild(wrapper__romance);
swiper__romance.appendChild(romance__nextMovie);
swiper__romance.appendChild(romance__prevMovie);

// Slider Science Fiction
const wrapper__science_fiction = createDivWithClass('swiper-wrapper science_fiction');
const title_science_fiction = createH1WithClassAndTxt('title', 'Science Fiction');
const science_fiction__nextMovie = createDivWithClass('swiper-button-next');
const science_fiction__prevMovie = createDivWithClass('swiper-button-prev');
swiper__science_fiction.appendChild(title_science_fiction);
swiper__science_fiction.appendChild(wrapper__science_fiction);
swiper__science_fiction.appendChild(science_fiction__nextMovie);
swiper__science_fiction.appendChild(science_fiction__prevMovie);

// Slider Téléfilm
const wrapper__tv_movie = createDivWithClass('swiper-wrapper tv_movie');
const title_tv_movie = createH1WithClassAndTxt('title', 'Téléfilm');
const tv_movie__nextMovie = createDivWithClass('swiper-button-next');
const tv_movie__prevMovie = createDivWithClass('swiper-button-prev');
swiper__tv_movie.appendChild(title_tv_movie);
swiper__tv_movie.appendChild(wrapper__tv_movie);
swiper__tv_movie.appendChild(tv_movie__nextMovie);
swiper__tv_movie.appendChild(tv_movie__prevMovie);

// Slider Thriller
const wrapper__thriller = createDivWithClass('swiper-wrapper thriller');
const title_thriller = createH1WithClassAndTxt('title', 'Thriller');
const thriller__nextMovie = createDivWithClass('swiper-button-next');
const thriller__prevMovie = createDivWithClass('swiper-button-prev');
swiper__thriller.appendChild(title_thriller);
swiper__thriller.appendChild(wrapper__thriller);
swiper__thriller.appendChild(thriller__nextMovie);
swiper__thriller.appendChild(thriller__prevMovie);

// Slider Guerre
const wrapper__war = createDivWithClass('swiper-wrapper war');
const title_war = createH1WithClassAndTxt('title', 'Guerre');
const war__nextMovie = createDivWithClass('swiper-button-next');
const war__prevMovie = createDivWithClass('swiper-button-prev');
swiper__war.appendChild(title_war);
swiper__war.appendChild(wrapper__war);
swiper__war.appendChild(war__nextMovie);
swiper__war.appendChild(war__prevMovie);

// Slider Western
const wrapper__western  = createDivWithClass('swiper-wrapper western');
const title_western = createH1WithClassAndTxt('title', 'Western');
const western__nextMovie = createDivWithClass('swiper-button-next');
const western__prevMovie = createDivWithClass('swiper-button-prev');
swiper__western.appendChild(title_western);
swiper__western.appendChild(wrapper__western);
swiper__western.appendChild(western__nextMovie);
swiper__western.appendChild(western__prevMovie);


/**
 * Variables : idMoviesDiscover, dataMoviesFR, 
 * getMovieToDiscover, 
 * getMovieById,
 * getMovieBackdrops,
 * getGenresMovies,
 * swiper_creation} 
 * from './tmdb_v3.js'
 */
// Nombre de page souhaité
await getMovieToDiscover(2);
await getMovieById(idMoviesDiscover);
await getMovieBackdrops(idMoviesDiscover);
getGenresMovies(data_moviesWithUrl);
swiper_creation()

export {
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
}
