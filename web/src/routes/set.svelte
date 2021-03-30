<script>
    import Buff from "../lib/Buff.svelte";
    import Dialog from "../lib/Dialog.svelte";
    import Field from "../lib/Field.svelte";

    let buffs = [
        {buffName: 'Vigor', buffEffect: "+5% Energy", tier: 'rare'},
        {buffName: 'Certified Rocket', buffEffect: "+5% Looks", tier: 'common'},
        {buffName: 'Total Resistance', buffEffect: "+5% Immune System", tier: 'epic'},
        {buffName: 'Jolly Joker', buffEffect: "+2% Humor, +3% Happiness", tier: 'rare'},
        {buffName: 'Loose Pants', buffEffect: "+5% Weight Loss", tier: 'rare'},
        {buffName: 'Keen Eye', buffEffect: "+5% Art", tier: 'rare'},
        {buffName: 'Speedy Soles', buffEffect: "+5% Speed", tier: 'common'},
        {buffName: 'Power Nap', buffEffect: "+5% Sleep", tier: 'common'},
        {buffName: 'Suit and Tie', buffEffect: "+5% Business", tier: 'legendary'},
        {buffName: 'Four-Leaf Clover', buffEffect: "+5% Luck", tier: 'epic'}
    ];

    let buff = {
        buffName: 'Four-Leaf Clover',
        buffEffect: "+5% Luck",
        tier: 'unique'
    }

    let dialog
</script>

<style>
    .special {
        background-color: #edf4f6;
    }
</style>

<div class="special">
    <div class="grid jc-between">
        <div class="col-7 flex fd-col jc-center">
            <h1 class="m-b-xs">Common Set 2021</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur hic inventore iusto labore, magni maiores molestias nemo, nesciunt nulla odio, optio perspiciatis possimus quam sunt ullam unde. Error, quo.</p>
        </div>

        <div class="col-3">
            <Buff {buff} />
        </div>
    </div>
</div>

<div class="grid">
    {#each buffs as buff}
        <div class="col-3">
            <Buff {buff} on:click={() => dialog.open()} />
        </div>
    {/each}
</div>

<Dialog title="Choose on who you want to cast the buff" confirm="Cast" bind:this={dialog}>
    <slot slot="content">
        <Field label="Target's Twitter Anchor">
            <slot slot="hint">Example: @elonmusk</slot>
        </Field>
    </slot>
</Dialog>