<script>
    /**
     *
     * @type {"small" | "normal"}
     */
    export let grid = undefined
</script>

<style lang="scss">
  section {
    background-color: var(--accent-theme);
    color: var(--accent-primary);
    margin-bottom: 3rem;
  }
  h1 {
    padding: 3rem 10px;
  }

  @media (max-width: 900px) {
    section {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 600px) {
    section {
      margin-bottom: 1rem;
    }
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
</section>