<script>
    export let pack
</script>

<style>
    .card {
        width: 20%;
        padding: 20px;
        box-shadow: 0 0 0 0 transparent;
        background-color: transparent;
        transition: .2s;
    }
    .card:hover {
        background-color: rgba(0,0,0,.05);
        box-shadow: 0 0 0 1px rgba(0,0,0,.25);
    }
    .image {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 100%;
    }
    .pack-tier {
        font-weight: 500;
    }
    .sold-count {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 4px 6px;
        font-size: 12px;
        color: var(--primary-primary);
    }

    .card.Common .image {
        background-color: #EBECEF;
        border: 2px solid var(--rarity-common);
    }
    .card.Rare .image {
        background-color: #F4F2EA;
        border: 2px solid var(--rarity-rare);
    }
    .card.Epic .image {
        background-color: #F0E7F9;
        border: 2px solid var(--rarity-epic);
    }
    .card.Legendary .image {
        background-color: #F7E3E6;
        border: 2px solid var(--rarity-legendary);
    }

    .card.Common .pack-tier {
        color: var(--rarity-common);
    }
    .card.Rare .pack-tier {
        color: var(--rarity-rare);
    }
    .card.Epic .pack-tier {
        color: var(--rarity-epic);
    }
    .card.Legendary .pack-tier {
        color: var(--rarity-legendary);
    }

    .card.Common .sold-count {
        background-color: var(--rarity-common);
    }
    .card.Rare .sold-count {
        background-color: var(--rarity-rare);
    }
    .card.Epic .sold-count {
        background-color: var(--rarity-epic);
    }
    .card.Legendary .sold-count {
        background-color: var(--rarity-legendary);
    }
    h5 {
        margin-top: 2px;
    }
    h6 {
        margin: 2px 0;
    }
</style>

<a href="/pack" class="card {pack.tier}">
    <div class="image m-b-xs">
        <div class="sold-count">{pack.sold} SOLD</div>
    </div>
    <h5>{pack.packName}</h5>
    <h6 class="pack-tier">{pack.tier} Tier</h6>
    <div>
        ${pack.cost} - {pack.count} buffs
    </div>
</a>