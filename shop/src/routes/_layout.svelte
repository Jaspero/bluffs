<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		max-width: 1200px;
		background-color: white;
		padding-top: 2em;
		margin: 0 auto;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>