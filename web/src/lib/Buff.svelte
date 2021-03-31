<script>
    import {createEventDispatcher} from 'svelte';
    let dispatch = createEventDispatcher();

    export let buff
</script>

<style lang="scss">
  .buff {
    display: block;
    cursor: pointer;
    padding: 10px;
    border: 1px solid var(--light-tertiary);
    border-radius: 8px;
    background-color: var(--light-theme);
    transition: border-color .2s;

    &:hover {
      border-color: var(--light-secondary);
    }

    &.common {
      background-color: #EBECEF;
      .buff-tier {
        color: var(--rarity-common);
      }
      .listings {
        background-color: var(--rarity-common);
      }
    }

    &.rare {
      background-color: #F4F2EA;
      .buff-tier {
        color: var(--rarity-rare);
      }
      .listings {
        background-color: var(--rarity-rare);
      }
    }

    &.epic {
      background-color: #F0E7F9;
      .buff-tier {
        color: var(--rarity-epic);
      }
      .listings {
        background-color: var(--rarity-epic);
      }
    }

    &.legendary {
      background-color: #F7E3E6;
      .buff-tier {
        color: var(--rarity-legendary);
      }
      .listings {
        background-color: var(--rarity-legendary);
      }
    }

    &.unique {
      background-color: #E2F3ED;
      .buff-tier {
        color: var(--rarity-unique);
      }
    }
  }

  .price-range {
    color: var(--light-secondary);
  }

  .image {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 4px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
  }

  .buff-tier {
    text-transform: capitalize;
    margin: 4px 0;
  }

  .listings {
    position: absolute;
    top: -10px;
    left: -10px;
    padding: 3px 6px;
    font-size: 12px;
    color: white;
    border-bottom-right-radius: 8px;
  }

  .cast-buff {
    background: white;
    border: none;
    outline: none;
  }
</style>

<div class="buff {buff.tier}" on:click={()=>dispatch('click')}>
    <div class="image m-b-xs">
        {#if buff.listings}
            <div class="listings">{buff.listings} Listings</div>
        {/if}
        <img src="assets/search-24px.svg" alt="">
    </div>
    <h5>{buff.buffName}</h5>
    <h6 class="buff-tier">{buff.tier} tier</h6>
    <div class="fs-small">{buff.buffEffect}</div>
    {#if buff.lowestPrice && buff.highestPrice}
        <h6 class="price-range">Price range</h6>
        <span class="font-secondary">${buff.lowestPrice} ~ ${buff.highestPrice}</span>
    {/if}
</div>