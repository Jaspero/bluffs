<script>
    import Card from "$lib/Card.svelte";
    import Set from "$lib/Set.svelte";
    import Buff from "$lib/Buff.svelte";
    import Button from "$lib/Button.svelte";

    let sets = [
        {setName: "Common Tier Set Example", tier: "common", featured: true},
        {setName: "Rare Tier Set Example", tier: "rare", featured: true},
        {setName: "Epic Tier Set Example", tier: "epic", featured: true},
        {setName: "Legendary Tier Set Example", tier: "legendary", featured: true}
    ]

    let buffs = [
        {buffName: "Common Tier Buff Example", buffEffect: "+5% Generic Buff", tier: "common"},
        {buffName: "Rare Tier Buff Example", buffEffect: "+5% Generic Buff", tier: "rare"},
        {buffName: "Epic Tier Buff Example", buffEffect: "+5% Generic Buff", tier: "epic"},
        {buffName: "Legendary Tier Buff Example", buffEffect: "+5% Generic Buff", tier: "legendary"},
        {buffName: "Unique Tier Buff Example", buffEffect: "+5% Generic Buff", tier: "unique"},
        {buffName: "Common Tier Buff Example", buffEffect: "+5% Generic Buff", tier: "common", cost: 9.99},
        {buffName: "Rare Tier Buff Example", buffEffect: "+5% Generic Buff", tier: "rare", cost: 9.99},
        {buffName: "Epic Tier Buff Example", buffEffect: "+5% Generic Buff", tier: "epic", cost: 9.99},
        {buffName: "Legendary Tier Buff Example", buffEffect: "+5% Generic Buff", tier: "legendary", cost: 9.99}
    ]

    let setTiers = ["common", "rare", "epic", "legendary"]
    let buffTiers = ["common", "rare", "epic", "legendary", "unique"]
    let selectedSet = setTiers[0]
    let selectedBuff = buffTiers[0]
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
        border-color: var(--theme-tertiary)
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
        border-color: var(--theme-tertiary)
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
        border-color: var(--theme-tertiary)
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
        border-color: var(--theme-tertiary)
      }
      &.selected {
        border-color: var(--rarity-legendary);
      }
      &::before {
        background-color: var(--rarity-legendary);
      }
    }
    &.unique {
      &:hover {
        border-color: var(--theme-tertiary)
      }
      &.selected {
        border-color: var(--rarity-unique);
      }
      &::before {
        background-color: var(--rarity-unique);
      }
    }
  }
</style>

<section class="b-b-dashed">
    <div class="grid jc-center p-y-s">
        <h1 class="col-12 ta-center">Welcome to Bluffs</h1>
        <h6 class="col-12 ta-center c-theme-secondary">A place where you can collect and cast buffs</h6>

        <div class="col-4">
            <Card title="Buy and sell buffs" subtitle="The Marketplace is a place where you can buy and sell buffs">
                <Button link="/marketplace" width="full" kind="filled" color="primary">Visit the Marketplace</Button>
            </Card>
        </div>
        <div class="col-4">
            <Card title="Climb the leaderboard" subtitle="We also have a place for the competitive ones! Collect and cast buffs and be #1">
                <Button link="/leaderboard" width="full" kind="filled" color="primary">View the Leaderboard</Button>
            </Card>
        </div>
        <div class="col-4">
            <Card title="Get limited edition buffs" subtitle="We will occasionally release limited edition buffs so keep your eye out for them!">
                <Button link="https://twitter.com/bluffs" target="_blank" width="full" kind="filled" color="primary">Follow us on Twitter</Button>
            </Card>
        </div>

        <div class="col-4">
            <Card title="Open packs" subtitle="We release new packs frequently and these are the main source of buffs">
                <Button link="/packs" width="full" kind="filled" color="primary">Open packs</Button>
            </Card>
        </div>

        <div class="col-4">
            <Card title="Complete sets and earn Unique buffs" subtitle="Create an account and start your awesome collection!">
                <Button link="/signup" width="full" kind="filled" color="primary">Start Collecting</Button>
            </Card>
        </div>
    </div>
