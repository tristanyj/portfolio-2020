<template>
	<div class="square-container" :style="{ top: `${ data.position.top }%`, left: `${ data.position.left }%` }">
		<div class="canvas-wrapper" :style="{ width: `${ data.size.width }px`, height: `${ data.size.height }px` }">
			<div class="square-wrapper" data-scroll :data-scroll-speed="data.speed">
				<square-canvas v-if="data.images" :size="data.size" :images="data.images"/>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.square-container {
		position absolute
		transform translate(-50%, -50%)

		.canvas-wrapper {
			.square-wrapper {
				height 100%
				// background #ccc
			}
		}
	}
</style>

<script>
	import canvas from '~/components/canvas/canvas'

	export default {
		name: 'square',
		props: ['data'],
		components: {
			'square-canvas': canvas
		},
		mounted() {
		}
	}
</script>
