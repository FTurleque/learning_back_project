    // Elements constructor
    const mainElement = document.createElement('main');
    const imgElementBody = document.createElement('img');
    const headerElement = document.createElement('header');
    const h1Element = document.createElement('h1');
    const sectionInfoElement = document.createElement('section');
    const asideElement = document.createElement('aside');
    const posterElement = document.createElement('div');
    const carouselElement = document.createElement('div');
    const pictureActorElement1 = document.createElement('div');
    const actorElement1 = document.createElement('img');
    const pictureActorElement2 = document.createElement('div');
    const actorElement2 = document.createElement('img');
    const pictureActorElement3 = document.createElement('div');
    const actorElement3 = document.createElement('img');
    const pictureActorElement4 = document.createElement('div');
    const actorElement4 = document.createElement('img');
    const pictureActorElement5 = document.createElement('div');
    const actorElement5 = document.createElement('img');
    const synopsisElement = document.createElement('article');
    const pSynopsisElement = document.createElement('p');
    const typeOfMovieElement = document.createElement('article');
    const descriptionElement = document.createElement('ol');
    const lidescriptionElement1 = document. createElement('li');
    const strongElement1 = document.createElement('strong');
    const aElement1 = document.createElement('a');
    const lidescriptionElement2 = document. createElement('li');
    const strongElement2 = document.createElement('strong');
    const aElement2 = document.createElement('a');
    const lidescriptionElement3 = document. createElement('li');
    const strongElement3 = document.createElement('strong');
    const aElement3 = document.createElement('a');
    const lidescriptionElement4 = document. createElement('li');
    const strongElement4 = document.createElement('strong');
    const aElement4 = document.createElement('a');
    const lidescriptionElement5 = document. createElement('li');
    const strongElement5 = document.createElement('strong');
    const aElement5 = document.createElement('a');
    const lidescriptionElement6 = document. createElement('li');
    const strongElement6 = document.createElement('strong');
    const aElement6 = document.createElement('a');
    const lidescriptionElement7 = document. createElement('li');
    const strongElement7 = document.createElement('strong');
    const aElement7 = document.createElement('a');
    const navigationElement = document.createElement('div');
    const btnElement1 = document.createElement('button');
    const buttonElement2 = document.createElement('button');
    const buttonElement3 = document.createElement('button');
    const btnElement4 = document.createElement('button');

    

    // Initialization
    mainElement.id = 'winApp';
    imgElementBody.src = `./img/background_img/tcf8WL3Lf1nWkOOT7SdhbS2kU6E.jpg`;
    headerElement.className = 'title_container';
    sectionInfoElement.className = 'info_movie';
    
window.onload = function() {

    // HTML placement
    document.body.appendChild(mainElement);
    mainElement.appendChild(headerElement);
    mainElement.appendChild(sectionInfoElement);

    addTitle();
    addPoster();
    addCarouselActor();
    addSynopsis();
    addTypeOfMovie();
    addNavigationMovie();

    document.body.appendChild(imgElementBody);
}

function addTitle() {
    h1Element.className = 'title';
    h1Element.textContent = `Spectre 2015`;

    headerElement.appendChild(h1Element);
}

function addPoster() {
    asideElement.className = 'poster_container';
    posterElement.className = 'poster';
    posterElement.style.backgroundImage = `url('./img/007 SPECTRE (2015).jpg')`;
    posterElement.style.backgroundRepeat = 'no-repeat';
    posterElement.style.backgroundSize = 'contain';
    
    sectionInfoElement.appendChild(asideElement);
    asideElement.appendChild(posterElement);
}

function addCarouselActor() {
    carouselElement.className = 'carousel_actor_movie';
    pictureActorElement1.className = 'picture_actor1 picture_actor';
    actorElement1.src = `./img/arctors/7JAUieStGsHZAy6ed2WuFy4CJjm.jpg`;
    actorElement1.className = 'img_actor';
    actorElement1.alt = 'actor';
    pictureActorElement2.className = 'picture_actor2 picture_actor';
    actorElement2.src = `./img/arctors/r3A7ev7QkjOGocVn3kQrJ0eOouk.jpg`;
    actorElement2.className = 'img_actor';
    actorElement2.alt = 'actor';
    pictureActorElement3.className = 'picture_actor3 picture_actor';
    actorElement3.src = `./img/arctors/dpX6WMQjJDD93YYaC9Wd6tgucuZ.jpg`;
    actorElement3.className = 'img_actor';
    actorElement3.alt = 'actor';
    pictureActorElement4.className = 'picture_actor4 picture_actor';
    actorElement4.src = `./img/arctors/mLnyw6k4K6tlBZF3JdvFMmq2NmZ.jpg`;
    actorElement4.className = 'img_actor';
    actorElement4.alt = 'actor';
    pictureActorElement5.className = 'picture_actor5 picture_actor';
    actorElement5.src = `./img/arctors/sXTP6wlqIDz1tDGLU3DFbklSTpq.jpg`;
    actorElement5.className = 'img_actor';
    actorElement5.alt = 'actor';

    sectionInfoElement.appendChild(carouselElement);
    carouselElement.appendChild(pictureActorElement1);
    pictureActorElement1.appendChild(actorElement1);
    carouselElement.appendChild(pictureActorElement2);
    pictureActorElement2.appendChild(actorElement2);
    carouselElement.appendChild(pictureActorElement3);
    pictureActorElement3.appendChild(actorElement3);
    carouselElement.appendChild(pictureActorElement4);
    pictureActorElement4.appendChild(actorElement4);
    carouselElement.appendChild(pictureActorElement5);
    pictureActorElement5.appendChild(actorElement5);

}

