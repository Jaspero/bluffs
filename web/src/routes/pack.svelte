<script>
    import Card from "../lib/Card.svelte";
    import Button from "../lib/Button.svelte";
</script>
<style>
    .pack {
        box-shadow: 0 3px 0 transparent;
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

    .pack.Common .image {
        background-color: #EBECEF;
        border: 1px solid var(--rarity-common);
    }
    .pack.Rare .image {
        background-color: #F4F2EA;
        border: 1px solid var(--rarity-rare);
    }
    .pack.Epic .image {
        background-color: #F0E7F9;
        border: 1px solid var(--rarity-epic);
    }
    .pack.Legendary .image {
        background-color: #F7E3E6;
        border: 1px solid var(--rarity-legendary);
    }

    .Common.pack-tier {
        color: var(--rarity-common);
    }
    .Rare.pack-tier {
        color: var(--rarity-rare);
    }
    .Epic.pack-tier {
        color: var(--rarity-epic);
    }
    .Legendary.pack-tier {
        color: var(--rarity-legendary);
    }

    .pack.Common .sold-count {
        background-color: var(--rarity-common);
    }
    .pack.Rare .sold-count {
        background-color: var(--rarity-rare);
    }
    .pack.Epic .sold-count {
        background-color: var(--rarity-epic);
    }
    .pack.Legendary .sold-count {
        background-color: var(--rarity-legendary);
    }
</style>

<div class="grid">
    <div class="col-4">
        <Card>
            <h5>Pack Name</h5>
            <div class="pack-tier Legendary">Legendary Tier</div>
            <div>$4.99 - 10 buffs</div>
            <Button color="primary" appearance="filled">Buy now</Button>
        </Card>
    </div>

    <div class="col-6">
        <div class="pack Legendary">
            <div class="image m-b-xs">
                <div class="sold-count">1203 SOLD</div>
            </div>
        </div>
    </div>
</div>