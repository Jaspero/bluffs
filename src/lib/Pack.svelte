<script>
    export let pack
</script>

<style lang="scss">
  .card {
    display: block;
    padding: 15px;
    border: 2px solid transparent;
    background-color: var(--light-theme);
    transition: .2s;

    &:hover {
      border-color: var(--light-tertiary);
      background-color: rgba(0,0,0,.04);
    }

    &.common {
      .pack-tier {
        color: var(--rarity-common);
      }
      .sold-count {
        background-color: var(--rarity-common);
      }
      .image {
        border: 2px solid var(--rarity-common);
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
        border: 2px solid var(--rarity-rare);
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
        border: 2px solid var(--rarity-epic);
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
        border: 2px solid var(--rarity-legendary);
        background-color: #F7E3E6;
      }
    }
  }

  .image {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }

  .sold-count {
    position: absolute;
    bottom: 0;
    padding: 4px 8px;
    font-size: 12px;
    color: white;
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