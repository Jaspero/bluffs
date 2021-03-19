<script>
    import Field from "../lib/Field.svelte";
    import Button from "../lib/Button.svelte";
    import Header from "../lib/Header.svelte";
</script>

<Header grid="small">Login</Header>

<div class="grid-small nogutter">
    <h5 class="w-full">Log in to view your collection and open packs</h5>

    <hr>

    <form class="col-12">
        <Field label="User name" />
        <Field label="Password" type="password"/>
        <Button type="submit" kind="filled" color="primary">Log in</Button>
    </form>

    <hr>

    <div class="col-12">
        <p class="fs-small">Forgot your password?</p>
        <Button kind="ghost" color="primary" size="small">Reset password</Button>
    </div>

    <div class="col-12 m-t-m">
        <p class="fs-small">Don't have an account?</p>
        <Button option="link" link="register" kind="ghost" color="primary" size="small">Register</Button>
    </div>
</div>