</section>

<!--<section>
    <div class="grid p-y-xs">
        <div class="col-12">
            <h4>Featured Sets</h4>
            <p class="m-t-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aut culpa eligendi explicabo facere minima nobis reiciendis sed sequi, sunt ullam voluptate voluptatum. Et maxime officia praesentium sapiente sint.</p>
        </div>
        {#each sets as set}
            <div class="col-3">
                {#if set.featured}
                    <Set {set} />
                {/if}
            </div>
        {/each}
        <div class="col-12">
            <Button kind="outlined" size="large" width="full" link="/sets">Browse all sets</Button>
        </div>
    </div>
</section>-->

<section class="b-t-dashed b-b-dashed">
    <div class="grid jc-center p-y-s">
        <div class="col-6 col-s-8 col-xs-12">
            <Card title="What are sets?" subtitle="Sets are collections of buffs and there are 4 set tiers. Collect all the buffs in a set to gain a Unique buff!">
                <div class="grid nogutter">
                    <div class="col-6">
                        {#each sets as set}
                            {#if set.tier === selectedSet}
                                <Set {set} />
                            {/if}
                        {/each}
                    </div>

                    <div class="col-6">
                        <ul class="p-a-0">
                            <li class="select common pointer m-b-xs m-l-xs p-a-xs" on:click={()=>selectedSet = setTiers[0]} class:selected={selectedSet==="common"}>Common tier</li>
                            <li class="select rare pointer m-b-xs m-l-xs p-a-xs" on:click={()=>selectedSet = setTiers[1]} class:selected={selectedSet==="rare"}>Rare tier</li>
                            <li class="select epic pointer m-b-xs m-l-xs p-a-xs" on:click={()=>selectedSet = setTiers[2]} class:selected={selectedSet==="epic"}>Epic tier</li>
                            <li class="select legendary pointer m-b-xs m-l-xs p-a-xs" on:click={()=>selectedSet = setTiers[3]} class:selected={selectedSet==="legendary"}>Legendary tier</li>
                        </ul>
                    </div>
                </div>
            </Card>
        </div>

        <div class="col-6 cols-8 col-xs-12">
            <Card title="What are buffs?" subtitle="Buffs are collectible NFTs. You can start collecting them by opening packs or by purchasim them in the Marketplace">
                <div class="grid nogutter">
                    <div class="col-6">
                        {#each buffs as buff}
                            {#if buff.tier === selectedBuff &! buff.cost}
                                <Buff {buff} />
                            {/if}
                        {/each}
                    </div>

                    <div class="col-6">
                        <ul class="p-a-0">
                            <li class="select common pointer m-b-xs m-l-xs p-a-xs" on:click={()=>selectedBuff = buffTiers[0]} class:selected={selectedBuff==="common"}>Common tier</li>
                            <li class="select rare pointer m-b-xs m-l-xs p-a-xs" on:click={()=>selectedBuff = buffTiers[1]} class:selected={selectedBuff==="rare"}>Rare tier</li>
                            <li class="select epic pointer m-b-xs m-l-xs p-a-xs" on:click={()=>selectedBuff = buffTiers[2]} class:selected={selectedBuff==="epic"}>Epic tier</li>
                            <li class="select legendary pointer m-b-xs m-l-xs p-a-xs" on:click={()=>selectedBuff = buffTiers[3]} class:selected={selectedBuff==="legendary"}>Legendary tier</li>
                            <li class="select unique pointer m-b-xs m-l-xs p-a-xs" on:click={()=>selectedBuff = buffTiers[4]} class:selected={selectedBuff==="unique"}>Unique tier</li>
                        </ul>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</section>

<section>
    <div class="grid p-y-s">
        <h4 class="col-12">Coming very soon... Until then we offer you these exclusive buffs to get you started!</h4>
        {#each buffs as buff}
            {#if buff.cost}
                <div class="col-3">
                    <Buff {buff} />
                </div>
            {/if}
        {/each}
    </div>
</section>