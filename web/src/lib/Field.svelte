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
</script>

<style lang="scss">
  .input-wrapper {
    display: block;
    position: relative;
    height: 100%;
  }

  .input-field {
    display: block;
    position: relative;
    line-height: 16px;
    font-size: 16px;
    padding: 12px;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    color: var(--light-primary);
    caret-color: var(--light-primary);
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
    &.input-field, &.input-field:not(:placeholder-shown), &.input-field:focus:not(:placeholder-shown) {
      padding-left: 48px;
    }
  }

  .has-suffix {
    &.input-field, &.input-field:not(:placeholder-shown), &.input-field:focus:not(:placeholder-shown) {
      padding-right: 48px;
    }
  }

  .label {
    display: block;
    position: absolute;
    bottom: 16px;
    left: 12px;
    color: var(--light-secondary);
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

  .field {
    display: block;
    border: 1px solid var(--light-tertiary);
    box-shadow: 0 0 0 1px transparent;
    height: 60px;
    border-radius: 4px;
    overflow: hidden;
    max-width: 500px;
    transition: .3s;

    &:hover {
      border: 1px solid var(--light-secondary);
      box-shadow: 0 0 0 1px var(--light-secondary);
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
  }

  .prefix {
    z-index: 1;
    position: absolute;
    left: 12px;
    bottom: 16px;
    width: 24px;
    height: 24px;
  }

  .suffix {
    position: absolute;
    right: 12px;
    bottom: 16px;
    width: 24px;
    height: 24px;
  }
</style>

<label for="{id}" class="field {spacing} {size}">
    <span class="input-wrapper">
        {#if $$slots.prefix}
            <span class="prefix">
                <slot name="prefix"></slot>
            </span>
        {/if}
        <input autocomplete="{autocomplete}" type="{type}" id="{id}" class="input-field" placeholder="{label}" required="{required}" class:has-prefix={$$slots.prefix} class:has-suffix={$$slots.suffix}>
        <span class="label" class:has-prefix={$$slots.prefix}>{label}</span>
        {#if $$slots.suffix}
            <span class="suffix">
                <slot name="suffix"></slot>
            </span>
        {/if}
    </span>
</label>
