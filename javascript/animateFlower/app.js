const cercle = document.querySelector('.cercle');
const imgs = document.querySelectorAll('img');

const TL = gsap.timeline({paused: true});

/**Méthode qui permet plusieurs animations en même temps avec la position, la durée totale et la durée entre les animations + manière dont l'animation se fait */
TL 
.to(imgs, {scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)"});

cercle.addEventListener('mouseenter', () => {

    TL.play();

})
cercle.addEventListener('mouseout', () => {

    TL.reverse();

})