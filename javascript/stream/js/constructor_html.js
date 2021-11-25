import {IMG_URL} from './tmdb_v3.js'
import {department_of_movies} from './actorPage.js'

/**
 * Je construit une div avec une class
 * @param {class} className 
 * @returns {HTMLElement} div
 */
let createDivWithClass = function(className) {
    let div = document.createElement('div');
    div.setAttribute('class', className);
    return div;
}

/**
 * Je construit un a avec une class
 * @param {class} className 
 * @param {href} href Redirection vers une page
 * @returns {HTMLElement} a
 */
let createAWithClass = function(className, href, id) {
    let a = document.createElement('a');
    a.setAttribute('class', className);
    a.setAttribute('href', href);
    a.setAttribute('id', id);
    return a;
}

/**
 * Je construit un h1 avec une class
 * @param {class} className 
 * @param {Text} h1Txt Contenu du h1
 * @returns {HTMLElement} h1
 */
let createH1WithClassAndTxt = function(className, h1Txt) {
    let h1 = document.createElement('h1');
    h1.setAttribute('class', className);
    h1.textContent = h1Txt;
    return h1;
}

/**
 * Je construit un h1 avec une class
 * @param {class} className 
 * @param {Text} h1Txt Contenu du h1
 * @returns {HTMLElement} h1
 */
 let createH2WithClassAndTxt = function(className, h1Txt) {
    let h1 = document.createElement('h2');
    h1.setAttribute('class', className);
    h1.textContent = h1Txt;
    return h1;
}

/**
 * Je construit une img avec une class
 * @param {class} className 
 * @param {URL} _url Lien de l'image avec un URL
 * @param {alt} _title Nom de l'image
 * @returns {HTMLElement} img
 */
let createImgWithClassAndUrlAndTitle = function(_className, _url, _title) {
    let img = document.createElement('img');
    img.setAttribute('class', _className);
    img.setAttribute('src', _url)
    img.setAttribute('alt', _title)
    return img;
}

/**
 * 
 * @param {class} _className 
 * @param {textContent} _content Contenue de mon paragraphe
 * @returns 
 */
let createPWithClassAndContent = function(_className, _content) {
    let p = document.createElement('p');
    p.setAttribute('class', _className);
    p.textContent = _content;
    return p;
}

let createTableWithClass = function(_className) {
    let table = document.createElement('table');
    table.setAttribute('class', _className)
    return table;
}

function html__department__movie(_data) {
    const table_department_pro = createTableWithClass(_data.department);
    department_of_movies.appendChild(table_department_pro);
    html__table__header();
    for (let i = 0; i < _data.movie.lenght; i++) {
        html__table__content(_data);
    }
}

function html__table__header() {
    let tr = document.createElement('tr');
    let year = document.createElement('td');
    year.getAttribute('class', 'year');
    year.textContent = 'Année';
    let movie_names = document.createElement('td');
    movie_names.getAttribute('class', 'name');
    movie_names.textContent = 'Nom de film';
    let role = document.createElement('td');
    role.getAttribute('class', 'role');
    role.textContent = 'Rôle';
    tr.appendChild(year);
    tr.appendChild(movie_names);
    tr.appendChild(role);
    table_department_pro.appendChild(tr);
}

function html__table__content(_data) {
    let tr = document.createElement('tr');
    let year = document.createElement('td');
    year.getAttribute('class', 'movie_year');
    year.textContent = `${_data}`;
    let movie_name = document.createElement('td');
    movie_name.getAttribute('class', 'movie_name');
    let name = document.createElement('a');
    name.setAttribute('class', 'name')
    name.textContent = `${_data}`;
    let role = document.createElement('td');
    role.getAttribute('class', 'movie_role');
    role.textContent = `${_data}`;
    movie_name.appendChild(name);
    tr.appendChild(year);
    tr.appendChild(movie_name);
    tr.appendChild(role);
    table_department_pro.appendChild(tr);
}

/**
 * Je construit les élément HTML pour afficher les Images
 * @param {data} _data Data du film
 * @param {class} _class Genre du film
 */
 function html__element__img(_data, _class) {
    let swiperSlide = createDivWithClass('swiper-slide pict_container');
    let aMovie = createAWithClass('item__container', 'movies_presentation.html', _data.id);
    let imgMovie = createImgWithClassAndUrlAndTitle('picture', _data.src_img, _data.title);
    aMovie.appendChild(imgMovie);
    swiperSlide.appendChild(aMovie)
    document.querySelector('.' + _class).appendChild(swiperSlide);
}

function html__element__imgActor(_url, _data, _class) {
    let url_actor_pict = IMG_URL + _url;
    let swiperSlide = createDivWithClass('swiper-slide picture_actor_container');
    let aMovie = createAWithClass('item__container', '#', _data.id);
    let imgMovie = createImgWithClassAndUrlAndTitle('picture', url_actor_pict, _data.id);
    aMovie.appendChild(imgMovie);
    swiperSlide.appendChild(aMovie)
    document.querySelector('.' + _class).appendChild(swiperSlide);
}

// function html__actor__department(_data) {
//     let table = document.createElement('table');
//     table.setAttribute('lass', _data);
//     html__department__info()
// }

export {
    createDivWithClass, 
    createH1WithClassAndTxt,
    createH2WithClassAndTxt,
    createImgWithClassAndUrlAndTitle,
    createPWithClassAndContent,
    createAWithClass,
    html__element__img,
    html__element__imgActor,
    createTableWithClass,
    html__table__header,
    html__table__content,
    html__department__movie
}