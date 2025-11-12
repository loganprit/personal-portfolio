<script lang="ts">
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<nav
	class="sticky top-0 z-50 w-full border-b border-(--border) bg-(--bg)/70 backdrop-blur"
>
	<div class="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
		<a href="/" class="font-semibold tracking-tight text-(--fg)">Dev Portfolio</a>

		<div class="flex items-center gap-6">
			<a href="/" class="text-sm text-(--fg-muted) hover:text-(--fg)">Home</a>
			<a href="/projects" class="text-sm text-(--fg-muted) hover:text-(--fg)">Projects</a>
			<a
				href="mailto:hello@example.com"
				class="text-sm text-(--fg-muted) hover:text-(--fg)">Contact</a
			>
			<ThemeToggle />
		</div>
	</div>
</nav>
