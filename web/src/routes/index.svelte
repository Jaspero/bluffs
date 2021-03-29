<script>
    import Card from "$lib/Card.svelte";
    import Set from "$lib/Set.svelte";
    import Pack from "../lib/Pack.svelte";

    let packs = [
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'rare'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'common'},
    ];

    let sets = [
        {setName: "Common Tier Set Example", tier: "common"},
        {setName: "Rare Tier Set Example", tier: "rare"},
        {setName: "Epic Tier Set Example", tier: "epic"},
        {setName: "Legendary Tier Set Example", tier: "legendary"},
    ]

    let tiers = ["common", "rare", "epic", "legendary"]
    let selected = tiers[0]
</script>

<style lang="scss">
  ul {
    padding: 0;
  }
  .select {
    position: relative;
    list-style: none;
    border: 1px solid transparent;
    padding-left: calc(1.5rem + 8px + .5vw);
    border-radius: 5px;
    transition: .3s;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: calc(4px + .25vw);
      transform: translateY(-50%);
      border-radius: 4px;
      width: 1.5rem;
      height: 1.5rem;
    }
    &.common {
      &:hover {
        border-color: var(--light-tertiary)
      }
      &.selected {
        border-color: var(--rarity-common);
      }
      &::before {
        background-color: var(--rarity-common);
      }
    }
    &.rare {
      &:hover {
        border-color: var(--light-tertiary)
      }
      &.selected {
        border-color: var(--rarity-rare);
      }
      &::before {
        background-color: var(--rarity-rare);
      }
    }
    &.epic {
      &:hover {
        border-color: var(--light-tertiary)
      }
      &.selected {
        border-color: var(--rarity-epic);
      }
      &::before {
        background-color: var(--rarity-epic);
      }
    }
    &.legendary {
      &:hover {
        border-color: var(--light-tertiary)
      }
      &.selected {
        border-color: var(--rarity-legendary);
      }
      &::before {
        background-color: var(--rarity-legendary);
      }
    }
  }
</style>

<div class="grid-small">
    <h4 class="p-t-s">Hi, Welcome to Bluffs!</h4>
</div>

<section>
    <div class="grid-small nogutter">
            <h5 class="col-12">Collect sets</h5>
            <p class="fs-medium m-y-xs col-12">There are currently 29 sets with different tiers for you to collect and more sets will come in the future!</p>
            <div class="grid nogutter">
                <div class="col-5 col-xs-6">
                    {#each sets as set}
                        {#if set.tier === selected}
                            <Set {set} />
                        {/if}
                    {/each}
                </div>

                <div class="col-4 col-xs-6">
                    <ul class="p-a-0">
                        <li class="select common pointer m-b-xs m-l-xs p-a-xs" on:click={()=>selected = tiers[0]} class:selected={selected==="common"}>Common tier</li>
                        <li class="select rare pointer m-b-xs m-l-xs p-a-xs" on:click={()=>selected = tiers[1]} class:selected={selected==="rare"}>Rare tier</li>
                        <li class="select epic pointer m-b-xs m-l-xs p-a-xs" on:click={()=>selected = tiers[2]} class:selected={selected==="epic"}>Epic tier</li>
                        <li class="select legendary pointer m-b-xs m-l-xs p-a-xs" on:click={()=>selected = tiers[3]} class:selected={selected==="legendary"}>Legendary tier</li>
                    </ul>
                </div>
            </div>
    </div>
</section>

<section>
    <div class="grid nogutter">
        <div class="col-6">
            <Card>
                <h5>Open packs</h5>
                <p class="fs-medium m-t-xs">Get the most recent packs which contain cards from the most recent sets!</p>

                <div class="grid">
                    {#each packs as pack}
                        <div class="col-6">
                            <Pack {pack} />
                        </div>
                    {/each}
                </div>
            </Card>
        </div>
    </div>
</section>
