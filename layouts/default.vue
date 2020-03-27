<template>
	<div class="__layout-wrapper main">
		<!-- <loading/>
		<div class="overlay"></div> -->
		<nuxt/>
	</div>
</template>

<script>
	// import canvasTemp from '~/components/canvas-temp'
	// import loading from '~/components/loading'

	export default {
		components: {
			// loading,
			// canvasTemp
		}
	}
</script>

<style lang="stylus">
	html {
		font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
		font-size 16px
		word-spacing 1px
		-ms-text-size-adjust 100%
		-webkit-text-size-adjust 100%
		-moz-osx-font-smoothing grayscale
		-webkit-font-smoothing antialiased
		box-sizing border-box
	}

	.__layout-wrapper {
		background hsl(0, 40%, 95%)
		transition 0.3s background ease

		.overlay {
			position fixed
			top 0
			left 0
			width 100%
			height 100%
			background rgba(0, 0, 0, 0.7)
		}
	}

	*,
	*:before,
	*:after {
		box-sizing border-box
		margin 0
	}
</style>
