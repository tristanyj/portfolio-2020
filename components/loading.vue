<template>
	<div class="loading-container" ref="loading" :style="{ background: `hsl(0, ${ sColor }%, 95%)` }">
		<div class="progress-wrapper">
			<div class="number">
				{{ current }}
				<div class="cache" :style="{ background: `hsl(0, ${ sColor }%, 95%)` }"></div>
			</div>
			<div class="bar">
				<div class="inner-bar"></div>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.loading-container {
		display flex
		justify-content center
		align-items center
		position fixed
		top 0
		left 0
		width 100%
		height 100%
		background #fff
		z-index 1000

		img {
			visibility hidden
			width 0
		}

		.progress-wrapper {
			display flex
			flex-direction column
			justify-content center
			align-items center
			width 50px
			opacity 0

			.number {
				position relative
				margin-bottom 5px
				width 100%
				text-align center

				.cache {
					position absolute
					top 0
					left 0
					width 100%
					height 100%
					transform-origin 0% 50%
					transform scaleX(0)
				}
			}

			.bar {
				width 100%
				height 5px

				.inner-bar {
					width 100%
					transform-origin 0% 50%
					transform scaleX(0)
					background #000
					height 100%
				}
			}
		}
	}
</style>

<script>
	import { TweenLite, TimelineLite } from 'gsap'
	import { mapGetters } from 'vuex'

	import imagesLoaded from 'imagesloaded'

	export default {
		name: 'loading-container',
		data() {
			return {
				sColor: 0,
				loaded: 0,
				progress: {
					to: 0,
					current: 0
				}
			}
		},
		computed: {
			current() {
				return this.progress.current.toFixed(0)
			}
		},
		methods: {
			emitEvent() {
				const tl = new TimelineLite({
					onComplete: () => {
						this.$refs.loading.style.display = 'none'
						this.$nuxt.$emit('FINISHED_LOADING')
					}
				})

				tl.set('.inner-bar', { transformOrigin: '100% 50%' })
				tl.to('.cache', 0.8, { scaleX: 1, ease: Power2.easeOut }, 0)
				tl.to('.inner-bar', 0.8, { scaleX: 0, ease: Power2.easeOut }, 0)

			},
			loop() {
				this.progress.current += (this.progress.to - this.progress.current) / 10
				this.sColor = this.progress.current / 100 * 40

				if(this.progress.current >= 99.9) {
					this.progress.current = 100
					this.emitEvent()
				} else {
					this.line.style.transform = `scaleX(${this.progress.current / 100})`

					window.requestAnimationFrame(this.loop)
				}
			}
		},
		mounted() {
			this.container = document.querySelector('.loading-container')
			this.line = document.querySelector('.inner-bar')

			const container = document.querySelector('.container-index')
			const imgLoad = imagesLoaded(container, { background: true })

			imgLoad.on('progress', (instance, image) => {
				this.loaded++
				this.progress.to = this.loaded / instance.images.length * 100
			})

			window.setTimeout(() => {
				TweenLite.to('.progress-wrapper', 0.2, { opacity: 1 })
			}, 400)

			this.loop()
		}
	}
</script>
