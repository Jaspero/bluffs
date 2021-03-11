<script>
    let packName = "Generic Name"
    let rarity = "epic"
    let tier = "Epic"
    let cost = "4.99$"
    let packSize = "10"
</script>

<style>
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

<div>
    <div class="rarity {rarity}">

    </div>
    <h1>{packName}</h1>
    <h2 class="{tier}">{tier} Tier</h2>
    <h3>{cost}&nbsp;&nbsp;&nbsp;{packSize} Buffs</h3>
</div>