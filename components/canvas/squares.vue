<template>
	<div class="squares-container">
		<square v-for="(square, i) in data" :key="i + Math.random()" :data="square"/>
	</div>
</template>

<style lang="stylus" scoped>
	.squares-container {
		position absolute
		top 0
		left 0
		width 100%
		height 100%
	}
</style>

<script>
	import square from '~/components/canvas/square'

	export default {
		name: 'squares',
		props: ['data'],
		components: {
			square
		}
	}
</script>
