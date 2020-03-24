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
		background hsl(45, 40%, 95%)
		// background hsl(0, 10%, 80%)
		transition 0.3s background ease

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

	import Filter from '~/assets/scripts/Filter'

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

							this.scroll.el.style.backgroundColor = `hsl(${ section.dataset.colorBackground }, 40%, 95%)`

							this.$nuxt.$emit('CHANGE_PROJECT')
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

				this.filter = new Filter()

				this.scroll.on('scroll', (e) => {
					const progress = 360 * e.scroll.y / e.limit
					// this.scroll.el.style.backgroundColor = `hsl(${progress}, 38%, 95%)`

					this.checkCurrentSection(e)

					this.filter.scroll = {
						x: 0,
						y: e.scroll.y
					}
				})
			})
		}
	}
</script>





