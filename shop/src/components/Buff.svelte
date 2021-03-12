<script>
    let buffs = [
        { packName: 'Gains Buff', rarity: 'common', tier: 'Common', cost: 0.99, listings: 1000 },
        { packName: 'Love Buff', rarity: 'uncommon', tier: 'Uncommon', cost: 99.99, listings: 1 },
        { packName: 'Love Buff', rarity: 'rare', tier: 'Rare', cost: 99.99, listings: 1 },
        { packName: 'Love Buff', rarity: 'epic', tier: 'Epic', cost: 99.99, listings: 1 },
        { packName: 'Love Buff', rarity: 'legendary', tier: 'Legendary', cost: 99.99, listings: 1 },
    ];
    let packName = "Generic Name"
    let rarity = "epic"
    let tier = "Epic"
    let cost = "4.99$"
    let listings = 100
</script>

<style>
    .col-2-10 {
        padding: 25px;
        width: 20%;
    }
    .rarity {
        width: 100%;
        height: 0;
        padding-top: 100%;
    }
    .common {
        border: 1px solid #646466;
        background-color: #EBECEF;
    }
    .uncommon {
        border: 1px solid #3DA1CE;
        background-color: #E7F2FA;
    }
    .rare {
        border: 1px solid #BC9C31;
        background-color: #F4F2EA;
    }
    .epic {
        border: 1px solid #8F37C6;
        background-color: #F0E7F9;
    }
    .legendary {
        border: 1px solid #d60e0e;
        background-color: #F7E3E6;
    }

    .Common {
        color: #646466;
    }
    .Uncommon {
        color: #3DA1CE;
    }
    .Rare {
        color: #BC9C31;
    }
    .Epic {
        color: #8F37C6;
    }
    .Legendary {
        color: #d60e0e;
    }
</style>

{#each buffs as buff}
    <div class="col-2-10">
        <div class="rarity {buff.rarity}">

        </div>
        <h1>{buff.packName}</h1>
        <h2 class="{buff.tier}">{buff.tier} Tier</h2>
        <h3>{buff.listings} {buff.listings === 1 ? 'listing' : 'listings' }</h3>
    </div>
{/each}