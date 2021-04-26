<script>
    import Card from "$lib/Card.svelte";
    import Set from "$lib/Set.svelte";
    import Buff from "$lib/Buff.svelte";
    import Button from "$lib/Button.svelte";
    import {dark} from "$lib/stores"

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

  .hero {
    position: relative;
    min-height: calc(100vh - 60px);

    &-image {
      position: absolute;
      top: 0;
      width: 100%;
      /*height: 100%;*/
      /*background-image: var(--hero-hero);
      background-size: contain;
      background-repeat: no-repeat;*/
      transition: background-image .5s;
    }

    &-title {
      position: absolute;
      top: 10rem;
      left: 50%;
      transform: translateX(-50%);
    }

    &-cards {
      position: absolute;
      bottom: 15rem;
      left: 50%;
      transform: translateX(-50%);
      width: 900px;
      height: 400px;
      background-image: var(--hero-cards);
      background-size: contain;
      background-repeat: no-repeat;
    }

    &-card {
      position: absolute;
      bottom: 15rem;
      left: 50%;
      transform: translateX(-50%);
      max-width: 700px;
    }
  }

  .shooting-star {
    transition: 2s;
    transform: translate(400px, -1100px);
    transition-delay: .5s;

    &.shoot {
      transform: translate(-839px, 300px);
    }
  }

  svg {
    width: 100%;
  }

  .sun {
    transition: transform 2s;
    transform: rotate(-112deg);
    transform-origin: bottom center;

    circle {
      transition: fill 2s;
      fill: #E0C66D;
    }
  }

  .moon {
    transform: rotate(0);
    transform-origin: bottom center;

    circle {
      fill: #cbcbcb;

      &:first-child {
        fill: #dedede;
      }
    }
  }

  .stars {
    transition: 2s;
    transform: translateY(-100%);

    &-down {
      transform: translateY(0);
    }
  }

  [class*="clouds-"] {
    transition: transform 2s;
  }

  .clouds {
    &-1-move {
      transform: translateX(-1400px);
    }
    &-2-move {
      transform: translateX(1300px);
    }
    &-3-move {
      transform: translateX(1200px);
    }
  }

  .birds {
    transition: transform 2s;

    &.fly {
      transform: translate(-900px, -100%);
    }
  }
</style>

