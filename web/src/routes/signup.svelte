<script>
    import Header from "$lib/Header.svelte";
    import Field from "$lib/Field.svelte";
    import Button from "$lib/Button.svelte";
    import AccountOutline from "svelte-material-icons/AccountOutline.svelte";
    import EmailOutline from "svelte-material-icons/EmailOutline.svelte";
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
      color: rgba(0,0,0,.9);

      .button-hover-backdrop {
        background-color: rgba(0,0,0,.02);
      }
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

<Header grid="small">Signup</Header>

<div class="grid-small">
    <h5 class="col-12">Create an account and start collecting buffs</h5>

    <hr>

    <form class="col-12">
        <Field label="User name" type="text" autocomplete="off" required="true">
            <slot slot="prefix"><AccountOutline size="24px" /></slot>
        </Field>
        <Field label="Email" type="email" autocomplete="email" required="true">
            <slot slot="prefix"><EmailOutline size="24px" /></slot>
        </Field>
        <Field label="Password" type="password" autocomplete="off" required="true">
            <slot slot="prefix"><LockOutline size="24px" /></slot>
        </Field>
        <Button type="submit" kind="filled" color="primary">Sign up</Button>
    </form>

    <hr>

    <div class="col-12">
        <button class="google-signup">
            <img src="../../assets/google-g.svg" alt="" width="18">
            Sign up with Google
            <span class="button-hover-backdrop"></span>
        </button>
    </div>
</div>