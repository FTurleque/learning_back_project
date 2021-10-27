import {
    createDivWithClass, 
    createAWithClass, 
    createH1WithClass, 
    createImgWithClass} from './constructor_html.js'
import {
    idMoviesDiscover, 
    data_moviesWithUrl, 
    dataMoviesFR,
    swiper_creation,
    getGenresMovies, 
    getMovieToDiscover, getMovieById, getMovieBackdrops} from './tmdb_v3.js'

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
const title_action = createH1WithClass('title');
const action__nextMovie = createDivWithClass('swiper-button-next');
const action__prevMovie = createDivWithClass('swiper-button-prev');
title_action.textContent = 'Action';
swiper__action.appendChild(title_action);
swiper__action.appendChild(wrapper__action);
swiper__action.appendChild(action__nextMovie);
swiper__action.appendChild(action__prevMovie);

// Slider Animation
const wrapper__animation = createDivWithClass('swiper-wrapper animation');
const title_animation = createH1WithClass('title');
const animation__nextMovie = createDivWithClass('swiper-button-next');
const animation__prevMovie = createDivWithClass('swiper-button-prev');
title_animation.textContent = 'Animation';
swiper__animation.appendChild(title_animation);
swiper__animation.appendChild(wrapper__animation);
swiper__animation.appendChild(animation__nextMovie);
swiper__animation.appendChild(animation__prevMovie);

// Slider Aventure
const wrapper__adventure = createDivWithClass('swiper-wrapper adventure');
const title_adventure = createH1WithClass('title');
const adventure__nextMovie = createDivWithClass('swiper-button-next');
const adventure__prevMovie = createDivWithClass('swiper-button-prev');
title_adventure.textContent = 'Aventure';
swiper__adventure.appendChild(title_adventure);
swiper__adventure.appendChild(wrapper__adventure);
swiper__adventure.appendChild(adventure__nextMovie);
swiper__adventure.appendChild(adventure__prevMovie);

// Slider Comédie
const wrapper__comedy = createDivWithClass('swiper-wrapper comedy');
const title_comedy = createH1WithClass('title');
const comedy__nextMovie = createDivWithClass('swiper-button-next');
const comedy__prevMovie = createDivWithClass('swiper-button-prev');
title_comedy.textContent = 'Comédie';
swiper__comedy.appendChild(title_comedy);
swiper__comedy.appendChild(wrapper__comedy);
swiper__comedy.appendChild(comedy__nextMovie);
swiper__comedy.appendChild(comedy__prevMovie);

// Slider Crime
const wrapper__crime = createDivWithClass('swiper-wrapper crime');
const title_crime = createH1WithClass('title');
const crime__nextMovie = createDivWithClass('swiper-button-next');
const crime__prevMovie = createDivWithClass('swiper-button-prev');
title_crime.textContent = 'Crime';
swiper__crime.appendChild(title_crime);
swiper__crime.appendChild(wrapper__crime);
swiper__crime.appendChild(crime__nextMovie);
swiper__crime.appendChild(crime__prevMovie);

// Slider Documentaire
const wrapper__documentary = createDivWithClass('swiper-wrapper documentary');
const title_documentary = createH1WithClass('title');
const documentary__nextMovie = createDivWithClass('swiper-button-next');
const documentary__prevMovie = createDivWithClass('swiper-button-prev');
title_documentary.textContent = 'Documentaire';
swiper__documentary.appendChild(title_documentary);
swiper__documentary.appendChild(wrapper__documentary);
swiper__documentary.appendChild(documentary__nextMovie);
swiper__documentary.appendChild(documentary__prevMovie);

// Slider Drame
const wrapper__drama = createDivWithClass('swiper-wrapper drama');
const title_drama = createH1WithClass('title');
const drama__nextMovie = createDivWithClass('swiper-button-next');
const drama__prevMovie = createDivWithClass('swiper-button-prev');
title_drama.textContent = 'Drame';
swiper__drama.appendChild(title_drama);
swiper__drama.appendChild(wrapper__drama);
swiper__drama.appendChild(drama__nextMovie);
swiper__drama.appendChild(drama__prevMovie);

// Slider Famille
const wrapper__family = createDivWithClass('swiper-wrapper family');
const title_family = createH1WithClass('title');
const family__nextMovie = createDivWithClass('swiper-button-next');
const family__prevMovie = createDivWithClass('swiper-button-prev');
title_family.textContent = 'Famille';
swiper__family.appendChild(title_family);
swiper__family.appendChild(wrapper__family);
swiper__family.appendChild(family__nextMovie);
swiper__family.appendChild(family__prevMovie);

// Slider Fantastique
const wrapper__fantasy = createDivWithClass('swiper-wrapper fantasy');
const title_fantasy = createH1WithClass('title');
const fantasy__nextMovie = createDivWithClass('swiper-button-next');
const fantasy__prevMovie = createDivWithClass('swiper-button-prev');
title_fantasy.textContent = 'Fantastique';
swiper__fantasy.appendChild(title_fantasy);
swiper__fantasy.appendChild(wrapper__fantasy);
swiper__fantasy.appendChild(fantasy__nextMovie);
swiper__fantasy.appendChild(fantasy__prevMovie);

