<script>
    import Header from "$lib/Header.svelte";
    import Pack from "$lib/Pack.svelte";
    import Field from "$lib/Field.svelte";
    import Dialog from "$lib/Dialog.svelte";
    import Magnify from "svelte-material-icons/Magnify.svelte";
    import Plus from "svelte-material-icons/Plus.svelte";
    import Minus from "svelte-material-icons/Minus.svelte";
    import Select from "../lib/Select.svelte";

    let packs = [
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'rare'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'common'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'epic'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'rare'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'rare'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'rare'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'common'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'common'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'legendary'},
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'epic'},
    ];

    let options = [
        {label: 'Option 1'},
        {label: 'Option 2'},
        {label: 'Option 3'},
        {label: 'Option 4'},
        {label: 'Option 5'},
        {label: 'Option 6'},
        {label: 'Option 7'},
        {label: 'Option 8'},
        {label: 'Option 9'}
    ]

    let packDetails = [
        {packName: 'Pack Name', cost: 4.99, count: 10, sold: 1000, tier: 'rare'},
    ];

    let amount = 1

    function addAmount() {
        amount += 1
    }

    function removeAmount() {
        if (amount > 1) {
            amount -= 1
        }
    }

    let dialog
</script>

<style lang="scss">
  .search {
    z-index: 1;
    position: sticky;
    top: 60px;
    border-bottom: 2px dashed var(--theme-tertiary);
    background-color: var(--theme-bg);

    @media (max-width: 900px) {
      top: 50px;
    }
  }

  .amount-field {
    line-height: 16px;
    font-size: 16px;
    padding: 12px;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    text-align: center;
    background-color: var(--theme-bg);
    color: var(--theme-primary);
    caret-color: var(--theme-primary);
    font-family: Roboto,sans-serif;
  }

  .box {
    display: flex;
    position: relative;
    border: 1px solid var(--theme-tertiary);
    box-shadow: 0 0 0 1px transparent;
    height: 54px;
    border-radius: 4px;
    margin-bottom: 15px;
    overflow: hidden;
    transition: box-shadow .3s, border .3s;

    &:hover {
      border: 1px solid var(--theme-secondary);
      box-shadow: 0 0 0 1px var(--theme-secondary);
    }

    &:focus-within {
      border: 1px solid var(--primary-theme);
      box-shadow: 0 0 0 1px var(--primary-theme);
    }
  }

  .amount-button {
    position: absolute;
    width: 54px;
    height: 52px;
    line-height: 1;
    padding: 0;
    border: none;
    border-radius: 0;
    outline: none;
    background-color: var(--theme-bg);
    color: var(--theme-primary);
    transition: 0.4s;

    &:first-child {
      top: 0;
      left: 0;
      border-right: 2px solid transparent;
    }

    &:last-child {
      top: 0;
      right: 0;
      border-left: 2px solid transparent;
    }


    &:active {
      background-color: rgba(0,0,0,.04);
      background-size: 100%;
      transition: background 0s;
    }
  }

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance:textfield;
  }
</style>

<Header>Packs</Header>

<div class="grid">
    <div class="col-12 search flex">
        <div class="m-r-xs">
            <Field label="Search" spacing="none">
                <slot slot="prefix"><Magnify size="24px" /></slot>
            </Field>
        </div>

        <Select label="Filters" {options} spacing="none" size="full" />
    </div>

    {#each packs as pack}
        <div class="col-3 col-s-4 col-xs-6">
            <Pack {pack} on:click={() => dialog.open()} />
        </div>
    {/each}
</div>

<Dialog title="Choose how many packs you wish to buy" confirm="Buy" bind:this={dialog}>
    <slot slot="content">
        {packDetails.packName}

        <label for="amount" class="box">
            <button class="amount-button" on:click={() => removeAmount()}>
                <Minus size="20px" />
            </button>

            <input autocomplete="off" type="number" id="amount" class="amount-field" bind:value={amount}>

            <button class="amount-button" on:click={() => addAmount()}>
                <Plus size="20px" />
            </button>
        </label>
    </slot>
</Dialog>