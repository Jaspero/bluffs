<script>
    import Header from "$lib/Header.svelte";
    import Field from "$lib/Field.svelte";
    import Button from "$lib/Button.svelte";
    import EmailOutline from "svelte-material-icons/EmailOutline.svelte";
    import Password from "../lib/Password.svelte";
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

<Header grid="small">Signup</Header>

<div class="grid-small">
    <h5 class="col-12">Create an account and start collecting buffs</h5>

    <hr>

    <form class="col-12">
        <Field label="Email" type="email" autocomplete="email" required="true">
            <slot slot="prefix"><EmailOutline size="24px" /></slot>
        </Field>

        <Password label="Password" autocomplete="off" required="true" />

        <Button type="submit" kind="filled" color="primary">Sign up</Button>
    </form>

    <hr>

    <div class="col-12">
        <button class="google-signup">
            <img src="../../assets/google-g.svg" alt="" width="18">
            Sign up with Google
        </button>
    </div>
</div>