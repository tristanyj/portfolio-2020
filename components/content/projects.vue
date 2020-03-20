<template>
	<div class="projects-container">
		<project v-for="(project, i) in data" :key="i + Math.random()" :data="project"/>
	</div>
</template>

<style lang="stylus" scoped>
	.projects-container {

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
