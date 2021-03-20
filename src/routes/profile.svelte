<script>
    import Field from "$lib/Field.svelte";
    import Button from "$lib/Button.svelte";
    import Header from "$lib/Header.svelte";
</script>

<Header grid="small">Profile</Header>

<div class="grid-small nogutter">
    <div class="col-12 m-b-s">
        <h4 class="m-b-xs">Account information</h4>
        <p>Information containing your email, user name and password.</p>
    </div>

    <div class="col-12">
        <Field type="email" label="Email"></Field>
    </div>

    <div class="col-12">
        <Field type="text" label="User Name"></Field>
    </div>

    <div class="col-12">
        <Field type="password" label="password"></Field>
    </div>

    <hr>

    <div class="col-12 m-b-s">
        <h4 class="m-b-xs">Social</h4>
        <p>A connected Twitter account is required to cast buffs.</p>
    </div>

    <div class="col-12">
        <Field type="email" label="Email"></Field>
    </div>

    <div class="col-12">
        <Field type="text" label="User Name"></Field>
    </div>

    <div class="col-12">
        <Field type="password" label="password"></Field>
    </div>

    <hr>
</div>