<script>
    import Header from "$lib/Header.svelte";
    import Pack from "$lib/Pack.svelte";
    import Field from "$lib/Field.svelte";
    import Magnify from "svelte-material-icons/Magnify.svelte";

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

<style lang="scss">
  .search {
    z-index: 1;
    position: sticky;
    top: 60px;
    border-bottom: 2px dashed var(--light-tertiary);
    background-color: var(--light-theme);

    @media (max-width: 900px) {
      top: 50px;
    }
  }
</style>

<Header>Packs</Header>

<div class="grid">
    <div class="col-12 search">
        <Field label="Search" spacing="none" size="full">
            <slot slot="prefix"><Magnify size="24px" /></slot>
        </Field>
    </div>

    {#each packs as pack}
        <div class="col-3 col-s-4 col-xs-6">
            <Pack {pack} />
        </div>
    {/each}
</div>