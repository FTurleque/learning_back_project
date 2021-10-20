class Carousel {
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
        this.children = [].slice.call(element.children)
        let root = this.createDivWithClass('carousel_actors')
        let container = this.createDivWithClass('carousel__container')
        root.appendChild(container)
        this.element.appendChild(root)
        this.children.forEach(child => {
            container.appendChild(child)
        });
    }

    createDivWithClass(className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new Carousel(document.querySelector('#carousel_actor_movie'), {
        slidesToScroll: 5,
        slidesVisible: 5
    })
})