<script>
    import {createEventDispatcher} from 'svelte';
    let dispatch = createEventDispatcher();

    export let pack
</script>

<style lang="scss">
  .pack {
    display: block;
    padding: 10px;
    background-color: var(--theme-fg);
    border: 1px solid var(--theme-tertiary);
    border-radius: 8px;
    overflow: hidden;
    transition: border-color .2s;

    &:hover {
      border-color: var(--theme-secondary);
    }

    &.common {
      .image {
        background-color: #EBECEF;
      }
      .pack-tier {
        color: var(--rarity-common);
      }
      .sold-count {
        background-color: var(--rarity-common);
      }
    }

    &.rare {
      .image {
        background-color: #F4F2EA;
      }
      .pack-tier {
        color: var(--rarity-rare);
      }
      .sold-count {
        background-color: var(--rarity-rare);
      }
    }

    &.epic {
      .image {
        background-color: #F0E7F9;
      }
      .pack-tier {
        color: var(--rarity-epic);
      }
      .sold-count {
        background-color: var(--rarity-epic);
      }
    }

    &.legendary {
      .image {
        background-color: #F7E3E6;
      }
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

  .pack-tier {
    text-transform: capitalize;
  }
</style>

<div class="pack {pack.tier} font-secondary pointer" on:click={()=>dispatch('click')}>
    <h5>{pack.packName}</h5>
    <div class="flex jc-between">
        <span class="pack-tier">{pack.tier}</span>
        <span>{pack.sold} sold</span>
    </div>
    <div class="image m-y-xs">
        <img src="assets/search-24px.svg" alt="">
    </div>
    <p>Contains {pack.count} buffs</p>
    <p>${pack.cost}</p>
</div>