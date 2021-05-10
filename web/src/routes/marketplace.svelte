<script>
    import Header from "$lib/Header.svelte";
    import Buff from "$lib/Buff.svelte";
    import Field from "$lib/Field.svelte";
    import Magnify from "svelte-material-icons/Magnify.svelte";
    import Select from "../lib/Select.svelte";

    let buffs = [
        {buffName: 'Vigor', buffEffect: "+5% Energy", lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'rare'},
        {buffName: 'Certified Rocket', buffEffect: "+5% Looks", lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'common'},
        {buffName: 'Total Resistance', buffEffect: "+5% Immune System", lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'epic'},
        {buffName: 'Jolly Joker', buffEffect: "+2% Humor, +3% Happiness", lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'rare'},
        {buffName: 'Loose Pants', buffEffect: "+5% Weight Loss", lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'rare'},
        {buffName: 'Keen Eye', buffEffect: "+5% Art", lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'rare'},
        {buffName: 'Speedy Soles', buffEffect: "+5% Speed", lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'common'},
        {buffName: 'Power Nap', buffEffect: "+5% Sleep", lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'common'},
        {buffName: 'Suit and Tie', buffEffect: "+5% Business", lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'legendary'},
        {buffName: 'Four-Leaf Clover', buffEffect: "+5% Luck", lowestPrice: 4.99, highestPrice: 99.99, listings: 10, tier: 'epic'},
    ];

    let options = [
        {label: 'Option 1'},
        {label: 'Option 2'},
        {label: 'Option 3'},
        {label: 'Option 4'},
        {label: 'Option 5'},
        {label: 'Option 6'},
        {label: 'Option 7'},
        {label: 'Option 8'},
        {label: 'Option 9'}
    ]
</script>

<style lang="scss">
  .filters {
    z-index: 1;
    position: sticky;
    top: 60px;
    background-color: var(--theme-bg);
  }

  .filter {

  }

  @media (max-width: 900px) {
    .filters {
      top: 50px;
      height: 80px;
    }

    .search {
      flex: 1;
    }

    .dropdown {
      width: 80px;
    }
  }
</style>

<Header>Marketplace</Header>

<div class="grid">
    <div class="grid filters b-b-dashed">
        <div class="col-4 search">
            <Field label="Search" spacing="none" size="full">
                <slot slot="prefix"><Magnify size="24px" /></slot>
            </Field>
        </div>

        <div class="col-8 dropdown">
            <Select label="Filters" {options} spacing="none" size="full" />
        </div>
    </div>

    {#each buffs as buff}
        <div class="col-3 col-s-4 col-xs-6">
            <Buff  {buff} />
        </div>
    {/each}
</div>