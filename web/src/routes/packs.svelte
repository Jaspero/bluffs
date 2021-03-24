<script>
    import Header from "$lib/Header.svelte";
    import Pack from "$lib/Pack.svelte";

    let packs = [
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'rare', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'common', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'epic', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'rare', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'rare', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'rare', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'common', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'common', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'legendary', id: 'single'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'epic', id: 'single'},
    ];
</script>

<Header>Packs</Header>

<div class="grid">
    {#each packs as pack}
        <div class="col-3 col-s-4 col-xs-6">
            <Pack {pack} />
        </div>
    {/each}
</div>