<script>
    export let buff
</script>

<style lang="scss">
  .card {
    display: block;
    padding: 15px;
    border: 1px solid var(--light-tertiary);
    border-radius: 8px;
    background-color: var(--light-theme);
    transition: border-color .2s;

    &:hover {
      border-color: var(--light-secondary);
    }

    &.common {
      .buff-tier {
        color: var(--rarity-common);
      }
      .image {
        background-color: #EBECEF;
      }
    }

    &.rare {
      .buff-tier {
        color: var(--rarity-rare);
      }
      .image {
        background-color: #F4F2EA;
      }
    }

    &.epic {
      .buff-tier {
        color: var(--rarity-epic);
      }
      .image {
        background-color: #F0E7F9;
      }
    }

    &.legendary {
      .buff-tier {
        color: var(--rarity-legendary);
      }
      .image {
        background-color: #F7E3E6;
      }
    }
  }

  .lowest-price {
    color: var(--light-secondary);
  }

  .image {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 4px;
  }

  .buff-tier {
    text-transform: capitalize;
    margin: 4px 0;
  }
</style>

<a href="/buff" class="card {buff.tier}">
    <div class="image m-b-xs">
    </div>
    <h5>{buff.buffName}</h5>
    <h6 class="buff-tier">{buff.tier} tier</h6>
    {#if buff.lowestPrice}
        <h6 class="lowest-price">Price range</h6>
        <span class="font-secondary">${buff.lowestPrice} ~ ${buff.highestPrice}</span>
    {/if}
</a>