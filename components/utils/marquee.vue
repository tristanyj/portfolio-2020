<template>
	<div class="marquee-container">
		<client-only>
			<marqueeText :repeat="10" :duration="10">
				<span class="word" v-for="(tech, i) in data" :key="Math.random() * i">{{ tech }}</span>
			</marqueeText>
		</client-only>
	</div>
</template>

<style lang="stylus" scoped>
	.marquee-container {
		position absolute
		top calc(100%)
		left 50%
		width 97%
		transform translateX(-50%)
		overflow-x hidden
		padding-top 20px

		div {
			font-size 14px
			// opacity 0.75
			font-family 'Circular Book'
			padding-bottom 5px
			color black
			-webkit-text-fill-color black /* Will override color (regardless of order) */
			-webkit-text-stroke-width 0px
			-webkit-text-stroke-color black
		}

		span {
			margin 0 10px
		}
	}
</style>

<script>
	let MarqueeText
	if(process.client) MarqueeText = require('vue-marquee-text-component')

	export default {
		name: 'marquee-text',
		props: ['data'],
		components: {
			MarqueeText
		}
	}
</script>
