<template>
	<div class="__layout-wrapper main">
		<loading/>
		<nuxt/>
	</div>
</template>

<script>
	import loading from '~/components/loading'

	export default {
		components: {
			loading
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
	}

	*,
	*:before,
	*:after {
		box-sizing border-box
		margin 0
	}
</style>
