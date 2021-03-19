<script>
    import Header from "$lib/Header.svelte";
    import Pack from "$lib/Pack.svelte";

    let packs = [
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'Rare', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'Common', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'Epic', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'Rare', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'Rare', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'Rare', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'Common', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'Common', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'Legendary', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'Epic', id: 'single'},
    ];
</script>

<style>

</style>

<Header>Packs</Header>

<div class="grid">
    {#each packs as pack}
        <Pack {pack} />
    {/each}
</div>