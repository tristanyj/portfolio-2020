<template>
	<div class="topbar-container">
		<div class="line"></div>
		<div class="left">
			<name/>
		</div>
		<div class="right">
			<socials/>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.topbar-container {
		position relative
		display	flex
		// justify-content space-between
		align-items flex-end
		font-family 'Circular Book'

		@media screen and (max-width: 500px) {
			flex-direction column
			justify-content center
			align-items center
		}

		.line {
			position absolute
			top calc(100% + 18px)
			left 0
			width 100%
			height 2px
			background black
			transform-origin 0 50%
			opacity 0.0
			z-index 10000

			&.loading {
				transform scaleX(0)
				opacity 0.3
			}
		}

		.left {
			display flex
			justify-content flex-end
			flex 1
			padding-right 10px

			@media screen and (max-width: 500px) {
				margin-bottom 20px
			}
		}

		.right {
			display flex
			justify-content flex-start
			flex 1
			padding-left 10px

			@media screen and (max-width: 500px) {
				// margin-bottom 20px
			}
		}
	}
</style>

<script>
	import socials from '~/components/top/socials'
	import name from '~/components/top/name'

	export default {
		name: 'topbar',
		components: {
			socials,
			name
		}
	}
</script>

