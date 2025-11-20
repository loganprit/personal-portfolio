<script lang="ts">
	let { label = 'Tech' } = $props<{ label?: string }>();
</script>

<span
	class="inline-flex items-center rounded-md border border-(--border) bg-(--card) px-2.5 py-1 text-xs text-(--fg) shadow-(--shadow)"
>
	{label}
</span>
