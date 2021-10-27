// Manipulation HTML via DOM
const header = document.querySelector('.title_container');
const synopsis = document.querySelector('.synopsis');
const body = document.querySelector('body');
const posterContainer = document.querySelector('.poster_container');
const form = document.getElementById('form');
const search = document.getElementById('search');
const originalTitle = document.querySelector('.original_title');
const typeOfMovie = document.querySelector('.genres');
const originMovie = document.querySelector('.country');
const directingMovie = document.querySelector('.director');
const writingMovie = document.querySelector('.screenplay');
const vote = document.querySelector('.vote');
const actorsMovie = document.querySelector('#carrousel_actor_movie');
// const directing = document.querySelector('.directing');

// Création élément HTML
const titleElement = document.createElement('h1');
const pElement = document.createElement('p');
const backgroundImageMovie = document.createElement('img');
const posterElement = document.createElement('div');
const titleOriginalElement = document.createElement('a');
const typeOfMovieElement = document.createElement('a');
const countryElement = document.createElement('a');
const directingElement = document.createElement('a');
const writingElement = document.createElement('a');
const voteElement = document.createElement('a');


const API_KEY = '5ebb1b942f94f22ec3952d2c39768486';
const BASE_URL = 'https://api.themoviedb.org/3';
const backgroundIMG_URL = 'https://image.tmdb.org/t/p/original';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?api_key=' + API_KEY;
const french = '&language=fr-FR';

let keyword;

// Je recherche les films portant le terme cherché soit plusieurs resultats
const getSearchMovies = async function(_keyword) {
    keyword = _keyword;
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

let idMovie;

// Je test pour avoir un e correspondance entre l'entrée utilisateur et les titres recuperé de notre recherche
function checkTitle(_data) {
    // console.log(_data);
    let dataMovie = new Array;
    dataMovie = _data.results;
    let i = 0,
        titleOriginalMovie = '',
        titleMovie = '',
        find = false;

    // Verification sans majuscules et sans charactère spéciaux A FAIRE
    do {
        titleOriginalMovie = dataMovie[i].original_title;
        titleMovie = dataMovie[i].title;
        if (titleOriginalMovie === keyword || titleMovie === keyword) {
            // J'extrai l'id du film pour effectuer une recherche plus précise
            idMovie = dataMovie[i].id;
            getMovieById(idMovie);
            find = true;
        }
        i++
    } while (find === false);

}

// recherche du film par son id tmdb
const getMovieById = async function(_id) {
    let url = BASE_URL + '/movie/' + _id + '?api_key=' + API_KEY + french;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            // console.log(data);
            showMovie(data);
        } else {
            console.error('Retour du serveur : ', response.status);
        }

    } catch (error) {
        console.log(error);
    }
}

// Affichage des infos sur le film dans la page
function showMovie(_data) {
    // console.log(_data);
    let titleMovie = _data.title;
    let synopsisMovie = _data.overview;
    let posterMovie = _data.poster_path;
    let backgroundMovie = _data.backdrop_path;
    // let dateMovie = _data.release_date;
    let titleOriginal = _data.original_title;
    // let taglineTitle = _data.tagline;
    // let studioMovie = _data.production_compagnies;
    let voteMovie = _data.vote_average;
    
    let genresMovieData = _data.genres;
    let genresMovie = '',
        indexGenre = 0;
    genresMovieData.forEach(genre => {
        if (indexGenre < parseInt(Object.keys(genresMovieData)[Object.keys(genresMovieData).length - 1])) {
            genre = genresMovieData[indexGenre].name + ', ';
        } else {
            genre = genresMovieData[indexGenre].name;
        }
        genresMovie = genresMovie + genre;
        indexGenre++
    });

    let countriesMovieData = _data.production_countries;
    let countriesMovie = '',
        indexCountry = 0;
    countriesMovieData.forEach(country => {
        if (indexCountry < parseInt(Object.keys(countriesMovieData)[Object.keys(countriesMovieData).length - 1])) {
            country = countriesMovieData[indexCountry].iso_3166_1 + ', ';
        } else {
            country = countriesMovieData[indexCountry].iso_3166_1;
        }
        
        countriesMovie = countriesMovie + country;
        indexCountry++;
    });

    // Intégrer l'année
    titleElement.classList.add('title');
    titleElement.textContent = `${titleMovie}`;
    pElement.textContent = `${synopsisMovie}`;
    backgroundImageMovie.src = `${backgroundIMG_URL + backgroundMovie}`;
    backgroundImageMovie.classList.add('background');
    posterElement.className = 'poster';
    posterElement.style.backgroundImage = `url(${IMG_URL + posterMovie})`;
    posterElement.style.backgroundRepeat = 'no-repeat';
    posterElement.style.backgroundSize = 'contain';
    titleOriginalElement.href = '#';
    titleOriginalElement.textContent = `${titleOriginal}`;
    typeOfMovieElement.href = '#';
    typeOfMovieElement.textContent = `${genresMovie}`;
    countryElement.href = '#';
    countryElement.textContent = `${countriesMovie}`;
    voteElement.href = '#';
    voteElement.textContent = `${voteMovie} / 10`;

    header.appendChild(titleElement);
    synopsis.appendChild(pElement);
    body.appendChild(backgroundImageMovie);
    posterContainer.appendChild(posterElement);
    originalTitle.appendChild(titleOriginalElement);
    typeOfMovie.appendChild(typeOfMovieElement);
    originMovie.appendChild(countryElement);
    vote.appendChild(voteElement);

    getCreditsMovie(idMovie)
}

