<script lang="ts">
	let theme = $state<'light' | 'dark'>('light');

	function applyTheme(t: 'light' | 'dark') {
		document.documentElement.dataset.theme = t;
		localStorage.setItem('theme', t);
		theme = t;
	}

	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem('theme');
		if (saved === 'light' || saved === 'dark') {
			applyTheme(saved);
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			applyTheme(prefersDark ? 'dark' : 'light');
		}
	}

	function toggle() {
		applyTheme(theme === 'dark' ? 'light' : 'dark');
	}
</script>

<button
	type="button"
	class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--fg)] shadow-[var(--shadow)] transition-shadow duration-200 hover:shadow-[var(--shadow-hover)]"
	aria-label="Toggle theme"
	onclick={toggle}
>
	{#if theme === 'dark'}
		<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	{:else}
		<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
			<path
				d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zm9.9 12.02l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM12 4V1h-0v3h0zm0 19v-3h-0v3h0zM4 12H1v0h3v0zm22 0h-3v0h3v0zM6.76 19.16l-1.8 1.79 1.79 1.79 1.79-1.79-1.79-1.79zM17.24 4.84l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"
			/>
		</svg>
	{/if}
</button>
