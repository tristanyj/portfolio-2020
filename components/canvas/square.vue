<template>
	<div class="square-container" :style="{ top: `${ data.position.top }%`, left: `${ data.position.left }%` }">
		<div class="canvas-wrapper" data-scroll :data-scroll-speed="data.speed" :style="{ width: `${ data.size.width }px`, height: `${ data.size.height }px` }">
			<div class="canvas-container">
				<canvas></canvas>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.square-container {
		position absolute
		transform translate(-50%, -50%)

		.canvas-wrapper {
			width 200px
			height 300px
			background #ccc
			border-radius 5px

			.canvas-container {
				canvas {

				}
			}
		}
	}
</style>

<script>
	export default {
		name: 'square',
		props: ['data'],
		methods: {
			onClick() {
				console.log('click')
			}
		}
	}
</script>
