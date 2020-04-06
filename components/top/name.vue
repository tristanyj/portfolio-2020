<template>
	<div class="name-container" @mouseenter="onHoverName" data-number="4" data-icon="thumbs">
		<nuxt-link to="/">
			<span class="job">web developer</span>
			<span class="name">tristan lanoye</span>
		</nuxt-link>
	</div>
</template>

<style lang="stylus" scoped>
	.name-container {
		position relative

		@media screen and (max-width: 500px) {
			margin-bottom 30px
		}

		a {
			text-align left
			letter-spacing -0.2px

			.job {
				display block
				margin-bottom 10px
				font-size 12px
				opacity 0.5
			}

			.name {
				font-family 'Circular Medium'
				display block
				font-size 18px
			}

			@media screen and (max-width: 500px) {
				text-align center
			}
		}
	}
</style>

<script>
	import Explosion from '@/assets/scripts/Explosion'

	export default {
		name: 'name',
		methods: {
			explode(number, type, container) {
				new Explosion({
					el: container,
					icons: [
						{
							name: type,
							number
						}
					]
				})
			},
			onHoverName(e) {
				const target = e.currentTarget
				const type = target.dataset.icon
				const number = parseInt(target.dataset.number)

				this.explode(number, type, target)
			}
		}
	}
</script>
