export const state = () => ({
	projects: [
		{
			title: 'Generative Gallery',
			description: '',
			link: '',
			date: '',
			role: [''],
			images: {
				cover: '',
				all: [
					'',
					''
				]
			},
			tech: [
				''
			]
		},
		{
			title: 'Sabrina Nedjah',
			description: '',
			link: '',
			date: '',
			role: [''],
			images: {
				cover: '',
				all: [
					'',
					''
				]
			},
			tech: [
				''
			]
		},
		{
			title: 'CAE',
			description: '',
			link: '',
			date: '',
			role: [''],
			images: {
				cover: '',
				all: [
					'',
					''
				]
			},
			tech: [
				''
			]
		},
		{
			title: 'Goblin Hunter',
			description: '',
			link: '',
			date: '',
			role: [''],
			images: {
				cover: '',
				all: [
					'',
					''
				]
			},
			tech: [
				''
			]
		},
		{
			title: 'React MovieDB',
			description: '',
			link: '',
			date: '',
			role: [''],
			images: {
				cover: '',
				all: [
					'',
					''
				]
			},
			tech: [
				''
			]
		},
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
	GET_PROJECTS(state) {
		return state.projects
	},
	GET_SOCIALS(state) {
		return state.socials
	}
}
