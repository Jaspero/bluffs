<script>
    /**
     *
     * @type {string}
     */
    export let title = undefined

    /**
     *
     * @type {string}
     */
    export let subtitle = undefined
</script>

<style lang="scss">
  .card {
    background-color: var(--theme-fg);
    border: 1px solid var(--theme-tertiary);
    border-radius: 8px;
    height: 100%;

    &-header {
      p:only-child {
        margin: 0;
      }
    }
  }
</style>

<div class="card">
    {#if title || subtitle}
        <div class="p-a-s b-b-dashed card-header">
            {#if title}
                <h4>
                    {title}
                </h4>
            {/if}

            {#if subtitle}
                <p class="m-t-xs">
                    {subtitle}
                </p>
            {/if}
        </div>
    {/if}

    {#if $$slots.content}
        <div class="p-a-s">
            <slot name="content"></slot>
        </div>
    {/if}

    {#if $$slots.actions}
        <div class="p-a-s b-t-dashed">
            <slot name="actions"></slot>
        </div>
    {/if}
</div>