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

export {Carrousel}