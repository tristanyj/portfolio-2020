import { TweenMax } from 'gsap'

export default class HoverImgFx {
	constructor(el) {
		this.imagePos = { x: 0, y: 0 }
		this.imagePosContainer = { x: 0, y: 0 }
		this.mousePos = { x: 0, y: 0 }

		this.DOM = { el: el }
		this.DOM.underline = this.DOM.el.querySelector('.underline')
		this.DOM.reveal = this.DOM.el.querySelector('.hover-reveal')
		this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner')
		this.DOM.revealImgContainer = this.DOM.revealInner.querySelector('.hover-reveal__img')
		this.DOM.revealImg = this.DOM.revealInner.querySelector('.img')

		this.initEvents()
	}

	getMousePos(e) {
		let posx = e.clientX - this.DOM.el.getBoundingClientRect().left - 30
		let posy = e.clientY - this.DOM.el.getBoundingClientRect().top - 30

		return { x: posx, y: posy }
	}

	loop() {
		this.imagePos.x += (this.mousePos.x - this.imagePos.x) * 0.1
		this.imagePos.y += (this.mousePos.y - this.imagePos.y) * 0.1

		this.imagePosContainer.x = (this.mousePos.x - this.imagePos.x) * 0.6
		this.imagePosContainer.y = (this.mousePos.y - this.imagePos.y) * 0.6

		this.DOM.reveal.style.transform = `translate(${ this.imagePos.x }px, ${ this.imagePos.y }px)`
		this.DOM.revealImgContainer.style.transform = `translate(${ this.imagePosContainer.x }px, ${ this.imagePosContainer.y }px)`

		window.requestAnimationFrame(() => this.loop())
	}

	initEvents() {
		window.addEventListener('mousemove', e => this.mousePos = this.getMousePos(e))

		this.loop()

		this.mouseenterFn = (ev) => {
			this.showImage()
		}

		this.mouseleaveFn = () => {
			this.hideImage()
		}

		this.DOM.el.addEventListener('mouseenter', this.mouseenterFn)
		this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn)
		// this.DOM.el.addEventListener('mousemove', this.mousemoveFn)
	}
	showImage() {
		this.DOM.underline.classList.add('active')

		TweenMax.killTweensOf(this.DOM.revealInner)
		TweenMax.killTweensOf(this.DOM.revealImg)

		this.tl = new TimelineMax({
			onStart: () => {
				this.DOM.reveal.style.opacity = 1;
				TweenMax.set(this.DOM.el, {zIndex: 1000});
			}
		})
		.add('begin')
		.set([this.DOM.revealInner, this.DOM.revealImg], {transformOrigin: '50% 100%'})
		.set(this.DOM.revealImg, { opacity: 0 })
		.add(new TweenMax(this.DOM.revealInner, 0.4, {
			ease: Expo.easeOut,
			startAt: {x: '50%', y: '120%', rotation: 50},
			x: '0%',
			y: '0%',
			rotation: 0
		}), 'begin')
		.add(new TweenMax(this.DOM.revealImg, 0.4, {
			ease: Expo.easeOut,
			startAt: {x: '-50%', y: '-120%', rotation: -50},
			x: '0%',
			y: '0%',
			rotation: 0,
			opacity: 1
		}), 'begin')
		.add(new TweenMax(this.DOM.revealImg, 0.7, {
			ease: Expo.easeOut,
			startAt: {scale: 2},
			scale: 1
		}), 'begin');
	}
	hideImage() {
		this.DOM.underline.classList.remove('active')

		TweenMax.killTweensOf(this.DOM.revealInner);
		TweenMax.killTweensOf(this.DOM.revealImg);

		this.tl = new TimelineMax({
			onStart: () => {
				TweenMax.set(this.DOM.el, {zIndex: 999});
			},
			onComplete: () => {
				TweenMax.set(this.DOM.el, {zIndex: ''});
				TweenMax.set(this.DOM.reveal, {opacity: 0});
			}
		})
		.add('begin')
		.add(new TweenMax(this.DOM.revealInner, 0.6, {
			ease: Expo.easeOut,
			y: '-120%',
			rotation: -5
		}), 'begin')
		.add(new TweenMax(this.DOM.revealImg, 0.6, {
			ease: Expo.easeOut,
			y: '120%',
			rotation: 5,
			scale: 1.2,
			opacity: 0
		}), 'begin')
	}
}
