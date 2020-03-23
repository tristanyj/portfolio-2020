<template>
	<div class="canvas-container">
		<svg ref="svg" class="distort" :width="images[0].size.width" :height="images[0].size.height" :viewBox="[`0 0 ${ images[0].size.width } ${ images[0].size.height }`]">
			<filter :id="[`distortionFilter-${ images[0].size.width }`]">
				<feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="5" seed="2" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="noise"/>
				<feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"/>
			</filter>
			<g :filter="[`url(#distortionFilter-${ images[0].size.width })`]">
				<image v-for="(image, i) in images" :key="i + Math.random()" class="distort__img" x="0" y="0" :xlink:href="image.src" :width="images[0].size.width" :height="images[0].size.height"/>
			</g>
		</svg>
	</div>
</template>

<style lang="stylus" scoped>
	.canvas-container {
		position relative
		height 100%
		overflow hidden

		svg {
			position absolute
			top 50%
			left 50%
			transform translate(-50%, -50%)

			image {
				opacity 0

				&:first-child {
					opacity 1
				}
			}
		}
	}
</style>

<script>
	import Filter from '~/assets/scripts/Filter'

	export default {
		name: 'canvas-container',
		props: ['size', 'images'],
		mounted() {
			if(this.images[1]) {
				const el = this.$refs.svg

				new Filter(el)
			}
		}
	}
</script>
