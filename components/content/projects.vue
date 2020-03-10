<template>
	<div class="projects-container">
		<project v-for="(project, i) in projects" :key="i + Math.random()" :data="project"/>
	</div>
</template>

<style lang="stylus" scoped>
	.projects-container {
		margin-top 200px
	}
</style>

<script>
	import { mapGetters } from 'vuex'

	import project from '~/components/content/project'

	export default {
		name: 'projects',
		components: {
			project
		},
		computed: {
			...mapGetters({
				projects: 'GET_PROJECTS'
			})
		}
	}
</script>
