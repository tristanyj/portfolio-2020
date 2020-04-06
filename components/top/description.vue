<template>
	<div class="description-container">
		<div class="description">
			<div class="line" data-scroll data-scroll-speed="1.25" :style="{ position: 'relative', bottom: '25px' }">
				<div class="animation-wrapper">
					Hi, I’m
					<strong class="quote__link" data-src="/images/me-1.jpg">
						<div class="underline"></div>
						Tristan<div class="hover-reveal" style="width: 275px; height: 325px;">
							<div class="hover-reveal__inner">
								<div class="hover-reveal__img">
									<div class="img" :style="{ backgroundImage: `url(images/me-1.jpg)` }"></div>
								</div>
							</div>
						</div>
					</strong>, a web
					<strong class="quote__link" data-src="images/filter-developer-1.gif">
						<div class="underline"></div>
						developer<div class="hover-reveal" style="width: 300px; height: 300px;">
							<div class="hover-reveal__inner">
								<div class="hover-reveal__img">
									<div class="img" :style="{ backgroundImage: `url(images/filter-developer-2.gif)` }"></div>
								</div>
							</div>
						</div>
					</strong>
					based in Paris.
				</div>
			</div>
			<div class="line" data-scroll data-scroll-speed="1.75" :style="{ position: 'relative', bottom: '10px' }">
				<div class="animation-wrapper">
					I work mostly with Vuejs & <strong>Nuxtjs</strong>, and Headless CMSs like <strong>Prismic</strong>.
				</div>
			</div>
			<div class="line" data-scroll data-scroll-speed="2.25">
				<div class="animation-wrapper">
					I’m interested in <strong>creative coding</strong> and particularly
					<strong class="quote__link" data-src="images/filter-generative.gif">
						<div class="underline"></div>
						generative art.
						<div class="hover-reveal" style="width: 300px; height: 300px;">
							<div class="hover-reveal__inner">
								<div class="hover-reveal__img">
									<div class="img" :style="{ backgroundImage: `url(images/filter-generative.gif)` }"></div>
								</div>
							</div>
						</div>
					</strong>
				</div>
			</div>
			<div class="line" data-scroll data-scroll-speed="2.75">
				<div class="animation-wrapper">
					Here are some of my
					<strong class="quote__link" data-src="images/filter-projects.gif">
						<div class="underline"></div>
						projects.
						<div class="hover-reveal" style="width: 275px; height: 325px;">
							<div class="hover-reveal__inner">
								<div class="hover-reveal__img">
									<div class="img" :style="{ backgroundImage: `url(images/filter-projects.gif)` }"></div>
								</div>
							</div>
						</div>
					</strong>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.line {
		&:nth-child(1n) {
			z-index 9000
		}

		&:nth-child(2n) {
			z-index 8000
		}

		&:nth-child(3n) {
			z-index 7000
		}

		&:nth-child(4n) {
			z-index 6000
		}
	}

	.hover-reveal {
		position absolute
		top 0
		left 0
		pointer-events none
		opacity 0
		overflow hidden
	}

	.hover-reveal__inner,
	.hover-reveal__img, .img {
		width 100%
		height 100%
		position relative
		overflow hidden
	}

	.hover-reveal__img, .img {
		background-size cover
		background-position 50% 50%
	}

	.description-container {
		font-family 'Circular Book'
		padding-bottom 120px

		@media screen and (max-width: 1000px) {
			padding-bottom 60px
		}

		@media screen and (max-width: 800px) {
			padding-bottom 10px
		}

		@media screen and (max-width: 600px) {
			padding-bottom 0
		}

		.description {}

		.line {
			line-height 230%
			font-size 32px

			@media screen and (max-height: 800px) {
				line-height 200%
			}

			@media screen and (max-width: 1200px) {
				font-size 24px
				line-height 150%
				margin-bottom 30px
			}

			@media screen and (max-width: 1000px) {
				bottom 0 !important
			}

			@media screen and (max-width: 600px) {
				font-size 18px
			}

			.animation-wrapper {
				opacity 0
			}

			strong {
				position relative
				font-family 'Circular Bold'

				&.quote__link {
					position relative

					.underline {
						position absolute
						top 101%
						left 50%
						width 98%
						transform-origin 100% 50%
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
