<template>
	<div class="container-page container-index" data-scroll-container>
		<div class="content">
			<intro :data="intro"/>
			<projects :data="projects"/>
			<outro :data="outro"/>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.container-index {
		max-width 1920px
		margin 0 auto

		.content {
			position relative
			padding 100px 70px
			text-align center
			z-index 1

			@media screen and (max-width: 600px) {
				padding	40px 20px
			}
		}
	}
</style>

<script>
	import { mapGetters } from 'vuex'
	import { TimelineLite } from 'gsap'

	import intro from '~/components/top/intro'
	import projects from '~/components/content/projects'
	import outro from '~/components/bottom/outro'

	export default {
		components: {
			intro,
			projects,
			outro
		},
		data() {
			return {
				current: {
					section: {
						index: undefined,
						type: ''
					}
				}
			}
		},
		computed: {
			...mapGetters({
				sections: 'GET_SECTIONS'
			}),
			intro() {
				return this.sections.filter(section => section.type === 'intro')[0]
			},
			outro() {
				return this.sections.filter(section => section.type === 'outro')[0]
			},
			projects() {
				return this.sections.filter(section => section.type === 'project')
			}
		},
		methods: {
			checkCurrentSection(e) {
				for(let i = 0; i < this.sectionsDOM.length; i++) {
					const section = this.sectionsDOM[i]

					if(e.scroll.y < section.getBoundingClientRect().top + e.scroll.y + section.getBoundingClientRect().height - window.innerHeight / 2) {
						this.current.section.index = i

						if(!section.classList.contains('active')) {
							this.sectionsDOM.forEach(s => s.classList.remove('active'))
							section.classList.add('active')
						}

						break
					}
				}
			}
		},
		mounted() {
			this.$nuxt.$nextTick(() => {
				this.sectionsDOM = Array.from(document.querySelectorAll('.section-container'))

				this.scroll = new LocomotiveScroll({
					el: document.querySelector('[data-scroll-container]'),
					smooth: true,
					getSpeed: true
				})

				this.scroll.on('scroll', (e) => {
					this.checkCurrentSection(e)
				})

				// this.scroll.on('call', func => {
				// 	console.log(func)
				// })
			})
		}
	}
</script>





