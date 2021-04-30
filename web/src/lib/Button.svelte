<script>
    import {createEventDispatcher} from 'svelte';
    let dispatch = createEventDispatcher();

    /**
     * Specify button kind
     * @type {"full"}
     */
    export let width = undefined

    /**
     * Specify button kind
     * @type {"ghost" | "filled" | "outlined"}
     */
    export let kind = "filled"

    /**
     * Specify button color
     * @type {"default" | "primary" | "accent" | "warn"}
     */
    export let color = "default"

    /**
     * Specify button size
     * @type {"small" | "normal" | "large" | "icon"}
     */
    export let size = "normal"

    /**
     * Specify button type
     * @type {"button" | "submit"}
     */
    export let type = undefined

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
    text-align: center;
    text-transform: uppercase;
    user-select: none;
    border-radius: 4px;
    border: none;
    outline: none;
    overflow: hidden;

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
    &.large {
      min-width: 64px;
      height: 48px;
      line-height: 48px;
      font-size: 14px;
      padding: 0 16px;
    }
    &.full {
      width: 100%;
    }
    &.icon {
      width: 40px;
      height: 40px;
      line-height: 1;
      border-radius: 50%;
      padding: 0;
    }
    &:hover .button-hover-backdrop {
      background-color: var(--theme-backdrop);
    }
  }

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
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
    &.default {
      background-color: var(--theme-bg);
      color: var(--theme-primary);
    }
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
    background-color: var(--theme-bg);
    border: 1px solid var(--theme-tertiary);

    &.default {
      color: var(--theme-primary);
    }
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

  .ghost {
    background-color: transparent;

    &.default {
      color: var(--theme-primary);
    }
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

{#if link}
    <a href="{link}" target="{target}" class="{size} {kind} {color} {width}">
        <slot></slot>
        <span class="button-hover-backdrop"></span>
    </a>
{:else}
    <button class="{size} {kind} {color} {width}" type="{type}" on:click={()=>dispatch('click')}>
        <slot></slot>
        <span class="button-hover-backdrop"></span>
    </button>
{/if}