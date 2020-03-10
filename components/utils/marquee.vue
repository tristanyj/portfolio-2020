<template>
	<div class="marquee-container">
		<div class="marquee">
			<span class="word">wordpress</span>
			<span class="word">react</span>
			<span class="word">vuejs</span>
			<span class="word">nuxtjs</span>
			<span class="word">gsap</span>
			<span class="word">prismicio</span>
			<span class="word">wordpress</span>
			<span class="word">react</span>
			<span class="word">vuejs</span>
			<span class="word">nuxtjs</span>
			<span class="word">gsap</span>
			<span class="word">prismicio</span>
			<span class="word">wordpress</span>
			<span class="word">react</span>
			<span class="word">vuejs</span>
			<span class="word">nuxtjs</span>
			<span class="word">gsap</span>
			<span class="word">prismicio</span>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.marquee-container {
		position absolute
		top 105%
		left 50%
		width 97%
		transform translateX(-50%)

		.marquee {
			font-size 13px
			white-space nowrap
			opacity 0.5
			font-family 'Circular Book'

			.word {
				margin 0 10px
			}
		}
	}
</style>

<script>
	export default {
		name: 'mymarquee'
	}
</script>
