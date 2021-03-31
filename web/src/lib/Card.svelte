<script>
</script>

<style lang="scss">
  .card {
    border: 1px solid var(--light-tertiary);
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
    {#if $$slots.title || $$slots.subtitle}
        <div class="p-a-s b-b-dashed card-header">
            {#if $$slots.title}
                <h5>
                    <slot name="title"></slot>
                </h5>
            {/if}

            {#if $$slots.subtitle}
                <p class="m-t-xs">
                    <slot name="subtitle"></slot>
                </p>
            {/if}
        </div>
    {/if}

    <div class="p-a-s card-content">
        <slot></slot>
    </div>
</div>