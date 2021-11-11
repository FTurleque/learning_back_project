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

/**
 * Je construit les élément HTML pour afficher les Images
 * @param {data} _data Data du film
 * @param {class} _class Genre du film
 */
 function html__element__img(_data, _class) {
    let swiperSlide = createDivWithClass('swiper-slide');
    let aMovie = createAWithClass('item__container', 'movies_presentation.html', _data.id);
    let imgMovie = createImgWithClassAndUrlAndTitle('picture', _data.src_img, _data.title);
    aMovie.appendChild(imgMovie);
    swiperSlide.appendChild(aMovie)
    document.querySelector('.' + _class).appendChild(swiperSlide);
}

export {
    createDivWithClass, 
    createH1WithClassAndTxt,
    createH2WithClassAndTxt,
    createImgWithClassAndUrlAndTitle,
    createPWithClassAndContent,
    createAWithClass,
    html__element__img
}