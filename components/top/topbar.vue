<template>
	<div class="topbar-container" data-scroll data-scroll-speed="0">
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
		align-items flex-end
		font-family 'Circular Book'

		@media screen and (max-width: 500px) {
			flex-direction column
			justify-content center
			align-items center
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

