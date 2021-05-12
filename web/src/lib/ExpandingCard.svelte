<script>
    import Minus from "svelte-material-icons/Minus.svelte";
    import Plus from "svelte-material-icons/Plus.svelte";

    export let panel = []
</script>

<style lang="scss">
  .expanding-card {
    display: block;
    background-color: var(--theme-fg);
    overflow: hidden;
    box-shadow: 0 0 0 1px rgba(0,0,0,.16);
    transition: margin .5s cubic-bezier(0.4, 0, 0.2, 1), border-radius .5s cubic-bezier(0.4, 0, 0.2, 1);

    &.opened {
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 8px;

      .expanding-card-body {
        font-size: 1rem;
        padding: 0 12px 12px;
        visibility: visible;
        opacity: 1;
      }

      .expanding-card-header {
        padding: 16px 12px;
      }
    }

    &:first-of-type {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      &.opened {
        margin-top: 0;
        margin-bottom: 10px;
      }
    }

    &:last-of-type {
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;

      &.opened {
        margin-top: 10px;
        margin-bottom: 0;
      }
    }

    &-header {
      padding: 12px;
      transition: padding .3s;
    }

    &-body {
      display: block;
      font-size: 0;
      padding: 0;
      visibility: hidden;
      opacity: 0;
      transition: all .3s;
    }
  }

  .expand-icon {
    display: block;
    line-height: 1;
  }

  input[type=checkbox] {
    display: none;
  }
</style>

{#each panel as panel}
    <label for="{panel.title}" class="expanding-card pointer" class:opened={panel.checked}>
        <span class="expanding-card-header flex ai-center jc-between">
            <input type="checkbox" id="{panel.title}" value="{panel.title}" bind:checked="{panel.checked}">
            {panel.title}
            <span class="expand-icon">
                {#if panel.checked}
                    <Minus size="16px" />
                {:else} <Plus size="16px" />
                {/if}
            </span>
        </span>

        <span class="expanding-card-body">
            {panel.text}
        </span>
    </label>
{/each}