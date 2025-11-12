<script lang="ts">
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="color-scheme" content="light dark" />
</svelte:head>

<div
	class="min-h-dvh bg-(--bg) text-(--fg) selection:bg-(--accent)/30 selection:text-(--fg)"
>
	<Navbar />
	<main class="mx-auto max-w-6xl px-4 py-10">{@render children()}</main>
	<Footer />
</div>
