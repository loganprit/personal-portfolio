<script lang="ts">
	let { role, company, dates, summary } = $props<{
		role: string;
		company: string;
		dates: string;
		summary?: string;
	}>();
</script>

<div class="relative pl-8">
	<div
		class="absolute top-2 left-0 h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_0_4px_var(--bg)]"
	></div>
	<div class="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow)]">
		<div class="flex items-center justify-between">
			<h3 class="font-medium text-[var(--fg)]">
				{role} · <span class="text-[var(--fg-muted)]">{company}</span>
			</h3>
			<span class="text-xs text-[var(--fg-muted)]">{dates}</span>
		</div>
		{#if summary}
			<p class="mt-2 text-sm text-[var(--fg-muted)]">{summary}</p>
		{/if}
	</div>
</div>
