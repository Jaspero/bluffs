<script>
    import Header from "../lib/Header.svelte";
    import Field from "../lib/Field.svelte";
    import EmailOutline from "svelte-material-icons/EmailOutline.svelte";
    import Brightness3 from "svelte-material-icons/Brightness3.svelte";
    import Brightness7 from "svelte-material-icons/Brightness7.svelte";
    import Button from "../lib/Button.svelte";
    import {dark} from "$lib/stores"
    import Password from "../lib/Password.svelte";

    function toggleTheme() {
        if ($dark === false) {
            document.documentElement.setAttribute('data-theme', 'dark');
            $dark = true;
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            $dark = false;
        }
    }
</script>

<style lang="scss">
  .theme-toggle {
    border: 1px solid var(--theme-tertiary);
    border-radius: 4px;
    background-color: var(--theme-fg);
    color: var(--theme-primary);
    height: 58px;
    padding: 0;
    font-size: 14px;
    text-transform: uppercase;
    min-width: 250px;
    margin-bottom: 15px;
    overflow: hidden;
    transition: border-color .3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow .3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      border-color: var(--theme-primary);
      box-shadow: 0 0 0 1px var(--theme-primary);
    }
  }
  .theme-icon {
    min-height: 58px;
    width: 36px;
  }
  .theme-text {
    height: 58px;
    padding: 12px;
  }
  .button-wrapper {
    transition: transform .4s cubic-bezier(0.4, 0, 0.2, 1);

    &.active {
      transform: translateY(-50%);
    }
  }
</style>

<Header>Settings</Header>

<div class="grid">
    <div class="col-12">
        <h5 class="m-b-s">User Settings</h5>

        <Field label="Email" type="email" autocomplete="email" required="true">
            <slot slot="prefix"><EmailOutline size="24px" /></slot>
        </Field>

        <Password label="Password" autocomplete="current-password" />

        <Button color="primary">Save User Settings</Button>
    </div>

    <div class="col-12">
        <h5 class="m-y-s">User Preferences</h5>

        <button class="theme-toggle flex" on:click={toggleTheme}>
            <span class="button-wrapper flex fd-col" class:active={$dark}>
                <span class="flex">
                    <span class="theme-icon flex jc-end ai-center">
                        <Brightness7 size="24px" />
                    </span>

                    <span class="theme-text flex ai-center">
                        <span>Light Theme</span>
                    </span>
                </span>

                <span class="flex">
                    <span class="theme-icon flex jc-end ai-center">
                        <Brightness3 size="24px" />
                    </span>

                    <span class="theme-text flex ai-center">
                        <span>Dark Theme</span>
                    </span>
                </span>
            </span>
        </button>

        <Button color="primary">Save User Preferences</Button>
    </div>
</div>
