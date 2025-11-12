<script lang="ts">
	let { label = 'Tech' } = $props<{ label?: string }>();
</script>

<span
	class="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--card)] px-2.5 py-1 text-xs text-[var(--fg)] shadow-[var(--shadow)]"
>
	{label}
</span>
