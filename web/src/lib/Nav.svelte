<script>
    import Button from "./Button.svelte";
    import Menu from "svelte-material-icons/Menu.svelte";
    import Close from "svelte-material-icons/Close.svelte";

    let menu = false

    const toggleMenu = () => {
        menu = !menu
    }

    const closeMenu = () => {
        if (menu === true) {
            menu = !menu
        }
    }

    const toggleSwitch = (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
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

    &-grid {
      max-width: 1250px;
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

  .theme-switch-wrapper {
    display: flex;
    align-items: center;

    em {
      margin-left: 10px;
      font-size: 1rem;
    }
  }
  .theme-switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
  }

  .theme-switch input {
    display:none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
  }

  input:checked + .slider {
    background-color: #66bb6a;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>

<nav class="nav">
    <div class="nav-grid h-full flex ai-center">
        <a class="nav-button m-r-s" href="/">BLUFFS</a>

        <Button link="packs" kind="ghost">Packs</Button>

        <Button link="marketplace" kind="ghost">Marketplace</Button>

        <Button link="leaderboard" kind="ghost">Leaderboard</Button>

        <div class="flex-1"></div>

        <Button link="login" kind="ghost">Login</Button>

        <Button link="signup" color="primary">Signup</Button>
    </div>

    <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox" on:click={toggleSwitch}>
            <input type="checkbox" id="checkbox" />
            <div class="slider round"></div>
        </label>
        <em>Enable Dark Mode!</em>
    </div>
</nav>

<nav class="nav-mobile">
    <div class="nav-grid h-full flex ai-center">
        <a class="nav-button m-r-s" href="/" on:click={closeMenu}>BLUFFS</a>

        <div class="flex-1"></div>

        <Button size="icon" kind="ghost" on:click={toggleMenu}>
            {#if menu === false}
                <Menu size="24px" />
            {:else}
                <Close size="24px" />
            {/if}
        </Button>
    </div>
</nav>

<div class="menu"  class:active={menu}>
    <a href="/login" class="menu-button" on:click={closeMenu}>Login</a>
    <hr class="small">
    <a href="/signup" class="menu-button" on:click={closeMenu}>Signup</a>
    <hr class="small">
    <a href="/packs" class="menu-button" on:click={closeMenu}>Packs</a>
    <hr class="small">
    <a href="/marketplace" class="menu-button" on:click={closeMenu}>Marketplace</a>
    <hr class="small">
    <a href="/leaderboard" class="menu-button" on:click={closeMenu}>Leaderboard</a>
    <hr class="small">
    <a href="/profile" class="menu-button" on:click={closeMenu}>Profile</a>
</div>