<script>
    import Card from "$lib/Card.svelte";
    import Button from "$lib/Button.svelte";
    import Header from "$lib/Header.svelte";


    let packDetails = [
        {tier: "common", count: 7},
        {tier: "rare", count: 2},
        {tier: "epic", count: 1},
    ]

    let pack = {
        packName: "Common Pack 2021",
        cost: 9.99,
        buffCount: 10,
        tier: "legendary"
    }
</script>

<style lang="scss">


  .pack {
    box-shadow: 0 3px 0 transparent;
  }

  .image {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 8px;
    overflow: hidden;
  }

  .common {
    &.pack-tier, &.tier {
      color: var(--rarity-common);
    }
    &.sold-count {
      background-color: var(--rarity-common);
    }
    &.image {
      background-color: #EBECEF;
    }
  }

  .rare {
    &.pack-tier, &.tier {
      color: var(--rarity-rare);
    }
    &.sold-count {
      background-color: var(--rarity-rare);
    }
    &.image {
      background-color: #F4F2EA;
    }
  }

  .epic {
    &.pack-tier, &.tier {
      color: var(--rarity-epic);
    }
    &.sold-count {
      background-color: var(--rarity-epic);
    }
    &.image {
      background-color: #F0E7F9;
    }
  }

  .legendary {
    &.pack-tier, &.tier {
      color: var(--rarity-legendary);
    }
    &.sold-count {
      background-color: var(--rarity-legendary);
    }
    &.image {
      background-color: #F7E3E6;
    }
  }

  .pack-tier {
    text-transform: capitalize;
    font-weight: 500;
  }

  .sold-count {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 4px 6px;
    border-top-right-radius: 8px;
    font-size: 12px;
    color: var(--primary-primary);
  }
</style>

<Header>{pack.packName}</Header>

<div class="grid jc-center">
    <div class="col-6 col-m-7 col-xs-12">
        <div class="image {pack.tier}">
            <div class="sold-count {pack.tier}">1203 SOLD</div>
        </div>
    </div>

    <div class="col-4 col-m-5 col-xs-12">
        <Card>
            <h5 class="pack-tier {pack.tier}">{pack.tier} Tier Pack</h5>
            <div class="m-t-xs m-b-s">${pack.cost} - {pack.buffCount} buffs</div>


            <Button color="primary" appearance="filled">Buy now</Button>
            <h5 class="m-t-s">Pack Details</h5>
            <h6 class="m-y-xs">This pack contains:</h6>
            {#each packDetails as pack}
                <p>
                    {pack.count}x <span class="tier {pack.tier}">{pack.tier}</span> buffs
                </p>
            {/each}
        </Card>
    </div>
</div>