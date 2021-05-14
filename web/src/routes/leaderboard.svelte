<script>
    import Header from "$lib/Header.svelte";
</script>

<style lang="scss">
    table {
      width: 100%;
      border-radius: 8px;
      font-size: .9rem;
      background-color: var(--theme-fg);
      overflow: hidden;
      box-shadow: 0 0 0 1px rgba(0,0,0,.15);
    }

    td {
      padding: 8px 6px;
    }

    thead {
      background-color: var(--accent-theme);
      color: var(--accent-primary);
    }

    tbody {
      tr:nth-child(2n) {
        background-color: rgba(0,0,0,.06);
      }
    }
</style>

<Header>Leaderboard</Header>

<div class="grid jc-center">

</div>