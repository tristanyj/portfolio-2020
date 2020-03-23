import { TimelineLite } from 'gsap'

const lerp = (a, b, n) => (1 - n) * a + n * b

export default class Menu {
    constructor(element, opts = {}) {
        this.DOM = {
            svg: element,
        }
		this.DOM.imgs = [...this.DOM.svg.querySelectorAll('g > image')]
		this.feDisplacementMapEl = this.DOM.svg.querySelector('feDisplacementMap')

		this.dmScale = 0
		this.displacement = 0

		this.current = 0
		this.next = 1

		this.active = 0

        this.initEvents()
        requestAnimationFrame(() => this.render())
    }
    initEvents() {
        const mouseenterFn = () => {
			const onProgress = () => {
				if(tl.progress() > 0.2) this.active = 0
			}

			const tl = new TimelineLite({ onUpdate: onProgress })

			this.active = 100

			tl.to(this.DOM.imgs[this.current], 0.35, { ease: Quad.easeOut, opacity: 0 }, 0)
            tl.to(this.DOM.imgs[this.next], 0.35, { ease: Quad.easeOut, opacity: 1 }, 0)
		}

        const mouseleaveFn = () => {
			const onProgress = () => {
				if(tl.progress() > 0.2) this.active = 0
			}

			const tl = new TimelineLite({ onUpdate: onProgress })

			this.active = 100

            tl.to(this.DOM.imgs[this.next], 0.35, { ease: Quad.easeOut, opacity: 0 }, 0)
			tl.to(this.DOM.imgs[this.current], 0.35, { ease: Quad.easeOut, opacity: 1 }, 0)
		}

		this.DOM.svg.addEventListener('mouseenter', mouseenterFn)
		this.DOM.svg.addEventListener('mouseleave', mouseleaveFn)
	}

    render() {
        this.displacement = lerp(this.displacement, this.active, 0.07)

		this.dmScale = Math.min(this.displacement, 50)
		this.feDisplacementMapEl.scale.baseVal = this.dmScale

        requestAnimationFrame(() => this.render())
    }
}
