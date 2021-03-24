<script>
    export let buff
</script>

<style lang="scss">
  .card {
    display: block;
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
</style>

<a href="/buff" class="card {buff.tier}">
    <div class="image m-b-xs">
        <div class="listings">{buff.listings} LISTINGS</div>
        <img src="assets/search-24px.svg" alt="">
    </div>
    <h5>{buff.buffName}</h5>
    <h6 class="buff-tier">{buff.tier} tier</h6>
    {#if buff.lowestPrice}
        <h6 class="price-range">Price range</h6>
        <span class="font-secondary">${buff.lowestPrice} ~ ${buff.highestPrice}</span>
    {/if}
</a>