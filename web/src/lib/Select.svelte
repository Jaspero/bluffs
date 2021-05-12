<script>
    import {clickOutside} from './clickOutside.js';
    import { fly } from 'svelte/transition';
    import CloseCircle from "svelte-material-icons/CloseCircle.svelte";
    import ChevronDown from "svelte-material-icons/ChevronDown.svelte";
    import Check from "svelte-material-icons/Check.svelte";

    /**
     *  Specify input label
     *  @type {string}
     */
    export let label = "Label"

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

    export let options = []

    let opened = false

    function toggleSelect() {
        opened = !opened
    }

    function closeMenu() {
        opened = false
    }
</script>

<style lang="scss">
  .select {
    display: flex;
    position: relative;
    background-color: var(--theme-fg);
    border: 1px solid var(--theme-tertiary);
    box-shadow: 0 0 0 1px transparent;
    min-height: 56px;
    height: min-content;
    width: 100%;
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

    &-box {
      z-index: 1;
      position: absolute;
      top: 26px;
      left: 10px;
      width: calc(100% - 58px);
      color: var(--theme-primary);
      background-color: var(--theme-fg);
      outline: none;
      border: 1px solid var(--theme-tertiary);
      border-radius: 4px;
    }

    &-option {
      height: 48px;
      padding: 12px;
      user-select: none;
      transition: color .2s, background-color .2s;
      &:hover {
        background-color: var(--theme-backdrop);
      }
      &.checked {
        background-color: var(--primary-theme);
        color: var(--primary-primary);
      }
    }
  }

  input[type=checkbox] {
    display: none;
    margin: 4px 4px 4px 0;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    line-height: 16px;
    font-size: 16px;
    padding: 12px 48px 12px 12px;
    border-radius: 4px;
    flex: 1;
    min-height: 58px;
    outline: none;
    border: none;
    background-color: transparent;
    color: var(--theme-primary);
    caret-color: var(--theme-primary);
    font-family: Roboto,sans-serif;

    &:not(:placeholder-shown), &:focus:not(:placeholder-shown) {
      padding: 28px 48px 6px 12px;
    }
  }

  .label {
    display: block;
    position: absolute;
    top: 16px;
    left: 12px;
    color: var(--theme-secondary);
    pointer-events: none;
    user-select: none;
    font-size: 16px;
    font-family: Roboto,sans-serif;
    transition: top .3s, font-size .3s;

    &.move {
      top: 8px;
      font-size: 10px;
    }

    &.has-prefix {
      left: 48px;
    }
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
    transition: transform .35s;

    &.rotate {
      transform: rotate(180deg);
    }
  }

  .chip {
    position: relative;
    font-size: 12px;
    padding: 2px 6px;
    margin-top: 4px;
    user-select: none;
    background-color: var(--theme-tertiary);
  }
</style>

<div class="select {size} {spacing}" on:click|stopPropagation={toggleSelect} use:clickOutside on:click_outside={closeMenu}>
    {#if opened}
        <div class="select-box flex fd-col" transition:fly="{{ y: -10, duration: 300 }}">
            {#each options as option}
                <label for="{option.label}" class="select-option flex ai-center pointer" class:checked={option.checked}>
                    <input type="checkbox" id="{option.label}" value="{option.label}" bind:checked="{option.checked}">
                    <span class="flex-1">{option.label}</span>
                    {#if option.checked}
                        <Check size="24" color="white" />
                    {/if}
                </label>
            {/each}
        </div>
    {/if}

    <div class="chips">
        {#each options.filter(p => p.checked) as option}
            <div class="chip of-hidden flex ai-center pointer m-r-xs br-pill" on:click|stopPropagation={() => option.checked = false}>
                <span class="m-r-xs">{option.label}</span>

                <CloseCircle size="16px" />
                <div class="hover-backdrop"></div>
            </div>
        {/each}
    </div>

    <span class="label" class:move={options.some(p => p.checked) || opened} class:has-prefix={$$slots.prefix}>{label}</span>

    <div class="suffix pointer" class:rotate={opened}>
        <ChevronDown size="24px" />
    </div>
</div>
