<script>
    export let buff
</script>

<style lang="scss">
  .card {
    display: block;
    padding: 15px;
    border: 2px solid transparent;
    background-color: var(--light-theme);
    transition: .2s;

    &:hover {
      border: 2px solid var(--light-tertiary);
      background-color: rgba(0,0,0,.04);
    }

    &.common {
      .buff-tier {
        color: var(--rarity-common);
      }
      .image {
        border: 2px solid var(--rarity-common);
        background-color: #EBECEF;
      }
    }

    &.rare {
      .buff-tier {
        color: var(--rarity-rare);
      }
      .image {
        border: 2px solid var(--rarity-rare);
        background-color: #F4F2EA;
      }
    }

    &.epic {
      .buff-tier {
        color: var(--rarity-epic);
      }
      .image {
        border: 2px solid var(--rarity-epic);
        background-color: #F0E7F9;
      }
    }

    &.legendary {
      .buff-tier {
        color: var(--rarity-legendary);
      }
      .image {
        border: 2px solid var(--rarity-legendary);
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
  }

  .buff-tier {
    text-transform: capitalize;
    margin: 4px 0;
  }
</style>

<a href="" class="card {buff.tier}">
    <div class="image m-b-xs">
    </div>
    <h5>{buff.buffName}</h5>
    <h6 class="buff-tier">{buff.tier} tier</h6>
    {#if buff.lowestPrice}
        <h6 class="lowest-price">Lowest price</h6>
        <span class="font-secondary">${buff.lowestPrice}</span>
    {/if}
</a>