<script>
/*
    export let buffs = [
        { packName: 'Gains Buff', rarity: 'common', tier: 'Common', cost: 0.99, listings: 1000 },
        { packName: 'Love Buff', rarity: 'uncommon', tier: 'Uncommon', cost: 99.99, listings: 1 },
        { packName: 'Love Buff', rarity: 'rare', tier: 'Rare', cost: 99.99, listings: 1 },
        { packName: 'Love Buff', rarity: 'epic', tier: 'Epic', cost: 99.99, listings: 1 },
        { packName: 'Love Buff', rarity: 'legendary', tier: 'Legendary', cost: 99.99, listings: 1 },
        { packName: 'Gains Buff', rarity: 'common', tier: 'Common', cost: 0.99, listings: 1000 },
        { packName: 'Love Buff', rarity: 'uncommon', tier: 'Uncommon', cost: 99.99, listings: 1 },
        { packName: 'Love Buff', rarity: 'rare', tier: 'Rare', cost: 99.99, listings: 1 },
        { packName: 'Love Buff', rarity: 'epic', tier: 'Epic', cost: 99.99, listings: 1 },
        { packName: 'Love Buff', rarity: 'legendary', tier: 'Legendary', cost: 99.99, listings: 1 },
        { packName: 'Gains Buff', rarity: 'common', tier: 'Common', cost: 0.99, listings: 1000 },
        { packName: 'Love Buff', rarity: 'uncommon', tier: 'Uncommon', cost: 99.99, listings: 1 },
        { packName: 'Love Buff', rarity: 'rare', tier: 'Rare', cost: 99.99, listings: 1 },
        { packName: 'Love Buff', rarity: 'epic', tier: 'Epic', cost: 99.99, listings: 1 },
        { packName: 'Love Buff', rarity: 'legendary', tier: 'Legendary', cost: 99.99, listings: 1 },
    ];
*/

    import Buff from "../lib/Buff.svelte";
</script>

<style>
    .custom-grid {
        display: flex;
        flex-wrap: wrap;
        max-width: 1280px;
        padding-right: 40px;
        margin: 0 auto 60px;
    }
</style>

<div class="grid">
    <h2>Marketplace</h2>
</div>

<div class="custom-grid">
    <Buff/>
</div>