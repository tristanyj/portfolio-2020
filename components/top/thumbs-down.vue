<template>
	<div class="thumbs-container">
		<img src="~/assets/images/point-down.png" alt="" data-scroll data-scroll-speed="4">
	</div>
</template>

<style lang="stylus" scoped>
	.thumbs-container {
		position relative
		padding-bottom 70px

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
