<template>
	<div class="bye-container" data-scroll data-scroll-speed="0">
		<div class="bye">
			<span>Have a good day</span>
			<img src="~/assets/images/waving-hand.png" alt="">
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.bye-container {
		margin-top 180px

		.bye {
			display flex
			justify-content center
			align-items center
			font-family 'Circular Book'
			font-size 12px

			span {
				position relative
				top 4px
				display inline-block
				margin-right 20px
				opacity 0.6
			}

			img {
				width 30px
				animation waveHand 0.5s infinite
				transform-origin 100% 100%
			}
		}

		@keyframes waveHand {
			0% {
				transform rotate(-20deg)
			}

			50% {
				transform rotate(20deg)
			}

			100% {
				transform rotate(-20deg)
			}
		}
	}
</style>

<script>
	export default {
		name: 'bye'
	}
</script>
