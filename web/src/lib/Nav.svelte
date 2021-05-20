<script>
    import Button from "./Button.svelte";
    import Menu from "svelte-material-icons/Menu.svelte";
    import Close from "svelte-material-icons/Close.svelte";
    import Brightness3 from "svelte-material-icons/Brightness3.svelte";
    import Brightness7 from "svelte-material-icons/Brightness7.svelte";
    import AccountCircleOutline from "svelte-material-icons/AccountCircleOutline.svelte";
    import {clickOutside} from './clickOutside.js';
    import { fly } from 'svelte/transition';
    import {dark} from "$lib/stores"

    let menu = false

    let profileMenu = false

    let user = "QElizabeth"

    function toggleMenu(event) {
        event.stopPropagation()
        menu = true
    }

    function closeMenu() {
        if (menu) {
            menu = false
        }
    }

    function toggleTheme() {
        if ($dark === false) {
            document.documentElement.setAttribute('data-theme', 'dark');
            $dark = true;
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            $dark = false;
        }
    }

    function toggleProfileMenu() {
        profileMenu = !profileMenu
    }

    function closeProfileMenu() {
        if (profileMenu) {
            profileMenu = false
        }
    }
</script>

<style lang="scss">
  .nav {
    z-index: 2;
    position: sticky;
    top: 0;
    background: var(--theme-bg);
    border-bottom: 1px solid var(--theme-tertiary);
    height: 60px;
    transition: background-color .5s;

    &-grid {
      max-width: 1250px;
      width: 100%;
      padding: 0 10px;
      margin: 0 auto;
    }

    &-button {
      position: relative;
      display: inline-block;
      overflow: hidden;
      min-width: 64px;
      height: 36px;
      font-size: 14px;
      line-height: 36px;
      padding: 0 16px;
      color: var(--theme-secondary);
      text-transform: uppercase;
      transition: .3s;

      &:first-child {
        font-size: 24px;
        padding: 0;
      }

      &:hover {
        color: var(--theme-primary);

        & .hover-backdrop {
          background-color: var(--theme-backdrop);
        }
      }

      &.register {
        background-color: var(--primary-theme);
        color: white;

        &:hover .hover-backdrop {
          background-color: rgba(0,0,0,.08);
        }
      }
    }

    &-mobile {
      display: none;
      z-index: 2;
      position: sticky;
      top: 0;
      background: var(--theme-bg);
      border-bottom: 1px solid var(--theme-tertiary);
      height: 50px;
    }
  }

  .menu {
    display: none;
    z-index: 2;
    position: fixed;
    flex-direction: column;
    top: 50px;
    right: 0;
    transform: translateX(100%);
    width: 180px;
    height: calc(100% - 50px);
    padding: 10px;
    background-color: var(--theme-bg);
    border-left: 1px solid var(--theme-tertiary);
    transition: transform .45s;

    &.active {
      transform: translateX(0);
    }

    &-button {
      display: block;
      border: none;
      text-transform: uppercase;
      padding: 0 8px;
      line-height: 30px;
      font-size: 14px;
    }
  }

  .profile {
    position: relative;

    &-menu {
      position: absolute;
      top: 38px;
      right: 0;
      background-color: var(--theme-fg);

      a {
        display: block;
        transition: background-color .3s;

        &:hover {
          background-color: var(--theme-backdrop);
        }
      }

      button {
        border-top: 1px solid var(--theme-tertiary);
        border-right: none;
        border-bottom: none;
        border-left: none;
        background-color: var(--theme-fg);
        color: var(--theme-primary);
        text-align: left;
        transition: background-color .3s;

        &:hover {
          background-color: var(--theme-backdrop);
        }
      }
    }
  }

  @media (max-width: 900px) {
    .nav {
      display: none;
    }
    .nav-mobile {
      display: block;
    }
    .menu {
      display: flex;
    }
  }
</style>

<nav class="nav">
    <div class="nav-grid h-full flex ai-center">
        <h6>
            <a class="nav-button" href="/">BLUFFS</a>
        </h6>

        <div class="flex-1"></div>

        <!--<div class="m-r-xs">
            <Button link="/packs" kind="ghost">Packs</Button>
        </div>

        <div class="m-r-xs">
            <Button link="/marketplace" kind="ghost">Marketplace</Button>
        </div>-->

        <div class="m-r-xs">
            <Button link="/leaderboard" kind="ghost">Leaderboard</Button>
        </div>

        <div class="m-r-xs">
            <Button link="/faq" kind="ghost">Common Questions</Button>
        </div>

        <div class="m-r-xs">
            <Button link="/login" kind="ghost">Login</Button>
        </div>

        <div class="m-r-xs">
            <Button link="/signup" color="primary">Join</Button>
        </div>

        <div class="m-r-xs">
            <Button kind="ghost" size="icon" on:click={toggleTheme}>
                {#if $dark}
                    <Brightness3 size="24px" />
                {:else}
                    <Brightness7 size="24px" />
                {/if}
            </Button>
        </div>

        <div class="profile" use:clickOutside on:click_outside={closeProfileMenu}>
            <Button kind="ghost" size="icon" on:click={toggleProfileMenu}>
                <img src="assets/profile-pic.png" alt="">
                <!--<AccountCircleOutline size="24px" />-->
            </Button>

            {#if profileMenu}
                <div class="profile-menu b-a br-rounded" transition:fly="{{ y: -200, duration: 200 }}">
                    <p class="fs-small p-a-xs ws-nowrap">Signed in as <span class="fw-medium">{user}</span></p>
                    <a class="fs-small p-a-xs b-t" href="/profile" on:click={closeProfileMenu}>Your Profile</a>
                    <a class="fs-small p-a-xs b-t" href="/settings" on:click={closeProfileMenu}>Settings</a>
                    <button class="fs-small p-a-xs w-full" on:click={closeProfileMenu}>Sign out</button>
                </div>
            {/if}
        </div>
    </div>
</nav>

<nav class="nav-mobile">
    <div class="nav-grid h-full flex ai-center">
        <a class="nav-button m-r-s" href="/" on:click={closeMenu}>BLUFFS</a>

        <div class="flex-1"></div>

        <div class="m-r-xs">
            <Button size="icon" kind="ghost" on:click={toggleTheme}>
                {#if $dark}
                    <Brightness3 size="24px" />
                {:else}
                    <Brightness7 size="24px" />
                {/if}
            </Button>
        </div>

        <Button size="icon" kind="ghost" on:click={toggleMenu}> <!--Todo: Filip-->
            {#if menu}
                <Close size="24px" />
            {:else}
                <Menu size="24px" />
            {/if}
        </Button>
    </div>
</nav>

<div class="menu" class:active={menu} use:clickOutside on:click_outside={closeMenu}>
    <a href="/login" class="menu-button" on:click={closeMenu}>Login</a>
    <hr class="small">
    <a href="/signup" class="menu-button" on:click={closeMenu}>Signup</a>
    <hr class="small">
    <!--<a href="/packs" class="menu-button" on:click={closeMenu}>Packs</a>
    <hr class="small">
    <a href="/marketplace" class="menu-button" on:click={closeMenu}>Marketplace</a>
    <hr class="small">-->
    <a href="/leaderboard" class="menu-button" on:click={closeMenu}>Leaderboard</a>
    <hr class="small">
    <a href="/faq" class="menu-button" on:click={closeMenu}>Common Questions</a>
    <hr class="small">
    <a href="/profile" class="menu-button" on:click={closeMenu}>Profile</a>
    <hr class="small">
    <a href="/settings" class="menu-button" on:click={closeMenu}>Settings</a>
</div>