<script>
    import Header from "../lib/Header.svelte";
    import Set from "../lib/Set.svelte";

    let sets = [
        {setName: "Common 2020", tier: "common"},
        {setName: "Rare 2020", tier: "rare"},
        {setName: "Epic 2020", tier: "epic"},
        {setName: "Legendary 2020", tier: "legendary"},
        {setName: "Common 2021", tier: "common"},
        {setName: "Rare 2021", tier: "rare"},
        {setName: "Epic 2021", tier: "epic"},
        {setName: "Legendary 2021", tier: "legendary"}
    ]
</script>

<Header>Sets</Header>

<div class="grid">
    {#each sets as set}
        <div class="col-3 col-s-4 col-xs-6">
            <Set {set} />
        </div>
    {/each}
</div>