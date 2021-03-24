<script>
    export let pack
</script>

<style lang="scss">
  .card {
    display: block;
    padding: 10px;
    border: 1px solid var(--light-tertiary);
    border-radius: 8px;
    overflow: hidden;
    transition: border-color .2s;

    &:hover {
      border-color: var(--light-secondary);
    }

    &.common {
      background-color: #EBECEF;
      .pack-tier {
        color: var(--rarity-common);
      }
      .sold-count {
        background-color: var(--rarity-common);
      }
    }

    &.rare {
      background-color: #F4F2EA;
      .pack-tier {
        color: var(--rarity-rare);
      }
      .sold-count {
        background-color: var(--rarity-rare);
      }
    }

    &.epic {
      background-color: #F0E7F9;
      .pack-tier {
        color: var(--rarity-epic);
      }
      .sold-count {
        background-color: var(--rarity-epic);
      }
    }

    &.legendary {
      background-color: #F7E3E6;
      .pack-tier {
        color: var(--rarity-legendary);
      }
      .sold-count {
        background-color: var(--rarity-legendary);
      }
    }
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

  .sold-count {
    position: absolute;
    top: -10px;
    left: -10px;
    padding: 3px 6px;
    font-size: 12px;
    color: white;
    border-bottom-right-radius: 8px;
  }

  .pack-tier {
    text-transform: capitalize;
    margin: 4px 0;
  }
</style>

<a href="/pack" class="card {pack.tier}">
    <div class="image m-b-xs">
        <img src="assets/search-24px.svg" alt="">
        <div class="sold-count">{pack.sold} SOLD</div>
    </div>
    <h5>{pack.packName}</h5>
    <h6 class="pack-tier">{pack.tier} tier</h6>
    <div>
        ${pack.cost} - {pack.count} buffs
    </div>
</a>