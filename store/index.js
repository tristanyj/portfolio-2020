export const state = () => ({
	sections: [
		{
			type: 'intro',
		},
		{
			type: 'outro',
		},
		{
			type: 'project',
			status: 'released',
			title: 'Generative Gallery',
			cover: [
				{
					src: 'images/project-1-1.jpg'
				},
				{
					src: 'images/project-1-2.jpg'
				},
			],
			number: {
				top: 10,
				left: 100
			},
			margin: {
				top: 200,
				bottom: 400
			},
			label: 'Personal Project',
			description: 'Gallery of the things I\'ve done while learning about generative art',
			link: 'https://lab.tristan-lanoye.com/generative-gallery/',
			date: '2020',
			role: ['Developer', 'Designer'],
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
			cover: [
				{
					src: 'images/project-2-1.jpg'
				},
				{
					src: 'images/project-2-2.jpg'
				},
			],
			number: {
				top: 0,
				left: 100
			},
			margin: {
				top: 0,
				bottom: 350
			},
			label: 'School Project',
			description: 'Generative design project, generate a deck of cards based on your personality',
			link: 'https://lab.tristan-lanoye.com/bicycle-make-your-deck/',
			date: '2020',
			role: ['Developer'],
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
			cover: [
				{
					src: 'images/project-3-1.jpg'
				},
				{
					src: 'images/project-3-2.jpg'
				},
			],
			number: {
				top: 0,
				left: 0
			},
			margin: {
				top: 0,
				bottom: 350
			},
			label: 'Portfolio Project',
			description: 'Development of Sabrina Nedjah\'s 2019 portfolio',
			link: 'https://sabrinanedjah.fr/',
			date: '2019',
			role: ['Developer'],
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
			title: 'Hetic Campus',
			cover: [
				{
					src: 'images/project-4-1.jpg'
				},
				{
					src: 'images/project-4-2.jpg'
				},
			],
			number: {
				top: 10,
				left: -5
			},
			margin: {
				top: 0,
				bottom: 350
			},
			label: 'Freelance Project',
			description: 'Development of an internal news website for my school (not released yet)',
			link: 'https://competent-villani-12ef0b.netlify.com/',
			date: '2020',
			role: ['Developer'],
			tech: [
				'vue.js',
				'nuxt.js',
				'prismic',
				'netlify',
				'webhooks',
				'gsap',
				'swiper',
				'stylus'
			]
		},
		{
			type: 'project',
			status: 'released',
			title: 'Goblin Hunter',
			cover: [
				{
					src: 'images/project-5-1.jpg'
				},
				{
					src: 'images/project-5-2.jpg'
				},
			],
			number: {
				top: 0,
				left: 100
			},
			margin: {
				top: 0,
				bottom: 350
			},
			label: 'Personal Project',
			description: 'Platform game made with Canvas API, no libraries',
			link: 'https://lab.tristan-lanoye.com/goblin-hunter/',
			date: '2018',
			role: ['Developer', 'Design'],
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
			cover: [
				{
					src: 'images/project-6-1.jpg'
				},
				{
					src: 'images/project-6-2.jpg'
				},
			],
			number: {
				top: 0,
				left: 0
			},
			margin: {
				top: 0,
				bottom: 350
			},
			label: 'Personal Project',
			description: 'My first React project. Movie database with TMDB API',
			link: 'https://lab.tristan-lanoye.com/react-moviedb/',
			date: '2017',
			role: ['Developer', 'Design'],
			tech: [
				'react.js',
				'api',
				'css grid',
				'autosuggest'
			]
		}
	],
	socials: [
		{
			label: 'github',
			link: 'https://github.com/tristanyj',
			class: 'social-github',
			icon: '/icons/social-github.svg',
			alt: 'Github'
		},
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
