<template>
	<div class="contact-container">
		<div class="line line-1" data-scroll data-scroll-speed="-2.5">I’m looking for an internship from July 2020 to december 2020.</div>
		<div class="line" data-scroll data-scroll-speed="-1.5">
			You can contact me on
			<a :href="socials[0].link" target="_blank" class="big">Twitter</a>,
			<a :href="socials[1].link" target="_blank" class="big">Linkedin</a> or by
			<a :href="socials[2].link" target="_blank" class="big">Mail</a>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.contact-container {
		.line {
			font-family 'Circular Book'
			font-size 16px
			opacity 0.75

			&.line-1 {
				margin-bottom 75px
			}

			.big {
				font-family 'Circular Medium'
				font-size 36px
			}
		}
	}
</style>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'contact',
		computed: {
			...mapGetters({
				socials: 'GET_SOCIALS'
			})
		}
	}
</script>
