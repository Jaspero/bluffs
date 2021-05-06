<script>
    import Field from "./Field.svelte";
    import Button from "./Button.svelte";
    import {dark} from "$lib/stores"

    let year = new Date().getFullYear()
</script>

<style lang="scss">
    footer {
      padding: 30px 0;
      background-color: var(--footer-primary);
    }

    a {
      display: block;
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 14px;
      text-transform: uppercase;
      user-select: none;
      background-color: transparent;
      transition: background-color .3s;

      &:hover {
        background-color: var(--theme-backdrop);
      }
    }

    hr {
      margin: 20px 0;
    }

    span {
      font-size: 16px;
    }

    h1 {
      font-size: 30px;
    }

    h4 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      margin-bottom: 8px;
    }

    a {
      margin-top: 6px;
    }
</style>

<footer class="b-t">
    <div class="grid">
        <h1 class="col-12">Bluffs</h1>

        <span class="col-12">© {year} Bluffs. All rights reserved.</span>

        <hr>

        <div class="col-4 col-s-12">
            <h4>Navigation</h4>

            <a href="/packs">Packs</a>
            <a href="/marketplace">Marketplace</a>
            <a href="/leaderboard">Leaderboard</a>
            <a href="/faq">Common Questions</a>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
        </div>

        <div class="col-4 col-s-6">
            <h4>Newsletter</h4>

            <p>Subscribe to our newsletter & never miss out on upcoming packs and updates.</p>

            <a href="/faq">Newsletter</a>
        </div>

        <div class="col-4 col-s-6">
            <h4>Community</h4>

            <a href="https://discord.gg/E226Y6sX4Y" target="_blank">
                <img src="{$dark ? 'assets/discord.svg' : 'assets/discord-filled.svg'}" alt="Discord" class="m-r-xs">
                Discord
            </a>

            <a href="https://twitter.com/Bluffs" target="_blank">
                <img src="{$dark ? 'assets/twitter.svg' : 'assets/twitter-filled.svg'}" alt="Twitter" class="m-r-xs">
                Twitter
            </a>

            <a href="https://www.instagram.com/bluffs/" target="_blank">
                <img src="{$dark ? 'assets/instagram.svg' : 'assets/instagram-filled.svg'}" alt="Instagram" class="m-r-xs">
                Instagram
            </a>
        </div>
    </div>
</footer>