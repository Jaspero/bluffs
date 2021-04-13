<script>
    /**
     *
     * @type {"small" | "normal"}
     */
    export let grid = undefined
</script>

<style lang="scss">
  section {
    color: var(--theme-primary);
  }
  h1 {
    padding: 2rem 10px;
  }
  hr {
    margin-top: 0;
  }
</style>

<section>
    {#if grid == "small"}
        <div class="grid-small">
            <h1>
                <slot></slot>
            </h1>
        </div>
    {:else}
        <div class="grid">
            <h1>
                <slot></slot>
            </h1>
        </div>
    {/if}
    <hr>
</section>