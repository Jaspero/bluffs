<script>
    import Header from "$lib/Header.svelte";
    import Card from "$lib/Card.svelte";

    let mostBuffed = [
        {name: 'Barack Obama', twitter: 'BarackObama', count: 1000},
        {name: 'Joe Biden', twitter: 'JoeBiden', count: 1000},
        {name: 'Elon Musk', twitter: 'elonmusk', count: 1000},
        {name: 'Jeff Bezos', twitter: 'JeffBezos', count: 1000},
        {name: 'Cristiano Ronaldo', twitter: 'Cristiano', count: 1000},
        {name: 'Katy Perry', twitter: 'katyperry', count: 1000},
        {name: 'Ronnie Radke', twitter: 'RonnieRadke', count: 1000},
        {name: 'Bill Gates', twitter: 'BillGates', count: 1000},
        {name: 'Matt Tuck', twitter: 'MattieValentine', count: 1000},
        {name: 'Ronnie Coleman', twitter: 'BigRonColeman', count: 1000},
    ];
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
    <div class="col-6 col-s-12">
        <h4 class="m-b-xs">Most Buffs Cast</h4>
        <table>
            <thead>
            <tr>
                <td>No.</td>
                <td>Person</td>
                <td>Twitter</td>
                <td class="ta-right">Count</td>
            </tr>
            </thead>
            <tbody>
            {#each mostBuffed as mBuffed, i}
                <tr>
                    <td>{i + 1}.</td>
                    <td>{mBuffed.name}</td>
                    <td><a href="https://twitter.com/{mBuffed.twitter}" target="_blank">@{mBuffed.twitter}</a></td>
                    <td class="ta-right">{mBuffed.count}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>

    <div class="col-6 col-s-12">
        <h4 class="m-b-xs">Collection</h4>
        <table>
            <thead>
            <tr>
                <td>No.</td>
                <td>Person</td>
                <td>Twitter</td>
                <td class="ta-right">Count</td>
            </tr>
            </thead>
            <tbody>
            {#each mostBuffed as mBuffed, i}
                <tr>
                    <td>{i + 1}.</td>
                    <td>{mBuffed.name}</td>
                    <td><a href="https://twitter.com/{mBuffed.twitter}" target="_blank">@{mBuffed.twitter}</a></td>
                    <td class="ta-right">{mBuffed.count}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>