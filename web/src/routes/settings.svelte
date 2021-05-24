<script>
    import Header from "../lib/Header.svelte";
    import Field from "../lib/Field.svelte";
    import EmailOutline from "svelte-material-icons/EmailOutline.svelte";
    import Brightness3 from "svelte-material-icons/Brightness3.svelte";
    import Brightness7 from "svelte-material-icons/Brightness7.svelte";
    import AccountOutline from "svelte-material-icons/AccountOutline.svelte";
    import BellRingOutline from "svelte-material-icons/BellRingOutline.svelte";
    import BellOffOutline from "svelte-material-icons/BellOffOutline.svelte";
    import Button from "../lib/Button.svelte";
    import {dark} from "$lib/stores"
    import Password from "../lib/Password.svelte";
    import Card from "../lib/Card.svelte";

    function toggleTheme() {
        if ($dark === false) {
            document.documentElement.setAttribute('data-theme', 'dark');
            $dark = true;
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            $dark = false;
        }
    }

    let tabs = ["Profile", "Account", "Appearance", "Account Security", "Wallet"]
    let selected = tabs[0]

    function toggleSubscription() {
        if (subscribed === false) {
            subscribed = true;
        } else {
            subscribed = false;
        }
    }

    let subscribed = false
</script>

<style lang="scss">
  .toggle-button {
    position: relative;
    border: 1px solid var(--theme-tertiary);
    border-radius: 4px;
    background-color: var(--theme-fg);
    color: var(--theme-primary);
    height: 58px;
    padding: 0;
    font-size: 14px;
    min-width: 250px;
    margin-bottom: 40px;
    transition: border-color .3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow .3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      border-color: var(--theme-primary);
      box-shadow: 0 0 0 1px var(--theme-primary);
    }

    &-wrapper {
      height: 58px;
      overflow: hidden;
      text-transform: uppercase;
    }

    &-content {
      transition: transform .4s cubic-bezier(0.4, 0, 0.2, 1);

      &.active {
        transform: translateY(-50%);
      }
    }
  }
  .toggle-icon {
    min-height: 58px;
    width: 36px;
  }
  .toggle-text {
    height: 58px;
    padding: 12px;
  }
  .toggle-hint {
    position: absolute;
    top: calc(100% + 8px);
    left: 8px;
  }

  ul {
    border: 1px solid var(--theme-tertiary);
    border-radius: 4px;
    overflow: hidden;
    padding: 0;
  }

  li {
    color: var(--theme-primary);
    background-color: var(--theme-bg);
    text-transform: uppercase;
    list-style-type: none;
    font-size: 14px;
    padding: 8px;
    width: 100%;
    cursor: pointer;
    border-left: 2px solid transparent;
    border-top: 1px solid var(--theme-tertiary);
    transition: background-color .3s;

    &:first-of-type {
      color: var(--theme-secondary);
      padding: 8px;
      cursor: default;
      font-weight: 500;
      border-top: none;
    }

    &:not(:first-child):hover {
      background-color: var(--theme-fg)
    }

    &.selected {
      border-left: 2px solid var(--primary-theme);
    }
  }
</style>

<Header>Settings</Header>

<div class="grid">
    <div class="col-6 col-s-12">
        <h4 class="m-b-s">User Settings</h4>

        <Field label="Email" type="email" autocomplete="email" required="true">
            <slot slot="prefix"><EmailOutline size="24px" /></slot>
        </Field>

        <Password label="Password" autocomplete="current-password" spacing="none" />

        <div class="m-t-s">
            <Button color="primary">Save User Settings</Button>
        </div>
    </div>

    <div class="col-6 col-s-12">
        <h4 class="m-b-s">User Preferences</h4>

        <button class="toggle-button flex" on:click={toggleTheme}>
            <span class="toggle-button-wrapper">
                <span class="toggle-button-content flex fd-col" class:active={$dark}>
                    <span class="flex">
                        <span class="toggle-icon flex jc-end ai-center">
                            <Brightness7 size="24px" />
                        </span>

                        <span class="toggle-text flex ai-center">
                            <span>Light Theme</span>
                        </span>
                    </span>

                    <span class="flex">
                        <span class="toggle-icon flex jc-end ai-center">
                            <Brightness3 size="24px" />
                        </span>

                        <span class="toggle-text flex ai-center">
                            <span>Dark Theme</span>
                        </span>
                    </span>
                </span>
            </span>

            <span class="toggle-hint fs-small c-theme-secondary ta-left">
                Choose how Bluffs looks to you.
            </span>
        </button>

        <button class="toggle-button flex" on:click={toggleSubscription}>
            <span class="toggle-button-wrapper">
                <span class="toggle-button-content flex fd-col" class:active={subscribed}>
                    <span class="flex">
                        <span class="toggle-icon flex jc-end ai-center">
                            <BellOffOutline size="24px" />
                        </span>

                        <span class="toggle-text flex ai-center">
                            <span>Not Subscribed</span>
                        </span>
                    </span>

                    <span class="flex">
                        <span class="toggle-icon flex jc-end ai-center">
                            <BellRingOutline size="24px" />
                        </span>

                        <span class="toggle-text flex ai-center">
                            <span>Subscribed</span>
                        </span>
                    </span>
                </span>
            </span>

            <span class="toggle-hint fs-small c-theme-secondary ta-left">
                Subscribe to our Newsletter to get regular updates and promotions.
            </span>
        </button>

        <div class="m-t-s">
            <Button color="primary">Save User Preferences</Button>
        </div>
    </div>
</div>
