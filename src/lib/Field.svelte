<script>
    /**
     * 
     * @type {"text"}
     */
    export let type = "text"

    /**
     *  Specify input label
     *  @type {string}
     */
    export let label = "Label"

    /**
     * Specify autocomplete
     * @type {"email" | "username" | "new-password" | "current-password" | "off" | "on"}
     */
    export let autocomplete = undefined
</script>

<style>
    .input-wrapper {
        display: block;
        position: relative;
        height: 100%;
    }

    .input-field {
        display: block;
        position: relative;
        line-height: 16px;
        font-size: 16px;
        padding: 12px;
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        background-color: var(--light-theme);
        color: var(--light-primary);
        caret-color: var(--light-primary);
        font-family: Roboto,sans-serif;
    }

    .label {
        display: block;
        position: absolute;
        bottom: 17px;
        left: 12px;
        color: var(--light-secondary);
        transition: 0.3s;
        pointer-events: none;
        font-size: 16px;
        font-family: Roboto,sans-serif;
    }

    .input-field:not(:placeholder-shown), .input-field:focus:not(:placeholder-shown) {
        padding: 24px 12px 6px 12px;
    }

    .input-field:not(:placeholder-shown) + .label,
    .input-field:focus:not(:placeholder-shown) + .label {
        transform: translateY(-18px);
        font-size: 10px;
    }

    ::placeholder {
        visibility: hidden;
    }

    .box {
        display: block;
        border: 1px solid var(--light-tertiary);
        box-shadow: 0 0 0 1px transparent;
        height: 60px;
        width: 250px;
        max-width: 500px;
        transition: .3s;
        margin-bottom: 15px;
    }

    .box:hover {
        border: 1px solid var(--light-secondary);
        box-shadow: 0 0 0 1px var(--light-secondary);
    }

    .box:focus-within {
        border: 1px solid var(--primary-theme);
        box-shadow: 0 0 0 1px var(--primary-theme);
    }
</style>

<label for="input" class="box">
    <span class="input-wrapper">
        <input autocomplete="{autocomplete}" type="{type}" id="input" class="input-field" placeholder="{label}">
        <span class="label">{label}</span>
    </span>
</label>
