<style lang="scss">
    .nav {
        position: sticky;
        top: 0;
        background: var(--light-theme);
        height: 60px;

      &-grid {
        max-width: 1200px;
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
        color: var(--light-secondary);
        text-transform: uppercase;
        transition: .3s;

        &:first-child {
          font-size: 24px;
          padding: 0;
        }

        &:hover {
          color: var(--light-primary);

          & .hover-backdrop {
            background-color: rgba(0,0,0,.08);
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
    }

    .hover-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        transition: .3s;
    }
</style>

<nav class="nav">
    <div class="nav-grid h-full flex ai-center">
        <a class="nav-button m-r-s" href="/">
            BLUFFS
        </a>

        <a class="nav-button" href="/packs">
            Packs
            <span class="hover-backdrop"></span>
        </a>

        <a class="nav-button" href="/marketplace">
            Marketplace
            <span class="hover-backdrop"></span>
        </a>

        <a class="nav-button" href="/leaderboard">
            Leaderboard
            <span class="hover-backdrop"></span>
        </a>

        <div class="flex-1"></div>

        <a class="nav-button" href="/login">
            Login
            <span class="hover-backdrop"></span>
        </a>

        <a class="nav-button register" href="/register">
            Signup
            <span class="hover-backdrop"></span>
        </a>
    </div>
</nav>
