<template>
	<div class="project-container">
		<div class="project-content">
			<div class="title">
				{{ data.title }}
				<mymarquee/>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.project-container {
		margin-bottom 280px

		&:last-child {
			margin-bottom 0
		}

		.project-content {
			display	inline-block
			position relative
			padding 20px 0
			overflow hidden

			.title {
				position relative
				font-family 'Circular Medium'
				font-size 124px
			}
		}
	}
</style>

<script>
	import mymarquee from '~/components/utils/marquee'

	export default {
		name: 'project',
		props: ['data'],
		components: {
			mymarquee
		}
	}
</script>
