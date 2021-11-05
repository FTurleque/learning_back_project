import {
    createDivWithClass, 
    createH1WithClassAndTxt, 
} from './constructor_html.js'
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

// Constructor du Swiper
const swiper = new Swiper(HTMLElement, {});

const swiper__base = [
    document.querySelector('.actionMovie'),
    document.querySelector('.animationMovie'),
    document.querySelector('.adventureMovie'),
    document.querySelector('.comedyMovie'),
    document.querySelector('.crimeMovie'),
    document.querySelector('.documentaryMovie'),
    document.querySelector('.dramaMovie'),
    document.querySelector('.familyMovie'),
    document.querySelector('.fantasyMovie'),
    document.querySelector('.historyMovie'),
    document.querySelector('.horrorMovie'),
    document.querySelector('.musicMovie'),
    document.querySelector('.mysteryMovie'),
    document.querySelector('.romanceMovie'),
    document.querySelector('.science_fictionMovie'),
    document.querySelector('.tv_movieMovie'),
    document.querySelector('.thrillerMovie'),
    document.querySelector('.warMovie'),
    document.querySelector('.westernMovie')
];

let index = 0;
function swiper__constructor__withBase() {
    swiper__base.forEach(element => {
        swiper__element(element.id)
        index++;
    });
}

// Sliders creation
function swiper__element(_genre) {
    let wrapper = createDivWithClass(`swiper-wrapper ${_genre}`);
    let title = createH1WithClassAndTxt('title', _genre);
    let nextMovie = createDivWithClass('swiper-button-next');
    let prevMovie = createDivWithClass('swiper-button-prev');
    swiper__base[index].appendChild(title);
    swiper__base[index].appendChild(wrapper);
    swiper__base[index].appendChild(nextMovie);
    swiper__base[index].appendChild(prevMovie);
}

/**
 * Je construit les sliders avec l'API swiper
 */
 function swiper_creation() {
    // Films slider Action
    const action = new Swiper(swiper__base[0], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Animation
    const animation = new Swiper(swiper__base[1], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Aventure
    const adventure = new Swiper(swiper__base[2], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Comédie
    const comedy = new Swiper(swiper__base[3], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Crime
    const crime = new Swiper(swiper__base[4], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Documentaire
    const documentary = new Swiper(swiper__base[5], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Drame
    const drama = new Swiper(swiper__base[6], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Famille
    const family = new Swiper(swiper__base[7], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Fantastique
    const fantasy = new Swiper(swiper__base[8], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Historique
    const history = new Swiper(swiper__base[9], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Horreur
    const horror = new Swiper(swiper__base[10], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Musique
    const music = new Swiper(swiper__base[11], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Mystère
    const mystery = new Swiper(swiper__base[12], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Romance
    const romance = new Swiper(swiper__base[13], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films science Fiction
    const science_fiction = new Swiper(swiper__base[14], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Téléfilm
    const tv_movie = new Swiper(swiper__base[15], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Thriller
    const thriller = new Swiper(swiper__base[16], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Guerre
    const war = new Swiper(swiper__base[17], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });

    // Films slider Western
    const western = new Swiper(swiper__base[18], {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
        slidesPerView: 5,
        // loop: true,
        // freeMode: true,
        // speed: 500,
    });


}

export {swiper_creation, swiper__constructor__withBase}