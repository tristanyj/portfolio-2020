<template>
	<div class="topbar-container" data-scroll data-scroll-speed="0">
		<div class="animation-wrapper">
			<div class="left">
				<name/>
			</div>
			<div class="right">
				<socials/>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.topbar-container {
		margin-bottom 160px

		@media screen and (max-height: 800px) {
			margin-bottom 140px
		}

		@media screen and (max-width: 800px) {
			margin-bottom 100px
		}

		@media screen and (max-width: 600px) {
			margin-bottom 80px
		}

		.animation-wrapper {
			opacity 0
			position relative
			display	flex
			align-items flex-end
			font-family 'Circular Book'
		}

		.left {
			display flex
			justify-content flex-end
			flex 1
			padding-right 10px
		}

		.right {
			display flex
			justify-content flex-start
			flex 1
			padding-left 10px
		}

		@media screen and (max-width: 500px) {
			.animation-wrapper {
				flex-direction column
				justify-content center
				align-items center

				.left {
					padding-right 0
				}

				.right {
					padding-left 0
				}
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

