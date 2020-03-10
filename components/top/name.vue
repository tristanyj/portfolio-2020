<template>
	<div class="name-container">
		<a href="https://tristan-lanoye.com" target="_blank">
			<span class="job">web developer</span>
			<span class="name">tristan lanoye</span>
		</a>
	</div>
</template>

<style lang="stylus" scoped>
	.name-container {
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
		}
	}
</style>

<script>
	export default {
		name: 'name'
	}
</script>
