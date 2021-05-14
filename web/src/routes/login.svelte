<script>
    import Field from "../lib/Field.svelte";
    import Button from "../lib/Button.svelte";
    import Header from "../lib/Header.svelte";
    import EmailOutline from "svelte-material-icons/EmailOutline.svelte";
    import Dialog from "../lib/Dialog.svelte";

    let dialog
</script>

<style lang="scss">
  .google-signup {
    position: relative;
    border: 1px solid rgba(0,0,0,.16);
    border-radius: 4px;
    background-color: #FFFFFF;
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
      border-color: rgba(0,0,0,.4);
    }
  }
</style>

<Header grid="small">Login</Header>

<div class="grid-small">
    <h5 class="col-12">Log in to view your collection and open packs</h5>

    <hr>

    <form class="col-12">
        <Field label="Email" type="email" autocomplete="email" required="true">
            <slot slot="prefix"><EmailOutline size="24px" /></slot>
        </Field>

        <Password label="Password" autocomplete="current-password" required="true" />

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
        <Button kind="ghost" color="primary" size="small" on:click={() => dialog.open()}>Reset password</Button>
    </div>

    <div class="col-12 m-t-s">
        <p class="fs-small">Don't have an account?</p>
        <Button link="/signup" kind="ghost" color="primary" size="small">Register</Button>
    </div>
</div>

<Dialog bind:this={dialog} title="Forgot your password?" subtitle="Don't worry! Just fill in your email and we'll send you a link to reset your password." confirm="submit" confirmType="submit">
    <slot slot="content">
        <Field label="Email" type="email" autocomplete="email" spacing="none" required="true">
            <slot slot="prefix"><EmailOutline size="24px" /></slot>
        </Field>
    </slot>
</Dialog>