// Slider Historique
const wrapper__history = createDivWithClass('swiper-wrapper history');
const title_history = createH1WithClass('title');
const history__nextMovie = createDivWithClass('swiper-button-next');
const history__prevMovie = createDivWithClass('swiper-button-prev');
title_history.textContent = 'Historique';
swiper__history.appendChild(title_history);
swiper__history.appendChild(wrapper__history);
swiper__history.appendChild(history__nextMovie);
swiper__history.appendChild(history__prevMovie);

// Slider Horreur
const wrapper__horror = createDivWithClass('swiper-wrapper horror');
const title_horror = createH1WithClass('title');
const horror__nextMovie = createDivWithClass('swiper-button-next');
const horror__prevMovie = createDivWithClass('swiper-button-prev');
title_horror.textContent = 'Horreur';
swiper__horror.appendChild(title_horror);
swiper__horror.appendChild(wrapper__horror);
swiper__horror.appendChild(horror__nextMovie);
swiper__horror.appendChild(horror__prevMovie);

// Slider Musique
const wrapper__music = createDivWithClass('swiper-wrapper music');
const title_music = createH1WithClass('title');
const music__nextMovie = createDivWithClass('swiper-button-next');
const music__prevMovie = createDivWithClass('swiper-button-prev');
title_music.textContent = 'Musique';
swiper__music.appendChild(title_music);
swiper__music.appendChild(wrapper__music);
swiper__music.appendChild(music__nextMovie);
swiper__music.appendChild(music__prevMovie);

// Slider Mystère
const wrapper__mystery = createDivWithClass('swiper-wrapper mystery');
const title_mystery = createH1WithClass('title');
const mystery__nextMovie = createDivWithClass('swiper-button-next');
const mystery__prevMovie = createDivWithClass('swiper-button-prev');
title_mystery.textContent = 'Mystère';
swiper__mystery.appendChild(title_mystery);
swiper__mystery.appendChild(wrapper__mystery);
swiper__mystery.appendChild(mystery__nextMovie);
swiper__mystery.appendChild(mystery__prevMovie);

// Slider Romance
const wrapper__romance = createDivWithClass('swiper-wrapper romance');
const title_romance = createH1WithClass('title');
const romance__nextMovie = createDivWithClass('swiper-button-next');
const romance__prevMovie = createDivWithClass('swiper-button-prev');
title_romance.textContent = 'Romance';
swiper__romance.appendChild(title_romance);
swiper__romance.appendChild(wrapper__romance);
swiper__romance.appendChild(romance__nextMovie);
swiper__romance.appendChild(romance__prevMovie);

// Slider Science Fiction
const wrapper__science_fiction = createDivWithClass('swiper-wrapper science_fiction');
const title_science_fiction = createH1WithClass('title');
const science_fiction__nextMovie = createDivWithClass('swiper-button-next');
const science_fiction__prevMovie = createDivWithClass('swiper-button-prev');
title_science_fiction.textContent = 'Science Fiction';
swiper__science_fiction.appendChild(title_science_fiction);
swiper__science_fiction.appendChild(wrapper__science_fiction);
swiper__science_fiction.appendChild(science_fiction__nextMovie);
swiper__science_fiction.appendChild(science_fiction__prevMovie);

// Slider Téléfilm
const wrapper__tv_movie = createDivWithClass('swiper-wrapper tv_movie');
const title_tv_movie = createH1WithClass('title');
const tv_movie__nextMovie = createDivWithClass('swiper-button-next');
const tv_movie__prevMovie = createDivWithClass('swiper-button-prev');
title_tv_movie.textContent = 'Téléfilm';
swiper__tv_movie.appendChild(title_tv_movie);
swiper__tv_movie.appendChild(wrapper__tv_movie);
swiper__tv_movie.appendChild(tv_movie__nextMovie);
swiper__tv_movie.appendChild(tv_movie__prevMovie);

// Slider Thriller
const wrapper__thriller = createDivWithClass('swiper-wrapper thriller');
const title_thriller = createH1WithClass('title');
const thriller__nextMovie = createDivWithClass('swiper-button-next');
const thriller__prevMovie = createDivWithClass('swiper-button-prev');
title_thriller.textContent = 'Thriller';
swiper__thriller.appendChild(title_thriller);
swiper__thriller.appendChild(wrapper__thriller);
swiper__thriller.appendChild(thriller__nextMovie);
swiper__thriller.appendChild(thriller__prevMovie);

// Slider Guerre
const wrapper__war = createDivWithClass('swiper-wrapper war');
const title_war = createH1WithClass('title');
const war__nextMovie = createDivWithClass('swiper-button-next');
const war__prevMovie = createDivWithClass('swiper-button-prev');
title_war.textContent = 'Guerre';
swiper__war.appendChild(title_war);
swiper__war.appendChild(wrapper__war);
swiper__war.appendChild(war__nextMovie);
swiper__war.appendChild(war__prevMovie);

// Slider Western
const wrapper__western  = createDivWithClass('swiper-wrapper western');
const title_western = createH1WithClass('title');
const western__nextMovie = createDivWithClass('swiper-button-next');
const western__prevMovie = createDivWithClass('swiper-button-prev');
title_western.textContent = 'Western';
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
