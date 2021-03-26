<script>
    export let set
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

      .set-tier {
        color: var(--rarity-common);
      }
      .completed {
        color: white;
        background-color: var(--rarity-common);
      }
    }

    &.rare {
      background-color: #F4F2EA;

      .set-tier {
        color: var(--rarity-rare);
      }.completed {
         color: white;
         background-color: var(--rarity-rare);
       }
    }

    &.epic {
      background-color: #F0E7F9;

      .set-tier {
        color: var(--rarity-epic);
      }
      .completed {
        color: white;
        background-color: var(--rarity-epic);
      }
    }

    &.legendary {
      background-color: #F7E3E6;

      .set-tier {
        color: var(--rarity-legendary);
      }
      .completed {
        color: white;
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

  .completed {
    position: absolute;
    top: -10px;
    left: -10px;
    padding: 3px 6px;
    font-size: 12px;
    color: white;
    border-bottom-right-radius: 8px;
  }

  .set-tier {
    text-transform: capitalize;
    margin: 4px 0;
  }
</style>

<a href="/set" class="card {set.tier}">
    <div class="image m-b-xs">
        {#if set.completed === true}
            <div class="completed">
                Completed
            </div>
        {/if}
        <img src="assets/search-24px.svg" alt="">
    </div>
    <h5>{set.setName}</h5>
    <h6 class="set-tier">{set.tier} tier</h6>
</a>