<script>
    import EyeOffOutline from "svelte-material-icons/EyeOffOutline.svelte";
    import EyeOutline from "svelte-material-icons/EyeOutline.svelte";

    /**
     *
     * @type {"password"}
     */
    export let type = "password"

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
     * @type {"new-password" | "current-password"}
     */
    export let autocomplete = undefined

    function toggleVisibility() {
        if (type === "password") {
            type = "text"
        } else {
            type = "password"
        }
    }
</script>

<style lang="scss">
  .field {
    display: flex;
    position: relative;
    background-color: var(--theme-fg);
    border: 1px solid var(--theme-tertiary);
    box-shadow: 0 0 0 1px transparent;
    height: 60px;
    border-radius: 4px;
    transition: border .3s, box-shadow .3s;
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
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: var(--theme-primary);
    -webkit-background-clip: text;
  }

  .input-field {
    display: flex;
    position: relative;
    line-height: 16px;
    font-size: 16px;
    padding: 12px 12px 12px 0;
    border-radius: 4px;
    width: inherit;
    height: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    color: var(--theme-primary);
    caret-color: var(--theme-primary);
    font-family: Roboto,sans-serif;

    &:not(:placeholder-shown), &:focus:not(:placeholder-shown) {
      padding: 24px 12px 6px 0;
    }
    &:not(:placeholder-shown) + .label,
    &:focus:not(:placeholder-shown) + .label {
      transform: translateY(-18px);
      font-size: 10px;
    }
  }

  .label {
    display: block;
    position: absolute;
    bottom: 16px;
    left: 48px;
    color: var(--theme-secondary);
    transition: transform .3s, font-size .3s;
    pointer-events: none;
    user-select: none;
    font-size: 16px;
    font-family: Roboto,sans-serif;
  }

  ::placeholder {
    visibility: hidden;
  }

  .prefix {
    z-index: 10;
    min-width: 48px;
    height: 100%;
  }
</style>

<label for="{id}" class="field {spacing} {size}">
    <span class="prefix flex jc-center ai-center pointer" on:click={toggleVisibility}>
        {#if type === "password"}
            <EyeOffOutline size="24px" />

            {:else} <EyeOutline size="24px" />
        {/if}
    </span>

    <input autocomplete="{autocomplete}" type="{type}" id="{id}" class="input-field" placeholder="{label}" required="{required}">

    <span class="label">{label}</span>
</label>
