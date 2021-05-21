<script>
    import Buff from "../lib/Buff.svelte";
    import Select from "../lib/Select.svelte";
    import Dialog from "../lib/Dialog.svelte";
    import Field from "../lib/Field.svelte";

    let buffs = [
        {buffName: 'Vigor', buffEffect: "+5% Energy", tier: 'rare', owned: false},
        {buffName: 'Certified Rocket', buffEffect: "+5% Looks", tier: 'common', owned: false},
        {buffName: 'Total Resistance', buffEffect: "+5% Immune System", tier: 'epic', owned: false},
        {buffName: 'Jolly Joker', buffEffect: "+2% Humor, +3% Happiness", tier: 'rare', owned: false},
        {buffName: 'Loose Pants', buffEffect: "+5% Weight Loss", tier: 'rare', owned: false},
        {buffName: 'Keen Eye', buffEffect: "+5% Art", tier: 'rare', owned: true, cooldown: "23:59:59"},
        {buffName: 'Speedy Soles', buffEffect: "+5% Speed", tier: 'common', owned: true},
        {buffName: 'Power Nap', buffEffect: "+5% Sleep", tier: 'common', owned: true},
        {buffName: 'Suit and Tie', buffEffect: "+5% Business", tier: 'legendary', owned: true},
        {buffName: 'Four-Leaf Clover', buffEffect: "+5% Luck", tier: 'epic', owned: true}
    ]

    let options = [
        {label: 'Owned'},
        {label: 'Not Owned'},
        {label: 'Ready to Cast'},
        {label: 'On Cooldown'}
    ]

    let dialog
</script>

<style lang="scss">
  .filter {
    z-index: 1;
    position: sticky;
    top: 60px;
    background-color: var(--theme-bg);

    @media (max-width: 900px) {
      top: 50px;
    }
  }
</style>

<div class="filter b-b-dashed">
    <div class="grid">
        <div class="col-12">
            <Select label="Filters" {options} spacing="none" size="full" />
        </div>
    </div>
</div>

<div class="grid">
    {#each buffs as buff}
        {#if buff.owned}
            <div class="col-3 col-s-4 col-xs-6 xs-p-a-0">
                <Buff {buff} on:click={() => dialog.open()} />
            </div>
        {/if}
    {/each}
</div>

<Dialog title="Choose the target for your buff" confirm="Cast" bind:this={dialog}>
    <slot slot="content">
        <Field label="Target's Twitter Anchor">
            <slot slot="hint">Example: @elonmusk</slot>
        </Field>
    </slot>
</Dialog>