// Recherche des infos sur l'équipe du film
const getCreditsMovie = async function(_id) {
    let url = BASE_URL + '/movie/' + _id + '/credits?api_key=' + API_KEY + french;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            showMovieCredits(data);
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (error) {
        console.log(error);
    }
    new Carrousel(document.querySelector('#carrousel_actor_movie'), {
        slidesToScroll: 1,
        slidesVisible: 5,
        loop: false
    })
}

// Affichage des infos sur l'équipe du film
function showMovieCredits(_data) {
    let crewMovieData = _data.crew;
    let castMovieData = _data.cast;
    // console.log(castMovieData);
    // console.log(crewMovieData);
    let directorMovie = '',
        screenplayMovie = '',
        indexCrew = 0,
        indexCast = 0,
        indexDirector = 0,
        indexScreenplay = 0;

    crewMovieData.forEach(crew => {
        if (crewMovieData[indexCrew].job === 'Director') {
            let director = '';
            if (indexDirector < 1) {
                director = crewMovieData[indexCrew].name;
            } else if (indexDirector === 1) {
                director = ', ' + crewMovieData[indexCrew].name;
            }
            directorMovie = directorMovie + director;

            indexDirector++;
        } else if (crewMovieData[indexCrew].job === 'Screenplay') {
            let screenplay = '';
            if (indexScreenplay < 2) {
                screenplay = crewMovieData[indexCrew].name + ', ';
            } else if (indexScreenplay === 2) {
                screenplay = crewMovieData[indexCrew].name;
            }
            screenplayMovie = screenplayMovie + screenplay;
            indexScreenplay++;
        }
        indexCrew++;
    });

    // console.log(castMovieData);
    
    castMovieData.forEach(actor => {
        if (castMovieData[indexCast].profile_path !== null) {
            let actorPicture = document.createElement('img');
            actorPicture.src = IMG_URL + castMovieData[indexCast].profile_path;
            actorPicture.alt = castMovieData[indexCast].name;
            actorPicture.classList.add('img_actor');
            actorsMovie.appendChild(actorPicture);
        } else {

        }
        indexCast++;
    });

    directingElement.href = '#';
    directingElement.textContent = `${directorMovie}`;
    writingElement.href = '#';
    writingElement.textContent = `${screenplayMovie}`;

    directingMovie.appendChild(directingElement);
    writingMovie.appendChild(writingElement);
}

// Je recupère le titre recherché dans le formulaire pour le traiter
form.addEventListener('submit', (e) => {
    // document.getElementById("form").reset();
    e.preventDefault();
    debugger
    const searchTerm = search.value;
    if(searchTerm) {
        getSearchMovies(searchTerm)
    }else{
        console.error('Error')
    }

})

