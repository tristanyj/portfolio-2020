import { lineEq, lerp, distance } from './utils'

export default class Filter {
    constructor() {
		this.scroll = { x: 0, y: 0 }
		this.winsize = {}
		this.calcWinsize()

		this.feDisplacementMapEl = document.querySelector('feDisplacementMap')

        this.DOM = {
            svg: document.querySelector('svg.distort'),
            menu: document.querySelector('.description-container .description')
		}

        this.DOM.imgs = [...this.DOM.svg.querySelectorAll('g > image')]
        this.DOM.menuLinks = [...this.DOM.menu.querySelectorAll('.quote__link')]
        this.mousePos = { x: this.winsize.width / 2, y: this.winsize.height / 2 }
        this.lastMousePos = {
            translation: { x: this.winsize.width / 2, y: this.winsize.height / 2 },
            displacement: { x: 0, y: 0 }
        }
        this.dmScale = 0
        this.current = -1

        this.initEvents()
        requestAnimationFrame(() => this.render())
	}

	getMousePos(e) {
		let posx = e.clientX + this.scroll.x + document.documentElement.scrollLeft
		let posy = e.clientY + this.scroll.y + document.documentElement.scrollTop

		return { x : posx, y : posy }
	}

	calcWinsize() { this.winsize = { width: window.innerWidth, height: window.innerHeight } }

    initEvents() {
		window.addEventListener('resize', this.calcWinsize)
		window.addEventListener('mousemove', e => this.mousePos = this.getMousePos(e))

        this.DOM.menuLinks.forEach((item, pos) => {
            // charming(item);
            // const letters = [...item.querySelectorAll('span')];

            const mouseenterFn = () => {
                this.current = pos
                TweenMax.to(this.DOM.imgs[this.current], 0.5, {
                    ease: Quad.easeOut,
                    opacity: 1
                })

        	    // TweenMax.staggerTo(letters, 0.2, {
        	    //     ease: Sine.easeInOut,
        	    //     y: this.lastMousePos.translation.x < this.mousePos.x ? 30 : -30,
        	    //     startAt: {opacity: 1, y: 0},
        	    //     opacity: 0,
        	    //     yoyo: true,
        	    //     yoyoEase: Expo.easeOut,
        	    //     repeat: 1,
        	    //     stagger: {
        	    //         grid: [1,letters.length-1],
        	    //         from: this.lastMousePos.translation.x < this.mousePos.x ? 'start' : 'end',
        	    //         amount: 0.12
        	    //     }
        	    // });
			}

            const mouseleaveFn = () => {
                TweenMax.to(this.DOM.imgs[this.current], 0.5, {ease: Quad.easeOut, opacity: 0})
			}

            item.addEventListener('mouseenter', mouseenterFn)
            item.addEventListener('mouseleave', mouseleaveFn)
        })
	}

    render() {
        this.lastMousePos.translation.x = lerp(this.lastMousePos.translation.x, this.mousePos.x, 0.15)
        this.lastMousePos.translation.y = lerp(this.lastMousePos.translation.y, this.mousePos.y, 0.15)
		this.DOM.svg.style.transform = `translateX(${(this.lastMousePos.translation.x - this.winsize.width / 2)}px) translateY(${ this.lastMousePos.translation.y - this.winsize.height / 2 }px)`

        // Scale goes from 0 to 50 for mouseDistance values between 0 to 100
        this.lastMousePos.displacement.x = lerp(this.lastMousePos.displacement.x, this.mousePos.x, 0.07)
		this.lastMousePos.displacement.y = lerp(this.lastMousePos.displacement.y, this.mousePos.y, 0.07)

        const mouseDistance = distance(this.lastMousePos.displacement.x, this.mousePos.x, this.lastMousePos.displacement.y, this.mousePos.y)
		this.dmScale = Math.min(lineEq(50, 0, 100, 0, mouseDistance), 50)
        this.feDisplacementMapEl.scale.baseVal = this.dmScale.toFixed(4)
        requestAnimationFrame(() => this.render())
    }
}
