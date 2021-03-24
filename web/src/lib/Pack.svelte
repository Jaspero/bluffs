<script>
    export let pack
</script>

<style lang="scss">
  .card {
    display: block;
    padding: 15px;
    border: 1px solid var(--light-tertiary);
    border-radius: 8px;
    transition: border-color .2s;

    &:hover {
      border-color: var(--light-secondary);
    }

    &.common {
      .pack-tier {
        color: var(--rarity-common);
      }
      .sold-count {
        background-color: var(--rarity-common);
      }
      .image {
        background-color: #EBECEF;
      }
    }

    &.rare {
      .pack-tier {
        color: var(--rarity-rare);
      }
      .sold-count {
        background-color: var(--rarity-rare);
      }
      .image {
        background-color: #F4F2EA;
      }
    }

    &.epic {
      .pack-tier {
        color: var(--rarity-epic);
      }
      .sold-count {
        background-color: var(--rarity-epic);
      }
      .image {
        background-color: #F0E7F9;
      }
    }

    &.legendary {
      .pack-tier {
        color: var(--rarity-legendary);
      }
      .sold-count {
        background-color: var(--rarity-legendary);
      }
      .image {
        background-color: #F7E3E6;
      }
    }
  }

  .image {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 4px;
    overflow: hidden;
  }

  .sold-count {
    position: absolute;
    bottom: 0;
    padding: 4px 8px;
    font-size: 12px;
    color: white;
    border-top-right-radius: 4px;
  }

  .pack-tier {
    text-transform: capitalize;
  }
</style>

<a href="/pack" class="card {pack.tier}">
    <div class="image m-b-xs">
        <div class="sold-count">{pack.sold} SOLD</div>
    </div>
    <h5>{pack.packName}</h5>
    <h6 class="pack-tier">{pack.tier} tier</h6>
    <div>
        ${pack.cost} - {pack.count} buffs
    </div>
</a>