<section class="b-b-dashed hero">
    <div class="hero-image">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1932.827" height="717" viewBox="0 0 1932.827 717">
            <defs>
                <linearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#fff"/>
                    <stop offset="1" stop-color="#fff" stop-opacity="0.302"/>
                </linearGradient>
            </defs>

            <g id="Group_66" data-name="Group 66" transform="translate(12.827 -61)">
                <g id="Group_57" data-name="Group 57" class="stars" class:stars-down={$dark}>
                    <circle id="Ellipse_30" data-name="Ellipse 30" cx="6.511" cy="6.511" r="6.511" transform="translate(1491 92.414)" fill="#e6e6e6"/>
                    <circle id="Ellipse_38" data-name="Ellipse 38" cx="6.511" cy="6.511" r="6.511" transform="translate(1824 282)" fill="#e6e6e6"/>
                    <circle id="Ellipse_34" data-name="Ellipse 34" cx="6.511" cy="6.511" r="6.511" transform="translate(887.441 105.436)" fill="#e6e6e6"/>
                    <circle id="Ellipse_37" data-name="Ellipse 37" cx="6.511" cy="6.511" r="6.511" transform="translate(614.274 106.521)" fill="#e6e6e6"/>
                    <circle id="Ellipse_31" data-name="Ellipse 31" cx="6.511" cy="6.511" r="6.511" transform="translate(1086.339 117.48)" fill="#e6e6e6"/>
                    <circle id="Ellipse_35" data-name="Ellipse 35" cx="6.511" cy="6.511" r="6.511" transform="translate(430.133 221.252)" fill="#e6e6e6"/>
                    <circle id="Ellipse_40" data-name="Ellipse 40" cx="6.511" cy="6.511" r="6.511" transform="translate(208.83 412.734)" fill="#e6e6e6"/>
                    <circle id="Ellipse_32" data-name="Ellipse 32" cx="6.511" cy="6.511" r="6.511" transform="translate(780.979 168.615)" fill="#3da1ce"/>
                    <circle id="Ellipse_39" data-name="Ellipse 39" cx="6.511" cy="6.511" r="6.511" transform="translate(277.93 104.334)" fill="#3da1ce"/>
                    <circle id="Ellipse_36" data-name="Ellipse 36" cx="6.511" cy="6.511" r="6.511" transform="translate(168.807 167.014)" fill="#3da1ce"/>
                    <circle id="Ellipse_33" data-name="Ellipse 33" cx="6.511" cy="6.511" r="6.511" transform="translate(1260.979 190.075)" fill="#3da1ce"/>
                    <path id="Path_112" data-name="Path 112" d="M495.9,245.093l-3.25,3.228-3.228-3.25-2.166,2.152,3.227,3.249-3.249,3.228,2.151,2.167,3.25-3.228,3.228,3.25,2.166-2.152-3.227-3.25,3.249-3.227Z" transform="translate(798 -133)" fill="#e6e6e6"/>
                    <path id="Path_135" data-name="Path 135" d="M495.9,245.093l-3.25,3.228-3.228-3.25-2.166,2.152,3.227,3.249-3.249,3.228,2.151,2.167,3.25-3.228,3.228,3.25,2.166-2.152-3.227-3.25,3.249-3.227Z" transform="translate(154.829 -62.208)" fill="#e6e6e6"/>
                    <path id="Path_141" data-name="Path 141" d="M495.9,245.093l-3.25,3.228-3.228-3.25-2.166,2.152,3.227,3.249-3.249,3.228,2.151,2.167,3.25-3.228,3.228,3.25,2.166-2.152-3.227-3.25,3.249-3.227Z" transform="translate(-384.247 -135.328)" fill="#e6e6e6"/>
                    <path id="Path_139" data-name="Path 139" d="M495.9,245.093l-3.25,3.228-3.228-3.25-2.166,2.152,3.227,3.249-3.249,3.228,2.151,2.167,3.25-3.228,3.228,3.25,2.166-2.152-3.227-3.25,3.249-3.227Z" transform="translate(-420.985 119.792)" fill="#e6e6e6"/>
                    <path id="Path_136" data-name="Path 136" d="M495.9,245.093l-3.25,3.228-3.228-3.25-2.166,2.152,3.227,3.249-3.249,3.228,2.151,2.167,3.25-3.228,3.228,3.25,2.166-2.152-3.227-3.25,3.249-3.227Z" transform="translate(263.829 -137.449)" fill="#e6e6e6"/>
                    <path id="Path_140" data-name="Path 140" d="M495.9,245.093l-3.25,3.228-3.228-3.25-2.166,2.152,3.227,3.249-3.249,3.228,2.151,2.167,3.25-3.228,3.228,3.25,2.166-2.152-3.227-3.25,3.249-3.227Z" transform="translate(-10.481 55.396)" fill="#e6e6e6"/>
                    <path id="Path_133" data-name="Path 133" d="M495.9,245.093l-3.25,3.228-3.228-3.25-2.166,2.152,3.227,3.249-3.249,3.228,2.151,2.167,3.25-3.228,3.228,3.25,2.166-2.152-3.227-3.25,3.249-3.227Z" transform="translate(924.354 -45.071)" fill="#e6e6e6"/>
                    <path id="Path_137" data-name="Path 137" d="M495.9,245.093l-3.25,3.228-3.228-3.25-2.166,2.152,3.227,3.249-3.249,3.228,2.151,2.167,3.25-3.228,3.228,3.25,2.166-2.152-3.227-3.25,3.249-3.227Z" transform="translate(1146.354 93.929)" fill="#e6e6e6"/>
                    <path id="Path_138" data-name="Path 138" d="M495.9,245.093l-3.25,3.228-3.228-3.25-2.166,2.152,3.227,3.249-3.249,3.228,2.151,2.167,3.25-3.228,3.228,3.25,2.166-2.152-3.227-3.25,3.249-3.227Z" transform="translate(1368.354 -146.146)" fill="#e6e6e6"/>
                    <path id="Path_134" data-name="Path 134" d="M495.9,245.093l-3.25,3.228-3.228-3.25-2.166,2.152,3.227,3.249-3.249,3.228,2.151,2.167,3.25-3.228,3.228,3.25,2.166-2.152-3.227-3.25,3.249-3.227Z" transform="translate(521.354 -87.274)" fill="#e6e6e6"/>
                </g>

                <g id="Group_sun" data-name="Group sun" class="sun" class:moon={$dark}>
                    <g id="Group_52" data-name="Group 52">
                        <circle id="Ellipse_25" data-name="Ellipse 25" cx="66.193" cy="66.193" r="66.193" transform="translate(1653.329 98.925)"/>
                        <circle id="Ellipse_26" data-name="Ellipse 26" cx="7.596" cy="7.596" r="7.596" transform="translate(1705.415 111.946)"/>
                        <circle id="Ellipse_27" data-name="Ellipse 27" cx="7.596" cy="7.596" r="7.596" transform="translate(1718.437 187.905)"/>
                        <circle id="Ellipse_28" data-name="Ellipse 28" cx="5.426" cy="5.426" r="5.426" transform="translate(1749.905 147.755)"/>
                        <circle id="Ellipse_29" data-name="Ellipse 29" cx="17.362" cy="17.362" r="17.362" transform="translate(1676.117 153.181)"/>
                    </g>

                    <rect id="Rectangle_301" data-name="Rectangle 301" width="66" height="66" transform="translate(216 712)" fill="none"/>
                </g>

                <g id="Group_clouds_1" data-name="Group clouds 1" class="clouds-1" class:clouds-1-move={$dark}>
                    <rect id="Rectangle_284" data-name="Rectangle 284" width="200.86" height="21.69" rx="9.96" transform="translate(1594.15 215.097)" fill="#f2f2f2" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
                    <rect id="Rectangle_286" data-name="Rectangle 286" width="200.86" height="21.69" rx="9.96" transform="translate(1562.81 249.637)" fill="#f2f2f2" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
                    <rect id="Rectangle_285" data-name="Rectangle 285" width="200.86" height="21.69" rx="9.96" transform="translate(1639.14 233.577)" fill="#f2f2f2" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
                </g>

                <g id="Group_clouds_2" data-name="Group clouds 2" class="clouds-2" class:clouds-2-move={$dark}>
                    <rect id="Rectangle_287" data-name="Rectangle 287" width="200.86" height="21.69" rx="9.96" transform="translate(108.4 271.327)" fill="#f2f2f2" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
                    <rect id="Rectangle_289" data-name="Rectangle 289" width="200.86" height="21.69" rx="9.96" transform="translate(77.07 305.877)" fill="#f2f2f2" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
                    <rect id="Rectangle_288" data-name="Rectangle 288" width="200.86" height="21.69" rx="9.96" transform="translate(153.4 289.807)" fill="#f2f2f2" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
                </g>

                <g id="Group_clouds_3" data-name="Group clouds 3" class="clouds-3" class:clouds-3-move={$dark}>
                    <rect id="Rectangle_281" data-name="Rectangle 281" width="200.86" height="21.69" rx="9.96" transform="translate(385.6 142.423)" fill="#f2f2f2" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
                    <rect id="Rectangle_283" data-name="Rectangle 283" width="200.86" height="21.69" rx="9.96" transform="translate(354.26 176.973)" fill="#f2f2f2" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
                    <rect id="Rectangle_282" data-name="Rectangle 282" width="200.86" height="21.69" rx="9.96" transform="translate(430.59 160.903)" fill="#f2f2f2" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
                </g>

                <g id="Group_64" data-name="Group 64" transform="translate(-179.19 24.08)" class="birds" class:fly={$dark}>
                    <path id="Path_148" data-name="Path 148" d="M750.165,85.7l12.414-9.928c-9.643-1.064-13.606,4.2-15.227,8.358-7.534-3.128-15.735.972-15.735.972l24.837,9.017a18.8,18.8,0,0,0-6.288-8.418Z" transform="translate(-426.21 223.813)" fill="#3f3d56"/>
                    <path id="Path_165" data-name="Path 165" d="M750.165,85.7l12.414-9.928c-9.643-1.064-13.606,4.2-15.227,8.358-7.534-3.128-15.735.972-15.735.972l24.837,9.017a18.8,18.8,0,0,0-6.288-8.418Z" transform="translate(185.79 57.547)" fill="#3f3d56"/>
                    <path id="Path_164" data-name="Path 164" d="M750.165,85.7l12.414-9.928c-9.643-1.064-13.606,4.2-15.227,8.358-7.534-3.128-15.735.972-15.735.972l24.837,9.017a18.8,18.8,0,0,0-6.288-8.418Z" transform="translate(788.611 204.453)" fill="#3f3d56"/>
                </g>

                <path class="shooting-star" class:shoot={$dark} id="Path_114" data-name="Path 114" d="M633.2,585.887l32.971-38.6,32.971-38.6L717.75,486.9c1.03-1.206-.559-3.086-1.589-1.881l-32.971,38.6-32.971,38.6-18.612,21.789c-1.03,1.206.559,3.086,1.589,1.881Z" opacity="0.8" fill="url(#linear-gradient)"/>
            </g>
        </svg>
    </div>

    <div class="hero-title ta-center">
        <h1 class="m-b-s">Welcome to Bluffs</h1>
        <h6 class="c-theme-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
    </div>

    <div class="hero-cards"></div>

    <div class="hero-card">
        <Card>
            <div class="ta-center">
                <h6 class="c-theme-secondary m-b-s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestias praesentium recusandae sequi totam? Aliquam aliquid architecto, blanditiis doloribus eveniet ipsum minima, nesciunt perspiciatis provident quis repellendus tempora ullam vitae.</h6>
                <Button link="/signup" kind="filled" color="primary">Start your collection</Button>
            </div>
        </Card>
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