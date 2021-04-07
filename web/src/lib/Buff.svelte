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
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 8px;
    background-color: var(--light-theme);
    transition: border-color .2s, transform .3s;

    &:hover {
      border-color: var(--light-secondary);
      transform: translateY(-2px);
    }

    &.common {
      .image {
        background-color: #EBECEF;
      }
      .buff-tier {
        color: var(--rarity-common);
      }
      .listings {
        background-color: var(--rarity-common);
      }
    }

    &.rare {
      .image {
        background-color: #F4F2EA;
      }
      .buff-tier {
        color: var(--rarity-rare);
      }
      .listings {
        background-color: var(--rarity-rare);
      }
    }

    &.epic {
      .image {
        background-color: #F0E7F9;
      }
      .buff-tier {
        color: var(--rarity-epic);
      }
      .listings {
        background-color: var(--rarity-epic);
      }
    }

    &.legendary {
      .image {
        background-color: #F7E3E6;
      }
      .buff-tier {
        color: var(--rarity-legendary);
      }
      .listings {
        background-color: var(--rarity-legendary);
      }
    }

    &.unique {
      .image {
        background-color: #E2F3ED;
      }
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
    border-radius: 8px;
    overflow: hidden;
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
  }

  .listings {
    position: absolute;
    top: 0;
    left: 0;
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

<div class="buff {buff.tier} font-secondary" on:click={()=>dispatch('click')}>
    <h6>{buff.buffName}</h6>
    <div class="fs-small flex jc-between">
        <span class="buff-tier">{buff.tier}</span>
        {#if buff.listings}
            <span>{buff.listings} Listings</span>
        {/if}
    </div>
    <div class="image m-y-xs">
        <img src="assets/search-24px.svg" alt="">
    </div>
    <div>{buff.buffEffect}</div>
    {#if buff.lowestPrice && buff.highestPrice}
        <span>${buff.lowestPrice} ~ ${buff.highestPrice}</span>
    {/if}
    {#if buff.cost}
        <p>${buff.cost}</p>
    {/if}
</div>