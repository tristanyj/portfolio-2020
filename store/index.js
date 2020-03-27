export const state = () => ({
	sections: [
		{
			type: 'intro',
			colors: {
				background: 360 * 1 / 8,
				text: ''
			}
		},
		{
			type: 'outro',
			colors: {
				background: 360 * 2 / 8,
				text: ''
			}
		},
		{
			type: 'project',
			status: 'released',
			title: 'Generative Gallery',
			cover: {
				src: 'images/b1.jpg',
			},
			scroll: {
				speed: 0
			},
			number: {
				speed: 1.25,
				top: 0,
				left: 100
			},
			margin: {
				top: 200,
				bottom: 400
			},
			description: '',
			link: '',
			date: '',
			role: [''],
			colors: {
				background: 360 * 3 / 8,
				text: ''
			},
			images: {
				cover: '',
				all: [
					'',
					''
				]
			},
			tech: [
				'processing',
				'p5.js',
				'generative',
				'vue.js',
				'nuxt.js',
				'masonry',
				'gsap',
				'stylus'
			]
		},
		{
			type: 'project',
			status: 'released',
			title: 'Generative Bicycle',
			cover: {
				src: 'images/b2.jpg',
			},
			scroll: {
				speed: 1
			},
			number: {
				speed: -1.25,
				top: -1,
				left: 101
			},
			margin: {
				top: 0,
				bottom: 350
			},
			description: '',
			link: '',
			date: '',
			role: [''],
			colors: {
				background: 360 * 4 / 8,
				text: ''
			},
			images: {
				cover: '',
				all: [
					'',
					''
				]
			},
			tech: [
				'p5.js',
				'generative',
				'vue.js',
				'nuxt.js',
				'es6',
				'inheritance',
				'stylus',
				'gsap',
				'swiper'
			]
		},
		{
			type: 'project',
			status: 'released',
			title: 'Sabrina Nedjah',
			cover: {
				src: 'images/b3.jpg',
			},
			scroll: {
				speed: 2
			},
			number: {
				speed: 1.25,
				top: 0,
				left: 0
			},
			margin: {
				top: 0,
				bottom: 350
			},
			description: '',
			link: '',
			date: '',
			role: [''],
			colors: {
				background: 360 * 5 / 8,
				text: ''
			},
			images: {
				cover: '',
				all: [
					'',
					''
				]
			},
			tech: [
				'vue.js',
				'nuxt.js',
				'gsap',
				'pixi.js',
				'webgl',
				'glsl',
				'shader',
				'displacement',
				'smoothscroll',
				'pub-sub.js',
				'stylus'
			]
		},
		{
			type: 'project',
			status: 'released',
			title: 'CAE',
			cover: {
				src: 'images/b4.jpg',
			},
			scroll: {
				speed: 3
			},
			number: {
				speed: -1.25,
				top: 10,
				left: -5
			},
			margin: {
				top: 0,
				bottom: 350
			},
			description: '',
			link: '',
			date: '',
			role: [''],
			colors: {
				background: 360 * 6 / 8,
				text: ''
			},
			images: {
				cover: '',
				all: [
					'',
					''
				]
			},
			tech: [
				'wordpress',
				'gsap',
				'swiper',
				'scrollreveal',
				'vanillajs'
			]
		},
		{
			type: 'project',
			status: 'released',
			title: 'Goblin Hunter',
			cover: {
				src: 'images/b5.jpg',
			},
			scroll: {
				speed: 3
			},
			number: {
				speed: 1.25,
				top: 0,
				left: 100
			},
			margin: {
				top: 0,
				bottom: 350
			},
			description: '',
			link: '',
			date: '',
			role: [''],
			colors: {
				background: 360 * 7 / 8,
				text: ''
			},
			images: {
				cover: '',
				all: [
					'',
					''
				]
			},
			tech: [
				'canvas',
				'es6',
				'platform game',
				'spritesheets',
				'vanillajs',
				'compass',
				'html5'
			]
		},
		{
			type: 'project',
			status: 'released',
			title: 'React MovieDB',
			cover: {
				src: 'images/b6.jpg'
			},
			scroll: {
				speed: 3
			},
			number: {
				speed: -1.25,
				top: 0,
				left: 0
			},
			margin: {
				top: 0,
				bottom: 350
			},
			description: '',
			link: '',
			date: '',
			role: [''],
			colors: {
				background: 360 * 8 / 8,
				text: ''
			},
			images: {
				cover: '',
				all: [
					'',
					''
				]
			},
			tech: [
				'react.js',
				'api',
				'css grid',
				'autosuggest'
			]
		},
		// {
		// 	type: 'project',
		// 	status: 'soon',
		// 	title: 'HETIC Interne',
		//  cover: 'images/b7.jpg',
		// 	description: '',
		// 	link: '',
		// 	date: '',
		// 	role: [''],
		// 	colors: {
		// 		background: '',
		// 		text: ''
		// 	},
		// 	images: {
		// 		cover: '',
		// 		all: [
		// 			'',
		// 			''
		// 		]
		// 	},
		// 	tech: [
		// 		'prismic',
		// 		'vue.js',
		// 		'nuxt.js',
		// 		'blog'
		// 	],
		// }
	],
	socials: [
		{
			label: 'twitter',
			link: 'https://twitter.com/tristan_yj',
			class: 'social-twitter',
			icon: '/icons/social-twitter.svg',
			alt: 'Twitter'
		},
		{
			label: 'linkedin',
			link: 'https://linkedin.com/in/tristan-lanoye-84518b157',
			class: 'social-linkedin',
			icon: '/icons/social-linkedin.svg',
			alt: 'Linkedin'
		},
		{
			label: 'mail',
			link: 'mailto:contact@tristan-lanoye.com',
			class: 'social-mail',
			icon: '/icons/social-mail.svg',
			alt: 'Mail'
		}
	]
})

export const getters = {
	GET_SOCIALS(state) {
		return state.socials
	},
	GET_SECTIONS(state) {
		return state.sections
	}
}
