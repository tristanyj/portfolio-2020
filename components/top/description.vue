<template>
	<div class="description-container" data-scroll data-scroll-speed="1">
		<!-- <svg class="distort" width="350" height="450" viewBox="0 0 350 450">
			<filter id="distortionFilter">
				<feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="5" seed="2" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="noise"/>
				<feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"/>
			</filter>
			<g filter="url(#distortionFilter)">
				<image class="distort__img" x="50" y="50" xlink:href="images/me-1.jpg" height="350" width="250"/>
				<image class="distort__img" x="50" y="50" xlink:href="images/filter-developer-1.gif" height="350" width="250"/>
				<image class="distort__img" x="50" y="50" xlink:href="images/filter-generative.gif" height="350" width="250"/>
				<image class="distort__img" x="50" y="50" xlink:href="images/filter-projects.gif" height="350" width="250"/>
			</g>
		</svg> -->
		<div class="description">
			<div class="line" data-scroll data-scroll-speed="1.25">
				Hi, I’m <strong class="quote__link">Tristan</strong>, a web <strong class="quote__link">developer</strong> based in Paris.
			</div>
			<div class="line" data-scroll data-scroll-speed="1.75">
				I work mostly with Vuejs & <strong>Nuxtjs</strong>, and Headless CMSs like <strong>Prismic</strong>.
			</div>
			<div class="line" data-scroll data-scroll-speed="2.25">
				I’m interested in <strong>creative coding</strong> and particularly <strong class="quote__link">generative art.</strong>
			</div>
			<div class="line" data-scroll data-scroll-speed="2.75">
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

				&.quote__link {
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
	}
</style>

<script>
	export default {
		name: 'description'
	}
</script>
