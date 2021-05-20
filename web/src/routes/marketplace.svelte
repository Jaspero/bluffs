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

    let filters = false

    function toggleFilters() {
        filters = !filters
    }
</script>

<style lang="scss">
  .sticky-bar {
    z-index: 1;
    position: sticky;
    top: 60px;
    border-bottom: 2px dashed var(--theme-tertiary);
    background-color: var(--theme-bg);

    @media (max-width: 900px) {
      top: 50px;
    }
  }

  .filter-toggle {
    display: none;
  }

  .search {
    flex: 1;
  }

  .filter {
    flex: 2;
  }

  @media (max-width: 900px) {
    .filter {
      flex: unset;
      width: 100%;
      display: none;
      visibility: hidden;
      opacity: 0;

      &.active {
        margin-top: calc(8px + .5vw);
        display: block;
        visibility: visible;
        opacity: 1;
      }
    }

    .filter-toggle {
      display: block;
      min-width: 133px;
      height: 60px;
      border: 1px solid var(--theme-tertiary);
      border-radius: 4px;
      background-color: var(--theme-fg);
      color: var(--theme-primary);
      text-transform: uppercase;
      padding: 0 16px;
    }
  }
</style>

<Header>Marketplace</Header>

<div class="grid">
    <div class="col-12 sticky-bar flex fw-wrap">
        <div class="m-r-s search">
            <Field label="Search" spacing="none" size="full">
                <slot slot="prefix"><Magnify size="24px" /></slot>
            </Field>
        </div>

        <button class="filter-toggle" on:click={toggleFilters}>{filters ? 'Hide' : 'Show'} Filters</button>

        <div class="filter" class:active={filters}>
            <Select label="Filters" {options} spacing="none" size="full" />
        </div>
    </div>

    {#each buffs as buff}
        <div class="col-3 col-s-4 col-xs-6 xs-p-a-0">
            <Buff  {buff} />
        </div>
    {/each}
</div>