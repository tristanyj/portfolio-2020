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
		padding-top 200px

		@media screen and (max-width: 1000px) {
			padding-top 140px
		}
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
