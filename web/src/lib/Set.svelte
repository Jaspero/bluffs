<script>
    import CheckCircle from "svelte-material-icons/CheckCircle.svelte";

    export let set
</script>

<style lang="scss">
  .set {
    display: block;
    padding: 10px;
    border: 1px solid var(--light-tertiary);
    border-radius: 8px;
    overflow: hidden;
    transition: border-color .2s, transform .3s;

    &:hover {
      border-color: var(--light-secondary);
      transform: translateY(-2px);
    }

    &.common {
      .image {
        background-color: #EBECEF;
      }
      .set-tier {
        color: var(--rarity-common);
      }
      .completed {
        color: white;
        background-color: var(--rarity-common);
      }
    }

    &.rare {
      .image {
        background-color: #F4F2EA;
      }
      .set-tier {
        color: var(--rarity-rare);
      }.completed {
         color: white;
         background-color: var(--rarity-rare);
       }
    }

    &.epic {
      .image {
        background-color: #F0E7F9;
      }
      .set-tier {
        color: var(--rarity-epic);
      }
      .completed {
        color: white;
        background-color: var(--rarity-epic);
      }
    }

    &.legendary {
      .image {
        background-color: #F7E3E6;
      }
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
    border-radius: 8px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
  }

  .set-tier {
    text-transform: capitalize;
  }
</style>

<a href="/set" class="set {set.tier} font-secondary">
    <div class="flex jc-between ai-center">
        <h5>{set.setName}</h5>
        {#if set.completed}
            <CheckCircle color="#3da1ce" size="18px" width="18px" height="18px" />
        {/if}
    </div>
    <p class="set-tier fs-small">{set.tier}</p>
    <div class="image m-t-xs">
        <img src="assets/search-24px.svg" alt="">
    </div>
</a>