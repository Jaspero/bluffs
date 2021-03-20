<script>
    /**
     *
     * @type {"small" | "normal"}
     */
    export let grid = undefined
</script>

<style>
    section {
        background-color: var(--accent-theme);
        color: var(--accent-primary);
        margin-bottom: 3rem;
    }
    h1 {
        padding: 3rem 0;
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