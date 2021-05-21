<script>
    import Header from "$lib/Header.svelte";

    let mostBuffed = [
        {name: 'Ronnie Coleman', twitter: 'BigRonColeman', buffs: 130},
        {name: 'Jay Cutler', twitter: 'mrojaycutler', buffs: 120},
        {name: 'PHIL HEATH', twitter: 'PHILHEATH', buffs: 110},
        {name: 'Flex Wheeler', twitter: 'Flex_Wheeler', buffs: 100},
        {name: 'RonnieRadke', twitter: 'RonnieRadke', buffs: 90}
    ]
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

    th {
      padding: 8px 6px;
      text-align: left;

      &:last-child {
        text-align: right;
      }
    }

    td {
      padding: 8px 6px;

      &:last-child {
        text-align: right;
      }
    }

    thead {
      background-color: var(--primary-theme);
      color: var(--accent-primary);
    }

    tbody {
      tr:nth-child(2n) {
        background-color: rgba(0,0,0,.06);
      }
    }
</style>

<Header>Leaderboard</Header>

<div class="grid">
    <div class="col-12">
        <table>
            <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Twitter</th>
                <th>Buffs</th>
            </tr>
            </thead>

            <tbody>
            {#each mostBuffed as mBuffed, i}
                <tr>
                    <td>{i + 1}</td>
                    <td>{mBuffed.name}</td>
                    <td><a href="https://twitter.com/{mBuffed.twitter}" target="_blank">@{mBuffed.twitter}</a></td>
                    <td>{mBuffed.buffs}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>