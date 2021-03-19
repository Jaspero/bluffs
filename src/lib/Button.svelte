<script>
    /**
     * Set a function executed on click
     * @type {function}
     * Renders as <button>
     */
    export let click = undefined

    /**
     * Specify button kind
     * @type {"ghost" | "filled" | "outlined"}
     */
    export let kind = "filled"

    /**
     * Specify button color
     * @type {"primary" | "accent" | "warn"}
     */
    export let color = "primary"

    /**
     * Specify button size
     * @type {"normal" | "small"}
     */
    export let size = "normal"

    /**
     * Specify button type
     * @type {"button" | "submit"}
     */
    export let type = undefined

    /**
     * Specify if the button is a button or a link
     * @type {"button" | "link"}
     */
    export let option = "button"

    /**
     * Specify if the button is a button or a link
     * @type {string}
     */
    export let link = undefined

    /**
     * Specify anchor target
     * @type {"_blank" | "_self" | "_parent" | "_top"}
     * Exclusive to <a>
     */
    export let target = undefined
</script>

<style lang="scss">
    button, a {
        position: relative;
        display: inline-block;
        text-transform: uppercase;
        border: none;
        outline: none;

      &.small {
        min-width: 48px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        padding: 0 8px;
      }
      &.normal {
        min-width: 64px;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        padding: 0 16px;
      }

      &:hover .button-hover-backdrop {
        background-color: rgba(0,0,0,.06);
      }
    }

    .button-hover-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        transition: .2s;
    }

    .filled {
      &.primary {
        background-color: var(--primary-theme);
        color: var(--primary-primary);
      }
      &.accent {
        background-color: var(--accent-theme);
        color: var(--accent-primary);
      }
      &.warn {
        background-color: var(--warn-theme);
        color: var(--warn-primary);
      }
    }

    .outlined {
      background-color: var(--light-theme);

      &.primary {
        border: 1px solid var(--light-tertiary);
        color: var(--primary-theme);
      }
      &.accent {
        border: 1px solid var(--light-tertiary);
        color: var(--accent-theme);
      }
      &.warn {
        border: 1px solid var(--light-tertiary);
        color: var(--warn-theme);
      }
    }

    .ghost {
      background-color: var(--light-theme);

      &.primary {
        color: var(--primary-theme);
      }
      &.accent {
        color: var(--accent-theme);
      }
      &.warn {
        color: var(--warn-theme);
      }
    }
</style>

{#if option === "link" & click === undefined}
    <a href="/{link}" target="{target}" class="{size} {kind} {color}">
        <slot></slot>
        <span class="button-hover-backdrop"></span>
    </a>

    {:else}
    <button class="{size} {kind} {color} {click}">
        <slot></slot>
        <span class="button-hover-backdrop"></span>
    </button>
{/if}