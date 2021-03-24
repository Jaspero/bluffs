<script>
    import Header from "$lib/Header.svelte";
    import Buff from "$lib/Buff.svelte";
    import Field from "$lib/Field.svelte";
    import Magnify from "svelte-material-icons/Magnify.svelte";

    let buffs = [
        {buffName: 'Buff Name', lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'rare'},
        {buffName: 'Buff Name', lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'common'},
        {buffName: 'Buff Name', lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'epic'},
        {buffName: 'Buff Name', lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'rare'},
        {buffName: 'Buff Name', lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'rare'},
        {buffName: 'Buff Name', lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'rare'},
        {buffName: 'Buff Name', lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'common'},
        {buffName: 'Buff Name', lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'common'},
        {buffName: 'Buff Name', lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'legendary'},
        {buffName: 'Buff Name', lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'epic'},
    ];
</script>

<style lang="scss">
  .search {
    z-index: 1;
    position: sticky;
    top: 60px;
    border-bottom: 2px dashed var(--light-tertiary);
    background-color: var(--light-theme);
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;

    @media (max-width: 900px) {
      top: 50px;
    }
  }
</style>

<Header>Marketplace</Header>

<div class="grid">
    <div class="col-12 search">
        <Field label="Search" spacing="none" size="full"><Magnify size="24px" /></Field>
    </div>

    {#each buffs as buff}
        <div class="col-3 col-s-4 col-xs-6">
            <Buff  {buff} />
        </div>
    {/each}
</div>