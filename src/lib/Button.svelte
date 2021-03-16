<script>
    export let appearance = "default"
    export let color = "none"
    export let label = "Label"
</script>

<style lang="scss">
    button {
        position: relative;
        display: inline-block;
        min-width: 64px;
        height: 36px;
        line-height: 36px;
        padding: 0 16px;
        text-transform: uppercase;
        border: none;
        outline: none;
    }

    .default {
        background: none;
    }

    .filled {
      color: white;

      .primary { background-color: var(--primary-theme) }
      .accent  { background-color: var(--accent-theme) }
      .warn    { background-color: var(--warn-theme) }
    }

    .filled.primary {
        background-color: var(--primary-theme);
    }

    .filled.accent {
        background-color: var(--accent-theme);
    }

    .filled.warn {
        background-color: var(--warn-theme);
    }

    button:hover > .button-hover-backdrop {
        background-color: rgba(0,0,0,.08);
    }

    .button-hover-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        transition: .3s;
    }
</style>

