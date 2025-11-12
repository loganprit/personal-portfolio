<script lang="ts">
	type Links = { demo?: string; repo?: string };
	let {
		title,
		description,
		tags = [],
		links = {},
		image
	} = $props<{
		title: string;
		description: string;
		tags?: string[];
		links?: Links;
		image?: string;
	}>();
</script>

<article
	class="group overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-hover)]"
>
	{#if image}
		<img
			src={image}
			alt="{title} screenshot"
			class="h-44 w-full object-cover"
			loading="lazy"
			decoding="async"
		/>
	{/if}
	<div class="p-4">
		<h3 class="font-medium text-[var(--fg)]">{title}</h3>
		<p class="mt-1 text-sm text-[var(--fg-muted)]">{description}</p>
		{#if tags.length}
			<div class="mt-3 flex flex-wrap gap-2">
				{#each tags as t (t)}
					<span
						class="rounded border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--fg-muted)]"
						>{t}</span
					>
				{/each}
			</div>
		{/if}
		{#if links.demo || links.repo}
			<div class="mt-4 flex items-center gap-4 text-sm">
				{#if links.demo}
					<a href={links.demo} class="text-[var(--accent)] hover:underline">Live</a>
				{/if}
				{#if links.repo}
					<a href={links.repo} class="text-[var(--accent)] hover:underline">Code</a>
				{/if}
			</div>
		{/if}
	</div>
</article>
