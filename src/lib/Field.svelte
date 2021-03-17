<script>
    export let type = "text"
    export let label = "Label"

</script>

<style>
    .input-wrapper {
        position: relative;
    }

    .input-field {
        display: block;
        position: relative;
        line-height: 14px;
        font-size: 14px;
        margin-top: 22px;
        bottom: 0;
        padding-left: 10px;
        width: 100%;
        outline: none;
        border: none;
        background: none;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-weight: 500;
        letter-spacing: 0px;
        font-family: Roboto,sans-serif;
    }

    .label {
        display: block;
        position: absolute;
        bottom: 6px;
        left: 10px;
        opacity: 0;
        visibility: hidden;
        color: #5d5d5d;
        transition: 0.3s;
        font-size: 14px;
        letter-spacing: 0;
        font-family: Roboto,sans-serif;
    }

    .input-field:not(:placeholder-shown) + .label,
    .input-field:focus:not(:placeholder-shown) + .label {
        transform: translateY(-18px);
        font-size: 12px;
        opacity: 1;
        visibility: visible;
    }

    .box {
        border: 1px solid var(--light-tertiary);
        box-shadow: 0 0 0 1px transparent;
        height: 48px;
        min-width: 250px;
        transition: .3s;
    }

    .box:hover {
        border: 1px solid var(--light-primary);
        box-shadow: 0 0 0 1px var(--light-primary);
    }

    .box:focus-within {
        border: 1px solid var(--primary-theme);
        box-shadow: 0 0 0 1px var(--primary-theme);
    }
</style>

<label for="input" class="box">
    <div class="input-wrapper">
        <input type="text" id="input" class="input-field" placeholder="{label}">
        <span class="label">{label}</span>
    </div>
</label>