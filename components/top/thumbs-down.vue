<template>
	<div class="thumbs-container">
		<div class="animation-wrapper">
			<img src="~/assets/images/point-down.png" alt=""/>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.thumbs-container {
		position relative
		padding-bottom 20px
		pointer-events none

		.animation-wrapper {
			opacity 0
		}

		img {
			width 26px
			opacity 1
			margin 0 auto
		}
	}
</style>

<script>
	export default {
		name: 'thumbs-down'
	}
</script>
