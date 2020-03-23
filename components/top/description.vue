<template>
	<div class="description-container" data-scroll data-scroll-speed="1">
		<div class="description">
			<div class="line">
				Hi, I’m <strong>Tristan</strong>, a web developer based in Paris.
			</div>
			<div class="line">
				I work mostly with <strong>Vuejs & Nuxtjs</strong>, Reactjs or Wordpress.
			</div>
			<div class="line">
				I’m interested in <strong>creative coding</strong> and particularly generative art.
			</div>
			<div class="line">
				Here are some of my <strong>projects</strong>.
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.description-container {
		padding-bottom 40px
		font-family 'Circular Book'

		@media screen and (max-width: 500px) {
			margin-top 80px
			padding 0 30px
			line-height 180%
		}

		.line {
			line-height 310%
			// opacity 0.75
			font-size 16px

			strong {
				font-family 'Circular Bold'
			}
		}
	}
</style>

<script>
	export default {
		name: 'description'
	}
</script>
