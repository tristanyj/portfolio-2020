<template>
	<div class="project-container section-container">
		<div :class="['project-content', 'animation-wrapper', data.status === 'released' ? '' : 'soon' ]">
			<a ref="projectWrapper" target="_blank" v-if="data.status === 'released'" :href="data.link" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" class="project-wrapper">
				<div ref="number"
					:class="['number', index % 2 === 0 ? 'on-the-left' : 'on-the-right']"
					:style="{
						top: data.number.top !== undefined ? `${ data.number.top }%` : '',
						bottom: data.number.bottom !== undefined ? `${ data.number.bottom }%` : '',
						left: data.number.left !== undefined ? `${ data.number.left }%` : '',
						right: data.number.right !== undefined ? `${ data.number.right }%` : '' }">
					<span>{{ index }}</span>
				</div>
				<div class="content" data-scroll data-scroll-speed="2">
					<div ref="imageContainer" class="image-container">
						<div class="details-container" :class="[index % 2 === 0 ? 'on-the-right': 'on-the-left']">
							<div class="details-wrapper" data-scroll data-scroll-speed="3">
								<div class="year-container">
									<div class="year">{{ data.date }}</div>
								</div>
								<div class="type-container">
									<div class="type">{{ data.label }}</div>
								</div>
								<div class="description-container">
									<div class="description">{{ data.description }}</div>
								</div>
							</div>
						</div>
						<div ref="canvasContainer" class="canvas-wrapper">
							<canvas-el :index="index" :hover="hover" :images="data.cover"/>
						</div>
						<img :src="data.cover[0].src" alt="">
					</div>
					<div class="marquee-container">
						<marquee-text ref="marquee" class="marquee-container-component" :data="data.tech"/>
					</div>
					<div class="title-container">
						<span ref="title" class="title">{{ data.title }}</span>
					</div>
				</div>
			</a>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.animation-wrapper {
		opacity 0
	}

	.project-container {
		position relative
		display flex
		justify-content center
		align-items center
		width 100%
		max-width 600px

		&:last-child {
			margin-bottom 0
		}

		.project-content {
			position relative
			padding 40px 0
			width 100%

			.project-wrapper {
				display	inline-block
				position relative
				width 100%
				text-align left

				.number {
					position absolute
					transform translate(-50%, -50%)
					font-size 450px
					opacity 0.25
					font-family 'Bagnard'
					pointer-events none
					overflow hidden

					&.on-the-left {
						@media screen and (max-width: 1600px) {
							right initial !important
							left 100% !important
							transform translate(-50%, -50%)
						}
					}

					&.on-the-right {
						@media screen and (max-width: 1600px) {
							left initial !important
							right 100% !important
							transform translate(50%, -50%)
						}
					}

					@media screen and (max-width: 1000px) {
						display none
					}

					span {
						display	inline-block
						transition all 0.3s cubic-bezier(.5, 0, 0, 1)
					}
				}

				.image-container {
					position relative
					width 100%
					height 100%

					.details-container {
						position absolute
						top 50px
						width 320px
						pointer-events none

						.details-wrapper {
							display flex
							flex-direction column
						}

						&.on-the-left {
							right calc(100% + 150px)

							.details-wrapper {
								justify-content flex-end
								text-align right
							}

							@media screen and (max-width: 1400px) {
								right calc(100% + 130px)
							}

							@media screen and (max-width: 1300px) {
								top calc(100% + 130px)
								right initial
								left 0

								.details-wrapper {
									text-align left
								}
							}
						}

						&.on-the-right {
							left calc(100% + 150px)

							.details-wrapper {
								justify-content flex-start
								text-align left
							}

							@media screen and (max-width: 1400px) {
								left calc(100% + 130px)
							}

							@media screen and (max-width: 1300px) {
								top calc(100% + 130px)
								right initial
								left 0

								.details-wrapper {
									text-align left
								}
							}
						}

						.year-container {
							margin-bottom 12px

							.year {
								font-family 'Circular Book'
								font-size 14px
								opacity 0.7
								transform translateX(-20px)
								opacity 0
								transition all 0.2s cubic-bezier(.5, 0, 0, 1), opacity 0.1s ease
							}
						}

						.type-container {
							margin-bottom 30px

							.type {
								font-family 'Circular Bold'
								opacity 0.9
								font-size 12px
								text-transform uppercase
								transform translateX(-20px)
								opacity 0
								transition all 0.2s cubic-bezier(.5, 0, 0, 1) 0.05s, opacity 0.1s ease
							}
						}

						.description-container {
							.description {
								font-family 'Circular Book'
								line-height 180%
								font-size 16px
								opacity 0
								transform translateX(-20px)
								transition all 0.2s cubic-bezier(.5, 0, 0, 1) 0.1s, opacity 0.1s ease
							}
						}
					}

					.canvas-wrapper {
						position absolute
						top 50%
						left 50%
						width calc(100% + 150px)
						height calc(100% + 150px)
						transform translate(-50%, -50%)
						z-index 1000
					}

					img {
						position relative
						width 100%
					}
				}

				.title-container {
					overflow hidden

					.title {
						display inline-block
						text-transform uppercase
						position relative
						right 2px
						width 100%
						font-family 'Young'
						font-size 58px
						line-height 100%
						margin-top 10px
						transition all 0.3s cubic-bezier(.5, 0, 0, 1) 0.15s

						@media screen and (max-width: 600px) {
							font-size 36px
						}
					}
				}

				&.active {
					.number {
						span {
							opacity 0
						}
					}

					.image-container {
						.details-container {
							pointer-events all

							.year {
								opacity 0.7
								transform translateX(0)
								transition all 0.8s cubic-bezier(.5, 0, 0, 1) 0s
							}

							.type {
								opacity 9
								transform translateX(0)
								transition all 0.8s cubic-bezier(.5, 0, 0, 1) 0.05s
							}

							.description {
								opacity 0.7
								transform translateX(0)
								transition all 0.8s cubic-bezier(.5, 0, 0, 1) 0.1s
							}
						}

						.canvas-wrapper {
							.canvas-container {
								transform scale(1, 1) translate(-50%, -50.05%)
							}
						}
					}

					.title-container {
						.title {
							opacity 0
							pointer-events none
							transition all 0.3s cubic-bezier(.5, 0, 0, 1)
						}
					}
				}
			}
		}
	}
</style>

<script>
	import { TimelineLite } from 'gsap'

 	import marqueeText from '@/components/utils/marquee'
	import canvasContainer from '@/components/canvas'

	export default {
		name: 'project',
		props: ['data', 'index'],
		data() {
			return {
				hover: false
			}
		},
		components: {
			'marquee-text': marqueeText,
			'canvas-el': canvasContainer
		},
		methods: {
			onMouseEnter() {
				this.hover = true

				this.$refs.projectWrapper.classList.add('active')
			},
			onMouseLeave() {
				this.hover = false

				this.$refs.projectWrapper.classList.remove('active')
			}
		}
	}
</script>
