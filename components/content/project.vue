<template>
	<div class="project-container section-container" data-scroll :data-scroll-speed="0" data-scroll-call="inview">
		<div :class="['project-content', data.status === 'released' ? '' : 'soon' ]">
			<a v-if="data.status === 'released'" :href="data.link" class="project-wrapper">
				<div class="number" :style="{ top: data.number.top !== undefined ? `${ data.number.top }%` : '', bottom: data.number.bottom !== undefined ? `${ data.number.bottom }%` : '', left: data.number.left !== undefined ? `${ data.number.left }%` : '', right: data.number.right !== undefined ? `${ data.number.right }%` : '' }">
					<span>{{ index }}</span>
				</div>
				<div class="content" data-scroll :data-scroll-speed="data.number.speed">
					<img :src="data.cover.src" alt="">
					<marquee-text class="marquee-container-component" :data="data.tech"/>
					<span class="title">{{ data.title }}</span>
				</div>
			</a>

			<!-- <div v-else-if="data.status === 'soon'" class="title-container" data-scroll data-scroll-call="inview">
				<span class="title">{{ data.title }}</span>
				<marquee-text class="marquee-container-component" :data="data.tech"/>
				<div class="coming-soon">Coming Soon</div>
			</div> -->
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.project-container {
		position relative
		display flex
		justify-content center
		align-items center
		width 600px

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

					span {
						display	inline-block
					}
				}

				img {
					position relative
					width 100%
				}

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
				}

				// .coming-soon {
				// 	position absolute
				// 	bottom 100%
				// 	right 6px
				// 	font-size 14px
				// 	opacity 0.6
				// 	font-family 'Circular Book'
				// 	padding-bottom 5px
				// 	color #000
				// 	-webkit-text-stroke-width 0px
				// 	-webkit-text-stroke-color black
				// }

				// &:before {
				// 	content	''
				// 	position absolute
				// 	top 50%
				// 	left 10px
				// 	width calc(100% - 14px)
				// 	height 30px
				// 	transform translateY(-20%)
				// 	background #000
				// 	opacity 0
				// }

				// &:hover {
				// 	.title {
				// 		color #000
				// 		-webkit-text-stroke-width 1px
				// 		-webkit-text-stroke-color black
				// 	}
				// }
			}

			// &.soon {
			// 	.title-container {
			// 		.title {
			// 			opacity 0.1
			// 		}

			// 		&:before {
			// 			opacity 0.05
			// 		}
			// 	}

			// 	.marquee-container-component {
			// 		opacity 0.5
			// 	}
			// }
		}

		&.active {
			.project-content {
				.title-container {
					.title {
						// color #000
						// -webkit-text-stroke-width 1px
						// -webkit-text-stroke-color black


					}
				}

				// &.soon {
				// 	.title-container {
				// 		.title {
				// 			color #black
				// 			opacity 0.045
				// 		}
				// 	}
				// }
			}
		}
	}
</style>

<script>
	import marqueeText from '~/components/utils/marquee'

	export default {
		name: 'project',
		props: ['data', 'index'],
		components: {
			'marquee-text': marqueeText
		}
	}
</script>
