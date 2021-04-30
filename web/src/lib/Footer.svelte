<script>
    import Field from "./Field.svelte";
    import Button from "./Button.svelte";
    import {dark} from "$lib/stores"

    let year = new Date().getFullYear()
</script>

<style lang="scss">
  h5 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  .shameless-plug {
    background-color: var(--footer-secondary);

    .grid {
      padding: 20px 10px;
    }

    a {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;

      &.discord {
        background-color: #7289DA;
      }
      &.twitter {
        background-color: #1DA1F2;
      }
    }
  }

  footer {
    background-color: var(--footer-primary);

    .grid {
      padding: 40px 0;
    }

    a {
      display: block;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .copyright {
    background-color: var(--footer-tertiary);
    padding: 10px;
  }
</style>

<div class="shameless-plug w-full">
    <div class="grid ai-center">
        <span>Get connected with us on social networks!</span>

        <div class="flex-1"></div>


        <div class="m-x-s flex ai-center">
            <span class="m-r-xs">Join us on Discord:</span>
            <a href="" class="flex jc-center ai-center discord">
                <img src="assets/discord.svg" alt="">
            </a>
        </div>

        <div class="m-x-s flex ai-center">
            <span class="m-r-xs">Follow us on Twitter:</span>
            <a href="" class="flex jc-center ai-center twitter">
                <img src="assets/twitter.svg" alt="">
            </a>
        </div>
    </div>
</div>

<footer>
    <div class="grid">
        <div class="col-4">
            <h5>Features</h5>
            <a href="">Link 1</a>
            <a href="">Link 2</a>
            <a href="">Link 3</a>
            <a href="">Link 4</a>
        </div>

        <div class="col-4">
            <h5>Get Started</h5>
            <a href="">Link 1</a>
            <a href="">Link 2</a>
            <a href="">Link 3</a>
            <a href="">Link 4</a>
        </div>

        <div class="col-4">
            <h5>Newsletter</h5>
            <p class="c-theme-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda in laboriosam magnam minima neque optio quidem repellendus veritatis voluptatum.</p>
            <Field label="Email" />
            <Button kind="filled" color="primary">Sign up</Button>
        </div>
    </div>
</footer>

<div class="copyright ta-center">
    ©{year} <a href="https://jaspero.co/" target="_blank">Jaspero</a>
</div>