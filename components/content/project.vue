<template>
	<div class="project-container section-container">
		<squares :data="data.squares"/>
		<div :class="['project-content', data.status === 'released' ? '' : 'soon' ]">
			<a v-if="data.status === 'released'" :href="data.link" class="title-container" data-scroll data-scroll-call="inview">
				<span class="title">{{ data.title }}</span>
				<marquee-text class="marquee-container-component" :data="data.tech"/>
			</a>
			<div v-else-if="data.status === 'soon'" class="title-container" data-scroll data-scroll-call="inview">
				<span class="title">{{ data.title }}</span>
				<marquee-text class="marquee-container-component" :data="data.tech"/>
				<div class="coming-soon">Coming Soon</div>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.project-container {
		position relative
		display flex
		justify-content center
		align-items center
		height 100vh

		&:last-child {
			margin-bottom 0
		}

		.project-content {
			position relative
			padding 40px 0
			width 100%
			overflow hidden

			.title-container {
				position relative
				display inline-block

				.title {
					font-family 'Circular Medium'
					font-size 124px
					color #fff
					-webkit-text-stroke-width 1px
					-webkit-text-stroke-color black
					transition 0.35s all ease
				}

				.external-link {
					position absolute
					bottom 100%
					right 4px
					opacity 1
					width 16px
					padding-bottom 5px
				}

				.coming-soon {
					position absolute
					bottom 100%
					right 6px
					font-size 14px
					opacity 0.6
					font-family 'Circular Book'
					padding-bottom 5px
					color #000
					-webkit-text-stroke-width 0px
					-webkit-text-stroke-color black
				}

				&:before {
					content	''
					position absolute
					top 50%
					left 10px
					width calc(100% - 14px)
					height 30px
					transform translateY(-20%)
					background #000
					opacity 0
				}

				&:hover {
					.title {
						color #000
						-webkit-text-stroke-width 1px
						-webkit-text-stroke-color black
					}
				}
			}

			&.soon {
				.title-container {
					.title {
						opacity 0.1
					}

					&:before {
						opacity 0.05
					}
				}

				.marquee-container-component {
					opacity 0.5
				}
			}
		}

		&.active {
			.project-content {
				.title-container {
					.title {
						color #000
						-webkit-text-stroke-width 1px
						-webkit-text-stroke-color black


					}
				}

				&.soon {
					.title-container {
						.title {
							color #000
							opacity 0.045
						}
					}
				}
			}
		}
	}
</style>

<script>
	import squares from '~/components/canvas/squares'
	import marqueeText from '~/components/utils/marquee'

	export default {
		name: 'project',
		props: ['data'],
		components: {
			squares,
			'marquee-text': marqueeText
		}
	}
</script>
