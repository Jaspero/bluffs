<script>
    import Field from "../lib/Field.svelte";
    import Button from "../lib/Button.svelte";
    import Header from "../lib/Header.svelte";
    import AccountOutline from "svelte-material-icons/AccountOutline.svelte";
    import LockOutline from "svelte-material-icons/LockOutline.svelte";
</script>

<style lang="scss">
  .google-signup {
    position: relative;
    border: 1px solid var(--light-tertiary);
    border-radius: 4px;
    background-color: var(--light-theme);
    color: rgba(0,0,0,.54);
    font-family: Roboto-Medium,sans-serif;
    outline: none;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 24px;
    height: 40px;
    transition: .3s;

    img {
      margin-right: 18px;
    }

    &:hover {
      color: rgba(0,0,0,.7);
      border-color: var(--light-secondary);
    }
  }

  .button-hover-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: .3s;
  }
</style>

<Header grid="small">Login</Header>

<div class="grid-small">
    <h5 class="col-12">Log in to view your collection and open packs</h5>

    <hr>

    <form class="col-12">
        <Field label="User name" autocomplete="username" required="true">
            <slot slot="prefix"><AccountOutline size="24px" /></slot>
        </Field>
        <Field label="Password" type="password" autocomplete="current-password" required="true">
            <slot slot="prefix"><LockOutline size="24px" /></slot>
        </Field>
        <Button type="submit" kind="filled" color="primary">Log in</Button>
    </form>

    <hr>

    <div class="col-12">
        <button class="google-signup">
            <img src="../../assets/google-g.svg" alt="" width="18">
            Sign in with Google
        </button>
    </div>

    <hr>

    <div class="col-12">
        <p class="fs-small">Forgot your password?</p>
        <Button kind="ghost" color="primary" size="small">Reset password</Button>
    </div>

    <div class="col-12 m-t-s">
        <p class="fs-small">Don't have an account?</p>
        <Button link="register" kind="ghost" color="primary" size="small">Register</Button>
    </div>
</div>