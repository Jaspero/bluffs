<script>
    import Card from "$lib/Card.svelte";
    import Button from "$lib/Button.svelte";
    import Header from "$lib/Header.svelte";
    import Plus from "svelte-material-icons/Plus.svelte";
    import Minus from "svelte-material-icons/Minus.svelte";

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

    let amount = 1

    function addAmount() {
        amount += 1
    }

    function removeAmount() {
        if (amount > 1) {
            amount -= 1
        }
    }
</script>

<style lang="scss">
  .amount-field {
    line-height: 16px;
    font-size: 16px;
    padding: 12px;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    text-align: center;
    background-color: var(--light-theme);
    color: var(--light-primary);
    caret-color: var(--light-primary);
    font-family: Roboto,sans-serif;
  }

  .box {
    display: flex;
    position: relative;
    border: 1px solid var(--light-tertiary);
    box-shadow: 0 0 0 1px transparent;
    height: 54px;
    border-radius: 4px;
    margin-bottom: 15px;
    overflow: hidden;
    transition: box-shadow .3s, border .3s;

    &:hover {
      border: 1px solid var(--light-secondary);
      box-shadow: 0 0 0 1px var(--light-secondary);
    }

    &:focus-within {
      border: 1px solid var(--primary-theme);
      box-shadow: 0 0 0 1px var(--primary-theme);
    }
  }

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

  .mat-button {
    position: absolute;
    width: 54px;
    height: 52px;
    line-height: 1;
    padding: 0;
    border: none;
    border-radius: 0;
    outline: none;
    background-color: rgba(0,0,0,.03);
    background-position: center;
    transition: 0.4s;

    &:first-child {
      top: 0;
      left: 0;
      border-right: 2px solid transparent;
    }

    &:last-child {
      top: 0;
      right: 0;
      border-left: 2px solid transparent;
    }

    &:hover {
      background: rgba(0,0,0,.04) radial-gradient(circle, transparent 1%, rgba(0,0,0,.04) 1%) center/15000%;
      border-color: rgba(0,0,0,.1);
    }

    &:active {
      background-color: rgba(0,0,0,.04);
      background-size: 100%;
      transition: background 0s;
    }
  }

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance:textfield;
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
            <label for="amount" class="box">
                <button class="mat-button" on:click={() => removeAmount()}>
                    <Minus size="20px" />
                </button>

                <input autocomplete="off" type="number" id="amount" class="amount-field" bind:value={amount}>

                <button class="mat-button" on:click={() => addAmount()}>
                    <Plus size="20px" />
                </button>
            </label>
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