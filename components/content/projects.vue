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

			&:first-child {
				justify-content center
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
