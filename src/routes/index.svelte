<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Logo from "$lib/logo.svelte";
</script>

<svelte:head>
	<title>Depautio - Unobtrusive habit forming companion</title>
	<meta name="description" content="Unobtrusive habit forming companion" />
</svelte:head>

<section>
	<Logo />
	<h1>
		An unobtrusive habit forming companion to help you get the most out of your days.
	</h1>
	<p>
		Depautio is a companion that helps you form habits that you can stick to and that you can
		achieve that improve your mental health.
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		width: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	h1, p {
		text-align: center;
	}

	p {
		font-size: 1.2em;
		font-family: Akshar;
	}
</style>
