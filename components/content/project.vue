<template>
	<div class="project-container section-container">
		<div :class="['project-content', 'animation-wrapper', data.status === 'released' ? '' : 'soon' ]">
			<a v-if="data.status === 'released'" :href="data.link" class="project-wrapper">
				<div class="number" :style="{ top: data.number.top !== undefined ? `${ data.number.top }%` : '', bottom: data.number.bottom !== undefined ? `${ data.number.bottom }%` : '', left: data.number.left !== undefined ? `${ data.number.left }%` : '', right: data.number.right !== undefined ? `${ data.number.right }%` : '' }">
					<span>{{ index }}</span>
				</div>
				<div class="content" data-scroll data-scroll-speed="2">
					<img :src="data.cover.src" alt="">
					<marquee-text class="marquee-container-component" :data="data.tech"/>
					<span class="title">{{ data.title }}</span>
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

					@media screen and (max-width: 1000px) {
						// top -20px !important
						// left 50% !important
						// right initial !important
						// bottom initial !important

						display none
					}

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

					@media screen and (max-width: 600px) {
						font-size 36px
					}
				}
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
