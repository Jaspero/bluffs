<script>
    import Header from "$lib/Header.svelte";
    import Buff from "$lib/Buff.svelte";
    import Field from "$lib/Field.svelte";
    import Magnify from "svelte-material-icons/Magnify.svelte";

    let buffs = [
        {
            buffName: 'Vigor',
            buffEffect: "+5% Energy",
            lowestPrice: 4.99,
            highestPrice: 99.99,
            listings: 10,
            tier: 'rare'
        },
        {
            buffName: 'Certified Rocket',
            buffEffect: "+5% Looks",
            lowestPrice: 4.99,
            highestPrice: 99.99,
            listings: 10,
            tier: 'common'
        },
        {
            buffName: 'Total Resistance',
            buffEffect: "+5% Immune System",
            lowestPrice: 4.99,
            highestPrice: 99.99,
            listings: 10,
            tier: 'epic'
        },
        {
            buffName: 'Jolly Joker',
            buffEffect: "+2% Humor, +3% Happiness",
            lowestPrice: 4.99,
            highestPrice: 99.99,
            listings: 10,
            tier: 'rare'
        },
        {
            buffName: 'Loose Pants',
            buffEffect: "+5% Weight Loss",
            lowestPrice: 4.99,
            highestPrice: 99.99,
            listings: 10,
            tier: 'rare'
        },
        {
            buffName: 'Keen Eye',
            buffEffect: "+5% Art",
            lowestPrice: 4.99,
            highestPrice: 99.99,
            listings: 10,
            tier: 'rare'
        },
        {
            buffName: 'Speedy Soles',
            buffEffect: "+5% Speed",
            lowestPrice: 4.99,
            highestPrice: 99.99,
            listings: 10,
            tier: 'common'
        },
        {
            buffName: 'Power Nap',
            buffEffect: "+5% Sleep",
            lowestPrice: 4.99,
            highestPrice: 99.99,
            listings: 10,
            tier: 'common'
        },
        {
            buffName: 'Suit and Tie',
            buffEffect: "+5% Business",
            lowestPrice: 4.99,
            highestPrice: 99.99,
            listings: 10,
            tier: 'legendary'
        },
        {
            buffName: 'Four-Leaf Clover',
            buffEffect: "+5% Luck",
            lowestPrice: 4.99,
            highestPrice: 99.99,
            listings: 10,
            tier: 'epic'
        },
    ];
</script>

<style lang="scss">
  .search {
    z-index: 1;
    position: sticky;
    top: 60px;
    border-bottom: 2px dashed var(--theme-tertiary);
    background-color: var(--theme-bg);

    @media (max-width: 900px) {
      top: 50px;
    }
  }
</style>

<Header>Marketplace</Header>

<div class="grid">
    <div class="col-12 search">
        <Field label="Search" spacing="none" size="full">
            <slot slot="prefix"><Magnify size="24px" /></slot>
        </Field>
    </div>

    {#each buffs as buff}
        <div class="col-3 col-s-4 col-xs-6">
            <Buff  {buff} />
        </div>
    {/each}
</div>