<script>
    import Header from "../lib/Header.svelte";
    let mostBuffed = [
        { name: 'Barack Obama', twitter: 'BarackObama', count: 1000 },
        { name: 'Joe Biden', twitter: 'JoeBiden', count: 1000 },
        { name: 'Elon Musk', twitter: 'elonmusk', count: 1000 },
        { name: 'Jeff Bezos', twitter: 'JeffBezos', count: 1000 },
        { name: 'Cristiano Ronaldo', twitter: 'Cristiano', count: 1000 },
        { name: 'Katy Perry', twitter: 'katyperry', count: 1000 },
        { name: 'Ronnie Radke', twitter: 'RonnieRadke', count: 1000 },
        { name: 'Bill Gates', twitter: 'BillGates', count: 1000 },
        { name: 'Matt Tuck', twitter: 'MattieValentine', count: 1000 },
        { name: 'Ronnie Coleman', twitter: 'BigRonColeman', count: 1000 },
    ];
</script>

<style>
    td {
        padding: 2px 4px;
    }
</style>

<Header>Leaderboard</Header>

<div class="grid nogutter jc-between">
    <div>
        <h4 class="m-b-s">Most Buffed</h4>

        <table>
            {#each mostBuffed as mBuffed, i}
            <tr>
                <td>{i + 1}.</td>
                <td>{mBuffed.name}</td>
                <td><a href="https://twitter.com/{mBuffed.twitter}" target="_blank">@{mBuffed.twitter}</a></td>
                <td>{mBuffed.count}</td>
            </tr>
            {/each}
        </table>
    </div>

    <div>
        <h4 class="m-b-s">Most Buffs Cast</h4>

        <table>
            {#each mostBuffed as mBuffed, i}
                <tr>
                    <td>{i + 1}.</td>
                    <td>{mBuffed.name}</td>
                    <td><a href="https://twitter.com/{mBuffed.twitter}" target="_blank">@{mBuffed.twitter}</a></td>
                    <td>{mBuffed.count}</td>
                </tr>
            {/each}
        </table>
    </div>

    <div>
        <h4 class="m-b-s">Collection</h4>

        <table>
            {#each mostBuffed as mBuffed, i}
                <tr>
                    <td>{i + 1}.</td>
                    <td>{mBuffed.name}</td>
                    <td><a href="https://twitter.com/{mBuffed.twitter}" target="_blank">@{mBuffed.twitter}</a></td>
                    <td>{mBuffed.count}</td>
                </tr>
            {/each}
        </table>
    </div>
</div>