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
						top: 35,
						left: 17
					},
					size: {
						width: 225,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
						{
							type: 'img',
							src: 'images/oli-2.jpeg',
						},
					],
					speed: -1,
					direction: 1,
					classNames: ['']
				},
				{
					position: {
						top: 78,
						left: 84
					},
					size: {
						width: 325,
						height: 200
					},
					images: [
						{
							type: 'img',
							src: 'images/bepop-1.gif',
							size: {
								width: 325,
								height: 200
							}
						},
						{
							type: 'img',
							src: 'images/bepop-1.gif'
						},
					],
					speed: -1,
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
						top: 40,
						left: 15
					},
					size: {
						width: 225,
						height: 225
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: 4,
					direction: 1,
					classNames: ['']
				},
				{
					position: {
						top: 70,
						left: 85
					},
					size: {
						width: 200,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: 2,
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
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: 4,
					direction: 1,
					classNames: ['']
				},
				{
					position: {
						top: 70,
						left: 0
					},
					size: {
						width: 200,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: -2,
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
			],
			squares: [
				{
					position: {
						top: 40,
						left: 90
					},
					size: {
						width: 200,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: -3,
					direction: 1,
					classNames: ['']
				},
				{
					position: {
						top: 70,
						left: 25
					},
					size: {
						width: 200,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: -3,
					direction: 1,
					classNames: ['']
				}
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
			],
			squares: [
				{
					position: {
						top: 60,
						left: 100
					},
					size: {
						width: 200,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: 4,
					direction: 1,
					classNames: ['']
				},
				{
					position: {
						top: 80,
						left: 10
					},
					size: {
						width: 200,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: 2,
					direction: 1,
					classNames: ['']
				},
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
			],
			squares: [
				{
					position: {
						top: 70,
						left: 85
					},
					size: {
						width: 200,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: -2,
					direction: 1,
					classNames: ['']
				},
				{
					position: {
						top: 85,
						left: 20
					},
					size: {
						width: 200,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: 1,
					direction: 1,
					classNames: ['']
				}
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
			],
			squares: [
				{
					position: {
						top: 60,
						left: 60
					},
					size: {
						width: 300,
						height: 200
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: 4,
					direction: 1,
					classNames: ['']
				},
				{
					position: {
						top: 85,
						left: 90
					},
					size: {
						width: 200,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: 2,
					direction: 1,
					classNames: ['']
				},
				{
					position: {
						top: 85,
						left: 0
					},
					size: {
						width: 250,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: -3,
					direction: 1,
					classNames: ['']
				},
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
			],
			squares: [
				{
					position: {
						top: 70,
						left: 100
					},
					size: {
						width: 250,
						height: 300
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: 3,
					direction: 1,
					classNames: ['']
				},
				{
					position: {
						top: 60,
						left: 40
					},
					size: {
						width: 300,
						height: 200
					},
					images: [
						{
							type: 'img',
							src: 'images/me-1.jpg',
							size: {
								width: 225,
								height: 300
							}
						},
					],
					speed: -2,
					direction: 1,
					classNames: ['']
				}
			]
		},
		// {
		// 	type: 'project',
		// 	status: 'soon',
		// 	title: 'HETIC Interne',
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
		// 	squares: [
		// 		{
		// 			position: {
		// 				top: 55,
		// 				left: 50
		// 			},
		// 			size: {
		// 				width: 250,
		// 				height: 300
		// 			},
		// 			images: [
		// 				{
		// 					type: 'img',
		// 					src: 'images/me-1.jpg',
		// 					size: {
		// 						width: 225,
		// 						height: 300
		// 					}
		// 				},
		// 			],
		// 			speed: -2,
		// 			direction: 1,
		// 			classNames: ['']
		// 		},
		// 	]
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