function addSynopsis() {
    synopsisElement.className = 'synopsis';
    pSynopsisElement.textContent = `Un message cryptique venu tout droit de son passé pousse Bond à enquêter sur une sinistre organisation. Alors que M affronte une tempête politique pour que les services secrets puissentcontinuer à opérer, Bond s’échine à révéler la terrible vérité derrière… le Spectre.`;

    sectionInfoElement.appendChild(synopsisElement);
    synopsisElement.appendChild(pSynopsisElement);

}

function addTypeOfMovie() {
    typeOfMovieElement.className = 'typeOfMovie';
    descriptionElement.className = 'description';

    lidescriptionElement1.className = 'descriptionList';
    strongElement1.className = 'firstChildList';
    strongElement1.textContent = 'Titre original :';
    aElement1.className = '';
    aElement1.textContent = `Spectre`;

    lidescriptionElement2.className = 'descriptionList';
    strongElement2.className = 'firstChildList';
    strongElement2.textContent = 'Réalisateur :';
    aElement2.className = '';
    aElement2.textContent = `Sam Mendes`;

    lidescriptionElement3.className = 'descriptionList';
    strongElement3.className = 'firstChildList';
    strongElement3.textContent = 'Scénariste :';
    aElement3.className = '';
    aElement3.textContent = `John Logan, Neal Purvis`;

    lidescriptionElement4.className = 'descriptionList';
    strongElement4.className = 'firstChildList';
    strongElement4.textContent = 'Notation :';
    aElement4.className = '';
    aElement4.textContent = ``;

    lidescriptionElement5.className = 'descriptionList';
    strongElement5.className = 'firstChildList';
    strongElement5.textContent = 'Genre :';
    aElement5.className = '';
    aElement5.textContent = `Action, Aventure, Thriller`;

    lidescriptionElement6.className = 'descriptionList';
    strongElement6.className = 'firstChildList';
    strongElement6.textContent = 'Pays :';
    aElement6.className = '';
    aElement6.textContent = `USA`;

    lidescriptionElement7.className = 'descriptionList';
    strongElement7.className = 'firstChildList';
    strongElement7.textContent = 'Studio :';
    aElement7.className = '';
    aElement7.textContent = ``;

    sectionInfoElement.appendChild(typeOfMovieElement);
    typeOfMovieElement.appendChild(descriptionElement);
    descriptionElement.appendChild(lidescriptionElement1);
    lidescriptionElement1.appendChild(strongElement1);
    lidescriptionElement1.appendChild(aElement1);
    descriptionElement.appendChild(lidescriptionElement2);
    lidescriptionElement2.appendChild(strongElement2);
    lidescriptionElement2.appendChild(aElement2);
    descriptionElement.appendChild(lidescriptionElement3);
    lidescriptionElement3.appendChild(strongElement3);
    lidescriptionElement3.appendChild(aElement3);
    descriptionElement.appendChild(lidescriptionElement4);
    lidescriptionElement4.appendChild(strongElement4);
    lidescriptionElement4.appendChild(aElement4);
    descriptionElement.appendChild(lidescriptionElement5);
    lidescriptionElement5.appendChild(strongElement5);
    lidescriptionElement5.appendChild(aElement5);
    descriptionElement.appendChild(lidescriptionElement6);
    lidescriptionElement6.appendChild(strongElement6);
    lidescriptionElement6.appendChild(aElement6);
    descriptionElement.appendChild(lidescriptionElement7);
    lidescriptionElement7.appendChild(strongElement7);
    lidescriptionElement7.appendChild(aElement7);

}

function addNavigationMovie() {

    navigationElement.className = 'nav_movie';
    btnElement1.textContent = 'Lecture';
    btnElement1.className = 'btn1 btn';
    buttonElement2.textContent = 'Bande-annonce';
    buttonElement2.className = 'btn2 btn';
    buttonElement3.textContent = 'Ma notation';
    buttonElement3.className = 'btn3 btn';
    btnElement4.textContent = 'Même réalisateur';
    btnElement4.className = 'btn4 btn';

    sectionInfoElement.appendChild(navigationElement);
    navigationElement.appendChild(btnElement1);
    navigationElement.appendChild(buttonElement2);
    navigationElement.appendChild(buttonElement3);
    navigationElement.appendChild(btnElement4);

}    

