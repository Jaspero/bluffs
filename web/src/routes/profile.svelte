<script>
    import Header from "$lib/Header.svelte";
    import Set from "$lib/Set.svelte";
    import Buff from "$lib/Buff.svelte";
    import Field from "$lib/Field.svelte";
    import Dialog from "$lib/Dialog.svelte";

    let sets = [
        {setName: "Common 2020", tier: "common", completed: true},
        {setName: "Rare 2020", tier: "rare", completed: true},
        {setName: "Epic 2020", tier: "epic", completed: true},
        {setName: "Legendary 2020", tier: "legendary", completed: true},
        {setName: "Common 2021", tier: "common", completed: false},
        {setName: "Rare 2021", tier: "rare", completed: false},
        {setName: "Epic 2021", tier: "epic", completed: false},
        {setName: "Legendary 2021", tier: "legendary", completed: false}
    ]

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
    ]

    let tabs = ["one", "two", "three"]
    let selected = tabs[0]

    let dialog
</script>

<style lang="scss">
  .selected {
    color: var(--light-primary);
  }
  .link-line {
    width: 110px;
    border-bottom: 2px solid var(--accent-theme);
    bottom: 0;
    position: absolute;
    transition: .3s;
  }
  .one {
    left: 0;
  }
  .two {
    left: 110px;
  }
  .three {
    left: 220px;
  }

  .profile-nav {
    position: relative;
  }

  li {
    color: rgba(0,0,0,.5);
    text-transform: uppercase;
    text-align: center;
    list-style-type: none;
    font-size: 14px;
    padding: 8px;
    width: 110px;
    cursor: pointer;
    transition: .3s;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    .link-line, li {
      width: calc(1 / 3 * 100%);
    }
    .one {
      left: 0;
    }
    .two {
      left: calc(1 / 3 * 100%);
    }
    .three {
      left: calc(2 / 3 * 100%);
    }
  }
</style>

<Header>Profile</Header>

<div class="b-b w-full">
    <div class="grid profile-nav">
        <div class="link-line" class:one={selected==="one"} class:two={selected==="two"} class:three={selected==="three"}></div>
        <li on:click={()=>selected = tabs[0]} class:selected={selected==="one"}>Overview</li>
        <li on:click={()=>selected = tabs[1]} class:selected={selected==="two"}>Sets</li>
        <li on:click={()=>selected = tabs[2]} class:selected={selected==="three"}>Buffs</li>
    </div>
</div>


<div class="grid">
    {#if selected === "one"}
        {#each sets as set}
            {#if set.completed === true}
                <div class="col-3 col-s-4 col-xs-6">
                    <Set {set} />
                </div>
            {/if}
        {/each}
    {:else if selected === "two"}
        {#each sets as set}
            <div class="col-3 col-s-4 col-xs-6">
                <Set {set} />
            </div>
        {/each}
    {:else}
        {#each buffs as buff}
            <div class="col-3 col-s-4 col-xs-6">
                <Buff {buff} on:click={() => dialog.open()} />
            </div>
        {/each}
    {/if}
</div>


<Dialog title="Choose the target for your buff" confirm="Cast" bind:this={dialog}>
    <slot slot="content">
        <Field label="Target's Twitter Anchor">
            <slot slot="hint">Example: @elonmusk</slot>
        </Field>
    </slot>
</Dialog>