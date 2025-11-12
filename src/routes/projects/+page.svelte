<script lang="ts">
	import { projects } from '$lib/content';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<h1 class="text-2xl font-semibold">Projects</h1>
<p class="mt-2 text-(--fg-muted)">A selection of work and experiments.</p>

<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{#each projects as p (p.title)}
		<ProjectCard
			title={p.title}
			description={p.description}
			tags={p.tags}
			links={p.links}
			image={p.image}
		/>
	{/each}
</div>
