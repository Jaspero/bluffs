<script>
    /**
     *
     * @type {"text"}
     */
    export let type = "text"

    /**
     *
     * @type {boolean}
     */
    export let required = false

    /**
     *
     * @type {"small" | "medium" | "large" | "none"}
     */
    export let spacing = "medium"

    /**
     *
     * @type {"normal" | "full"}
     */
    export let size = "normal"

    /**
     *  Specify input label
     *  @type {string}
     */
    export let id = undefined

    /**
     *  Specify input label
     *  @type {string}
     */
    export let label = "Label"

    /**
     * Specify autocomplete
     * @type {"email" | "username" | "new-password" | "current-password" | "off" | "on"}
     */
    export let autocomplete = undefined

    import ChevronDown from "svelte-material-icons/ChevronDown.svelte";
</script>

<style lang="scss">
  .field {
    display: block;
    position: relative;
    border: 1px solid var(--theme-tertiary);
    box-shadow: 0 0 0 1px transparent;
    height: 60px;
    border-radius: 4px;
    transition: .3s;

    &:hover {
      border: 1px solid var(--theme-secondary);
      box-shadow: 0 0 0 1px var(--theme-secondary);
    }
    &:focus-within {
      border: 1px solid var(--primary-theme);
      box-shadow: 0 0 0 1px var(--primary-theme);
    }
    &.small {
      margin-bottom: 5px;
    }
    &.medium {
      margin-bottom: 15px;
    }
    &.large {
      margin-bottom: 30px;
    }
    &.none {
      margin-bottom: 0;
    }
    &.normal {
      width: 250px;
    }
    &.full {
      width: 100%;
    }
    &.has-hint {
      margin-bottom: 32px;
    }
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: var(--theme-primary);
    -webkit-background-clip: text;
  }

  .select-field {
    display: block;
    position: relative;
    line-height: 16px;
    font-size: 16px;
    padding: 12px;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background-color: var(--theme-fg);
    color: var(--theme-primary);
    caret-color: var(--theme-primary);
    font-family: Roboto,sans-serif;

    &:not(:placeholder-shown), &:focus:not(:placeholder-shown) {
      padding: 24px 12px 6px;
    }
    &:not(:placeholder-shown) + .label,
    &:focus:not(:placeholder-shown) + .label {
      transform: translateY(-18px);
      font-size: 10px;
    }
  }

  .has-prefix {
    &.select-field, &.select-field:not(:placeholder-shown), &.select-field:focus:not(:placeholder-shown) {
      padding-left: 48px;
    }
  }

  .has-suffix {
    &.select-field, &.select-field:not(:placeholder-shown), &.select-field:focus:not(:placeholder-shown) {
      padding-right: 48px;
    }
  }

  .label {
    display: block;
    position: absolute;
    bottom: 16px;
    left: 12px;
    color: var(--theme-secondary);
    transition: 0.3s;
    pointer-events: none;
    font-size: 16px;
    font-family: Roboto,sans-serif;

    &.has-prefix {
      left: 48px;
    }
  }

  ::placeholder {
    visibility: hidden;
  }

  .prefix {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 48px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .suffix {
    position: absolute;
    top: 0;
    right: 0;
    width: 48px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hint {
    position: absolute;
    bottom: -24px;
    left: 12px;
    font-size: 12px;
    color: var(--theme-secondary);
  }

  .has-hint {

  }

  select {
    -webkit-appearance: none;
    appearance: none;
  }
</style>

<label for="{id}" class="field {spacing} {size}" class:has-hint={$$slots.hint}>
    {#if $$slots.prefix}
        <span class="prefix">
            <slot name="prefix"></slot>
        </span>
    {/if}

    <select id="{id}" size="" name="" class="select-field" class:has-prefix={$$slots.prefix} class:has-suffix={$$slots.suffix}>
        <slot></slot>
    </select>

    <span class="label" class:has-prefix={$$slots.prefix}>{label}</span>

    <span class="suffix">
        <ChevronDown size="24"></ChevronDown>
    </span>

    {#if $$slots.hint}
        <span class="hint">
            <slot name="hint"></slot>
        </span>
    {/if}
</label>