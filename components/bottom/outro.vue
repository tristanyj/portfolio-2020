<template>
	<div class="outro-container section-container">
		<contact/>
		<bye/>
	</div>
</template>

<style lang="stylus" scoped>
	.outro-container {
		position relative
		display flex
		flex-direction column
		justify-content center
		height calc(100vh - 100px)
		padding-top 200px
	}
</style>

<script>
	import contact from '~/components/bottom/contact'
	import bye from '~/components/bottom/bye'

	import squares from '~/components/canvas/squares'

	export default {
		name: 'outro',
		props: ['data'],
		components: {
			contact,
			bye,
			squares
		}
	}
</script>
