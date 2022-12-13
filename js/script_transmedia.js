class Carousel {

    /**
     * @callback moveCallback
     * @param {number} index
     */


    /**
     *
     * @param {HTMLElement} element
     * @param {Object} options
     * @param {Object} [options.slidesToScroll=1] Nb d'éléments à faire défiler
     * @param {Object} [options.slidesVisibles=1] Nb d'éléments visibles dans un slide
     * @param {boolean} [options.loop=false] boucler en fin de carousel ?
     */
    constructor(element, options = {}) {
        this.element=element
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false
        }, options)
        let children = [].slice.call(element.children)
        this.isMobile = false
        this.currentItem = 0
        this.root = this.createDivWithClass('carousel-serigraphie')
        this.container = this.createDivWithClass('carousel-serigraphie__container')
        this.root.setAttribute('tabindex', '0')
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.moveCallbacks = []
        this.items = children.map((child) => {
            let item = this.createDivWithClass('carousel-serigraphie__item')
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        })
        this.setStyle()
        this.createNavigation()
        this.moveCallbacks.forEach(cb => cb(0))
        this.onWindowResize()
        window.addEventListener('resize', this.onWindowResize.bind(this))
        this.moveCallbacks = []

    }

    /**
     * applique les bonnes dimensions aux elements du carousel
     */

    setStyle () {
        let ratio = this.items.length / this.slidesVisible
        this.container.style.width = (ratio * 100) + "%"
        this.items.forEach(item =>  item.style.width = ((100/ this.slidesVisible) / ratio) + '%')
    }

    createNavigation (){
        let nextButton = this.createDivWithClass('carousel-serigraphie__next')
        let prevButton = this.createDivWithClass('carousel-serigraphie__prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))
        if (this.options.loop === true){
            return
        }
        this.onMove(index => {
            if (index === 0){
                prevButton.classList.add('carousel-serigraphie__prev--hidden')
            } else{
                prevButton.classList.remove('carousel-serigraphie__prev--hidden')
            }
            if(this.items[this.currentItem + this.slidesVisible] === undefined){
                nextButton.classList.add('carousel-serigraphie__next--hidden')
            }else{
                nextButton.classList.remove('carousel-serigraphie__next--hidden')
            }
        })
    }

    next(){
        this.goToItem(this.currentItem + this.slidesToScroll)
    }

    prev(){
        this.goToItem(this.currentItem - this.slidesToScroll)
    }

    /**
     * déplace le carousel vers l'element ciblé
     * @param {number} index 
     */
    goToItem (index){
        if (index < 0){
           index = this.items.length - this.options.slidesVisible
        } else if (index >= this.items.length || (this.items[this.currentItem + this.options.slidesVisible] === undefined && index > this.currentItem)){
            index = 0
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)'
        this.currentItem = index
        this.moveCallbacks.forEach(cb => cb(index))
    }

    /**
     * 
     * @param {moveCallback} cb 
     */
    onMove (cb){
        this.moveCallbacks.push(cb)
    }

    onWindowResize(){
        let mobile = window.innerWidth < 1500
        if (mobile !== this.isMobile){
            this.isMobile = mobile
            this.setStyle()
            this.moveCallbacks.forEach(cb => cb(this.currentItem))
        }
    }

    /**
     *
     * @param {string} className
     * @returns HTMLElement
     */
    createDivWithClass (className){
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }


    /**
     * @returns {number}
     */
    get slidesToScroll () {
        return this.isMobile ? 1 : this.options.slidesToScroll
    }


     /**
     * @returns {number}
     */
    get slidesVisible () {
        return this.isMobile ? 1 : this.options.slidesVisible
    }
}



document.addEventListener('DOMContentLoaded', function() {

    new Carousel(document.getElementById('carousel-transmedia'), {
        slidesToScroll: 3,
        slidesVisible: 3,
        loop: true
    })
})

