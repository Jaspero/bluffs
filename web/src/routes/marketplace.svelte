<script>
    import Header from "../lib/Header.svelte";
    import Buff from "../lib/Buff.svelte";

    let buffs = [
        {buffName: 'Buff Name', lowestPrice: 4.99, listings: 10, tier: 'rare'},
        {buffName: 'Buff Name', lowestPrice: 4.99, listings: 10, tier: 'common'},
        {buffName: 'Buff Name', lowestPrice: 4.99, listings: 10, tier: 'epic'},
        {buffName: 'Buff Name', lowestPrice: 4.99, listings: 10, tier: 'rare'},
        {buffName: 'Buff Name', lowestPrice: 4.99, listings: 10, tier: 'rare'},
        {buffName: 'Buff Name', lowestPrice: 4.99, listings: 10, tier: 'rare'},
        {buffName: 'Buff Name', lowestPrice: 4.99, listings: 10, tier: 'common'},
        {buffName: 'Buff Name', lowestPrice: 4.99, listings: 10, tier: 'common'},
        {buffName: 'Buff Name', lowestPrice: 4.99, listings: 10, tier: 'legendary'},
        {buffName: 'Buff Name', lowestPrice: 4.99, listings: 10, tier: 'epic'},
    ];
</script>

<style>
    .w-20 {
        width: 20%;
    }
</style>

<Header>Marketplace</Header>

<div class="grid">
    {#each buffs as buff}
        <div class="w-20">
            <Buff  {buff} />
        </div>
    {/each}
</div>