<template>
	<div class="contact-container">
		<div class="line line-1" data-scroll data-scroll-speed="-2.5">I’m looking for an internship from July 2020 to december 2020.</div>
		<div class="line" data-scroll data-scroll-speed="-1.5">
			You can contact me on
			<a :href="socials[1].link" target="_blank" @mouseenter="onHoverSocial" data-number="4" data-icon="twitter" class="big">Twitter</a>,
			<a :href="socials[2].link" target="_blank" @mouseenter="onHoverSocial" data-number="4" data-icon="linkedin" class="big">Linkedin</a> or by
			<a :href="socials[3].link" target="_blank" @mouseenter="onHoverSocial" data-number="4" data-icon="mail" class="big">Mail</a>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.contact-container {
		@media screen and (max-width: 600px) {
			text-align left
		}

		.line {
			font-family 'Circular Book'
			font-size 32px

			&.line-1 {
				margin-bottom 75px
			}

			.big {
				position relative
				font-family 'Young'
				font-size 48px
			}

			@media screen and (max-width: 1200px) {
				font-size 24px
				line-height 170%
				margin-bottom 30px

				&.line-1 {
					margin-bottom 50px
				}

				.big {
					font-size 40px
				}
			}

			@media screen and (max-width: 1000px) {
				bottom 0 !important

				&.line-1 {
					margin-bottom 30px
				}

				.big {
					font-size 32px
				}
			}

			@media screen and (max-width: 600px) {
				font-size 18px

				.big {
					font-size 28px
				}
			}
		}
	}
</style>

<script>
	import { mapGetters } from 'vuex'

	import Explosion from '~/assets/scripts/Explosion'

	export default {
		name: 'contact',
		computed: {
			...mapGetters({
				socials: 'GET_SOCIALS'
			})
		},
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
			onHoverSocial(e) {
				const target = e.currentTarget
				const type = target.dataset.icon
				const number = parseInt(target.dataset.number)

				this.explode(number, type, target)
			}
		}
	}
</script>
