<script>
    import Field from "$lib/Field.svelte";
    import Button from "$lib/Button.svelte";
    import Header from "$lib/Header.svelte";
</script>

<Header grid="small">Profile</Header>

<div class="grid-small nogutter">
    <div class="w-full flex jc-between ai-center">
        <h6>User name</h6>
        <Button kind="outlined">Edit Profile</Button>
    </div>
    <div class="fs-small c-light-secondary">Joined April 2021</div>
</div>