class Carrousel {
    /**
     * This callback type is called 'requestCallback' and is displayed as a global symbol.
     * 
     * @callback    moveCallback
     * @param {number} index 
     */


    /**
     * @param {HTMLElement} element 
     * @param {Object} options 
     * @param {Object} [options.slidesToScroll=1]  Nombre d'élément a faire défiler
     * @param {Object} [options.slidesVisible=1]  Nombre d'élément visible
     * @param {boolean} [options.loop=false]  Doit-on boucler en fin de carousel
     */
    constructor(element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false
        }, options)
        let children = [].slice.call(element.children);
        this.currentItem = 0;
        this.root = this.createDivWithClass('carrousel_actors');
        this.container = this.createDivWithClass('carrousel__container');
        this.root.appendChild(this.container);
        this.element.appendChild(this.root);
        this.moveCallbacks = [];
        this.items = [];
        let imgIndex = 0;
        children.forEach(child => {
            this.items.push(child);
            if (imgIndex < this.options.slidesVisible) {
                this.placeElementsToCarousel('carrousel__item', child);
            } else {
                this.placeElementsToCarousel('carrousel__item img--hidden', child);
            }
            imgIndex++;
        });
        this.createNavigation();
        this.moveCallbacks.forEach(cb => cb(0));
    }

    placeElementsToCarousel(className, _child) {
        let item = this.createDivWithClass(className);
        item.style.maxHeight = "100%";
        let itemA = this.createAWithClass('carrousel__item item__img');
        item.appendChild(itemA);
        let itemName = this.createH2WithClass('img__name');
        itemName.textContent = `${_child.alt}`;
        itemA.appendChild(_child);
        itemA.appendChild(itemName);
        this.container.appendChild(item);
    }


    createNavigation() {
        let nextButton = this.createDivWithClass('carrousel__next');
        let prevButton = this.createDivWithClass('carrousel__prev');
        this.root.appendChild(nextButton);
        this.root.appendChild(prevButton);
        nextButton.addEventListener('click', this.next.bind(this));
        prevButton.addEventListener('click', this.prev.bind(this));
        if (this.options.loop === true) {
            return;
        }
        this.onMove(index => {
            if (index === 0) {
                nextButton.classList.add('carrousel__next--hidden');
            } else {
                nextButton.classList.remove('carrousel__next--hidden');
            }
            if (this.items[this.currentItem + this.options.slidesVisible] === undefined) {
                prevButton.classList.add('carrousel__prev--hidden');
            } else {
                prevButton.classList.remove('carrousel__prev--hidden');
            }
        })
    }
    
    next() {
        this.goToItem(this.currentItem - this.options.slidesToScroll);
    }

    prev() {
        this.goToItem(this.currentItem + this.options.slidesToScroll);
    }

    /**
     * Déplace le carousel vers l'élément ciblé
     * @param {number} index
     */
    goToItem(index) {
        if (this.currentItem < index) {
            // Ajouter la class img--hidden au 1er enfant
            this.container.childNodes[index - 1].classList.add('img--hidden');
            // Supprimer la class img--hidden pour slidesVisible + index
            this.container.childNodes[index + this.options.slidesVisible - 1].classList.remove('img--hidden');
        } else {
            // Ajouter la class img--hidden au 1er enfant
            this.container.childNodes[index + this.options.slidesVisible].classList.add('img--hidden');
            // Supprimer la class img--hidden pour slidesVisible + index
            this.container.childNodes[index].classList.remove('img--hidden');
        }
        this.currentItem = index;
        this.moveCallbacks.forEach(cb => cb(index));
    }

    /**
     * 
     * @param {moveCallback} cb 
     */
    onMove(cb) {
        this.moveCallbacks.push(cb);
    }

    /**
    * 
    * @param {sting} className 
    * @returns {HTMLElement}
    */
    createDivWithClass(className) {
        let div = document.createElement('div');
        div.setAttribute('class', className);
        return div;
    }

    createAWithClass(className) {
        let a = document.createElement('a');
        a.setAttribute('class', className);
        return a;
    }

    createH2WithClass(className) {
        let h2 = document.createElement('h2');
        h2.setAttribute('class', className);
        return h2;
    }
}

