<template>
	<div class="projects-container">
		<div class="project-wrapper" v-for="(project, index) in data" :key="index"  :style="{ marginBottom: `${ project.margin.bottom }px`, marginTop: `${ project.margin.top}px` }">
			<project :data="project" :index="index + 1"/>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.projects-container {
		width 100%
		max-width 1200px
		margin 0 auto
		padding 0 100px

		@media screen and (max-width: 1600px) {
			padding 0 60px
		}

		.project-wrapper {
			width 100%
			display	flex
			justify-content center
			margin-bottom 360px

			&:nth-child(even) {
				justify-content flex-start
			}

			&:nth-child(odd) {
				justify-content flex-end
			}
		}

		@media screen and (max-width: 1300px) {
			.project-wrapper {
				&:nth-child(even) {
					justify-content center
				}

				&:nth-child(odd) {
					justify-content center
				}

				&:first-child {
					justify-content center
				}
			}
		}

		@media screen and (max-width: 1000px) {
			padding 0

			.project-wrapper {
				justify-content center
				margin-top 75px !important
				margin-bottom 150px !important
			}
		}

		@media screen and (max-width: 600px) {
			.project-wrapper {
				justify-content center
				margin-top 50px !important
				margin-bottom 40px !important
			}
		}
	}
</style>

<script>
	import project from '~/components/content/project'

	export default {
		name: 'projects',
		props: ['data'],
		components: {
			project
		}
	}
</script>
