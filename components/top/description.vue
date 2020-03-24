<template>
	<div class="description-container" data-scroll data-scroll-speed="1">
		<svg class="distort" width="350" height="450" viewBox="0 0 350 450">
			<filter id="distortionFilter">
				<feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="5" seed="2" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="noise"/>
				<feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"/>
			</filter>
			<g filter="url(#distortionFilter)">
				<image class="distort__img" x="50" y="50" xlink:href="images/me-1.jpg" height="350" width="250"/>
				<image class="distort__img" x="50" y="50" xlink:href="images/b2.jpg" height="350" width="250"/>
				<image class="distort__img" x="50" y="50" xlink:href="images/b3.jpg" height="350" width="250"/>
				<image class="distort__img" x="50" y="50" xlink:href="images/b4.jpg" height="350" width="250"/>
			</g>
		</svg>
		<div class="description">
			<div class="line">
				Hi, I’m <strong class="quote__link">Tristan</strong>, a web developer based in Paris.
			</div>
			<div class="line">
				I work mostly with <strong class="quote__link">Vuejs & Nuxtjs</strong>, Reactjs or Wordpress.
			</div>
			<div class="line">
				I’m interested in <strong class="quote__link">creative coding</strong> and particularly generative art.
			</div>
			<div class="line">
				Here are some of my <strong class="quote__link">projects</strong>.
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.description-container {
		font-family 'Circular Book'

		.distort {
			position absolute
			pointer-events none
			will-change transform
			// border 1px solid red
		}

		.distort__img {
			opacity: 0;
		}

		.line {
			line-height 230%
			font-size 32px

			strong {
				position relative
				font-family 'Circular Bold'

				&:before {
					content ''
					position absolute
					top 101%
					left 50%
					width 98%
					transform translateX(-50%)
					height 3px
					background black
				}
			}
		}
	}
</style>

<script>
	export default {
		name: 'description'
	}
</script>
