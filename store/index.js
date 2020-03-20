export const state = () => ({
	sections: [
		{
			type: 'intro',
			colors: {
				background: '',
				text: ''
			},
			squares: [
				{
					position: {
						top: 50,
						left: 20
					},
					size: {
						width: 200,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: ''
						}
					],
					speed: -1,
					direction: 1,
					classNames: ['']
				},
				{
					position: {
						top: 7,
						left: 77
					},
					size: {
						width: 400,
						height: 200
					},
					images: [
						{
							type: 'img',
							src: ''
						}
					],
					speed: 4,
					direction: 1,
					classNames: ['']
				},
				{
					position: {
						top: 90,
						left: 100
					},
					size: {
						width: 300,
						height: 400
					},
					images: [
						{
							type: 'img',
							src: ''
						}
					],
					speed: -2,
					direction: 1,
					classNames: ['']
				},
			]
		},
		{
			type: 'outro',
			colors: {
				background: '',
				text: ''
			},
			squares: [
				{
					position: {
						top: 30,
						left: 15
					},
					size: {
						width: 300,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: ''
						}
					],
					speed: 4,
					direction: 1,
					classNames: ['']
				}
			]
		},
		{
			type: 'project',
			status: 'released',
			title: 'Generative Gallery',
			description: '',
			link: '',
			date: '',
			role: [''],
			colors: {
				background: '',
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
			],
			squares: [
				{
					position: {
						top: 57,
						left: 70
					},
					size: {
						width: 200,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: ''
						}
					],
					speed: 4,
					direction: 1,
					classNames: ['']
				}
			]
		},
		{
			type: 'project',
			status: 'released',
			title: 'Generative Bicycle',
			description: '',
			link: '',
			date: '',
			role: [''],
			colors: {
				background: '',
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
			description: '',
			link: '',
			date: '',
			role: [''],
			colors: {
				background: '',
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
			description: '',
			link: '',
			date: '',
			role: [''],
			colors: {
				background: '',
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
			description: '',
			link: '',
			date: '',
			role: [''],
			colors: {
				background: '',
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
			description: '',
			link: '',
			date: '',
			role: [''],
			colors: {
				background: '',
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
		{
			type: 'project',
			status: 'soon',
			title: 'HETIC Interne',
			description: '',
			link: '',
			date: '',
			role: [''],
			colors: {
				background: '',
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
				'prismic',
				'vue.js',
				'nuxt.js',
				'blog'
			]
		}
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
