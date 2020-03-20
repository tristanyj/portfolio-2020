<template>
	<div class="intro-container section-container">
		<squares :data="data.squares"/>
		<topbar/>
		<description/>
		<thumbs-down/>
	</div>
</template>

<style lang="stylus" scoped>
	.intro-container {
		position relative
		display flex
		flex-direction column
		justify-content space-between
		height calc(100vh - 100px)
		padding-top 25px
		padding-bottom 150px
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
