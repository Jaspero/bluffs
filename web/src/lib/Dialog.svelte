<script>
    import Close from "svelte-material-icons/Close.svelte";
    import Button from "./Button.svelte";
    import { fade } from 'svelte/transition';
    import {clickOutside} from './clickOutside.js';

    /**
     * Toggles Dialog on/off
     * @type {boolean}
     */
    export let opened = false

    /**
     * Specify dialog title
     * @type {string}
     */
    export let title = "Dialog Title"

    /**
     * Specify dialog subtitle
     * @type {string}
     */
    export let subtitle = undefined

    /**
     * Specify dialog content
     * @type {string}
     */
    export let content = undefined

    /**
     * Specify confirm label
     * @type {string}
     */
    export let confirm = "Confirm"

    /**
     * Speficy confirm button type
     * @type {"button" | "submit"}
     */
    export let confirmType = undefined

    /**
     * Specify cancel label
     * @type {string}
     */
    export let cancel = "Cancel"

    export function open() {
        opened = true
    }

    export function close() {
        opened = false
    }

    function handleClickOutside(event) {
        opened = false
    }
</script>

<style lang="scss">
  .dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: var(--theme-bg);
    transform: translate(-50%,-50%);
    box-shadow: 0 3px 6px rgba(0,0,0,.16);
    border-radius: 8px;

    &-backdrop {
      z-index: 10;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0,0,0,.5);
    }

    &-header {
      border-bottom: 2px dashed var(--theme-tertiary);
    }
    &-content {
      border-bottom: 2px dashed var(--theme-tertiary);
    }
  }
</style>

{#if opened}
    <div class="dialog-backdrop" transition:fade="{{ duration: 200 }}">
        <div class="dialog" use:clickOutside on:click_outside={handleClickOutside}>
            <div class="dialog-header p-a-s">
                <div class="flex jc-between ai-center">
                    <h5 class="m-r-s">{title}</h5>
                    <Button size="icon" kind="ghost" on:click={() => close()}><Close size="24px" /></Button>
                </div>
                {#if subtitle}
                    <p class="m-t-xs c-theme-secondary">{subtitle}</p>
                {/if}
            </div>


            {#if $$slots.content}
                <div class="dialog-content p-a-s">
                    <slot name="content"></slot>
                </div>
            {/if}

            <div class="flex jc-end p-a-s">
                <div class="m-r-s">
                    <Button color="warn" on:click={() => close()}>{cancel}</Button>
                </div>
                <Button color="primary" type="{confirmType}">{confirm}</Button>
            </div>
        </div>
    </div>
{/if}