<script>

</script>

<style>
    .col-2-10 {
        padding: 40px 0 0 40px;
        width: 20%;
    }
    .rarity {
        width: 100%;
        height: 0;
        padding-top: 100%;
    }
    .common {
        border: 2px solid #646466;
        background-color: #EBECEF;
        box-shadow: 0 0 1px transparent;
        transition: .4s;
    }
    .common:hover {
        box-shadow: 0 0 0 1px #646466;
    }
    .uncommon {
        border: 2px solid #3DA1CE;
        background-color: #E7F2FA;
        box-shadow: 0 0 1px transparent;
        transition: .4s;
    }
    .uncommon:hover {
        box-shadow: 0 0 0 1px #3DA1CE;
    }
    .rare {
        border: 2px solid #BC9C31;
        background-color: #F4F2EA;
        box-shadow: 0 0 1px transparent;
        transition: .4s;
    }
    .rare:hover {
        box-shadow: 0 0 0 1px #BC9C31;
    }
    .epic {
        border: 2px solid #8F37C6;
        background-color: #F0E7F9;
        box-shadow: 0 0 1px transparent;
        transition: .4s;
    }
    .epic:hover {
        box-shadow: 0 0 0 1px #8F37C6;
    }
    .legendary {
        border: 2px solid #d60e0e;
        background-color: #F7E3E6;
        box-shadow: 0 0 1px transparent;
        transition: .4s;
    }
    .legendary:hover {
        box-shadow: 0 0 0 1px #d60e0e;
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

<!--<div>
    <slot>
            <div class="rarity {buff.rarity} pointer">

            </div>
            <h5>{buff.packName}</h5>
            <div class="{buff.tier}">{buff.tier} Tier</div>
            <div>{buff.listings} {buff.listings === 1 ? 'listing' : 'listings' }</div>
    </slot>
</div>-->
<!--

{#each buffs as buff}

{/each}
-->
