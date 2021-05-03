<script>
    import Nav from "../lib/Nav.svelte";
    import Footer from "../lib/Footer.svelte";
</script>

<style>
    main {
        min-height: calc(100vh - 500px - 3rem);
    }
</style>

<svelte:head>
    <title>Bluffs</title>
</svelte:head>

<Nav />

<main>
    <slot></slot>
</main>

<Footer />