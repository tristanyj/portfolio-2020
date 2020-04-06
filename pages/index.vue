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
				padding	70px 20px
			}
		}
	}
</style>

<script>
	import MobileDetect from 'mobile-detect'
	import { mapGetters } from 'vuex'
	import { TimelineLite } from 'gsap'

	import Filter from '~/assets/scripts/Filter'
	import HoverFx from '~/assets/scripts/HoverFX'

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

							this.$nuxt.$emit('CHANGE_PROJECT')
						}

						break
					}
				}
			}
		},
		mounted() {
			this.fxInstances = []

			this.md = new MobileDetect(window.navigator.userAgent)

			this.$nuxt.$nextTick(() => {
				this.backgroundEl = document.querySelector('.__layout-wrapper')
				this.sectionsDOM = Array.from(document.querySelectorAll('.section-container'))

				if(!this.md.mobile() && window.innerWidth >= 1000) {
					this.scroll = new LocomotiveScroll({
						el: document.querySelector('[data-scroll-container]'),
						smooth: true
					})

					this.scroll.on('scroll', (e) => {
						const progress = 360 * e.scroll.y / e.limit
						this.backgroundEl.style.backgroundColor = `hsl(${progress}, 40%, 95%)`

						this.fxInstances.forEach(ins => {
							ins.scroll = {
								x: 0,
								y: e.scroll.y
							}
						})
					})

					Array.from(document.querySelectorAll('.quote__link')).forEach(el =>  {
						this.fxInstances.push(new HoverFx(el))
					})
				} else {
					Array.from(document.querySelectorAll('.hover-reveal')).forEach(el => {
						el.style.display = 'none'
					})
					document.body.style.overflowY = 'scroll'
				}


				this.$nuxt.$on('FINISHED_LOADING', () => {
					const tl = new TimelineLite()

					tl.add('start')
					tl.to('.topbar-container .animation-wrapper', 1, { opacity: 1 }, 'start')
					tl.staggerFromTo('.description-container .animation-wrapper', 1, { opacity: 0, y: 20 },  { opacity: 1, y: 0, ease: Power3.easeOut }, 0.1, 'start+=0.2')
					tl.to('.thumbs-container .animation-wrapper', 1, { opacity: 1 }, 'start+=0.3')
					tl.staggerFromTo('.project-container .animation-wrapper', 1, { opacity: 0, y: 20}, { opacity: 1, y: 20 }, 0.1, 'start+=0.3')
				})
			})
		}
	}
</script>





