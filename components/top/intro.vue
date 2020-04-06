<template>
	<div class="intro-container section-container">
		<topbar/>
		<description/>
		<!-- <thumbs-down/> -->
	</div>
</template>

<style lang="stylus" scoped>
	.intro-container {
		position relative

		@media screen and (max-width: 600px) {
			text-align left
		}
	}
</style>

<script>
	import squares from '~/components/canvas/squares'

	import topbar from '~/components/top/topbar'
	import description from '~/components/top/description'
	import thumbsDown from '~/components/top/thumbs-down'

	export default {
		name: 'intro',
		props: ['data'],
		components: {
			squares,
			topbar,
			description,
			'thumbs-down': thumbsDown
		}
	}
</script>
