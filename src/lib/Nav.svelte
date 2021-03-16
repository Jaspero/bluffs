<style>
    nav {
        background: #EDF0F7;
        height: 60px;
    }
    .nav-grid {
        max-width: 1200px;
        margin: 0 auto;
    }
    nav > a {
        font-size: 14px;
    }

    a {
        position: relative;
        display: inline-block;
        overflow: hidden;
        min-width: 64px;
        height: 36px;
        line-height: 36px;
        padding: 0 16px;
        color: rgba(0,0,0,.6);
        text-transform: uppercase;
        transition: .3s;
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

    a:hover {
        color: rgba(0,0,0,.9);
    }

    a:hover .hover-backdrop {
        background-color: rgba(0,0,0,.08);
    }

    a.register {
        background-color: var(--primary-theme);
        color: white;
    }
</style>

<nav>
    <div class="nav-grid h-full flex ai-center">
        <a href="/" class="m-r-s">BLUFFS</a>

        <a href="/packs">
            Packs
            <span class="hover-backdrop"></span>
        </a>

        <a href="/marketplace">
            Marketplace
            <span class="hover-backdrop"></span>
        </a>

        <a href="/leaderboard">
            Leaderboard
            <span class="hover-backdrop"></span>
        </a>

        <div class="flex-1"></div>

        <a href="/login">
            Log in
            <span class="hover-backdrop"></span>
        </a>

        <a href="/register" class="register">
            Register
            <span class="hover-backdrop"></span>
        </a>
    </div>
</nav>
