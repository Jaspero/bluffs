<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">BLUFFS</a></li>
		<li><a aria-current="{segment === 'packs' ? 'page' : undefined}" href="packs">PACKS</a></li>
		<li><a aria-current="{segment === 'marketplace' ? 'page' : undefined}" href="marketplace">MARKETPLACE</a></li>
		<li><a aria-current="{segment === 'leaderboard' ? 'page' : undefined}" href="leaderboard">LEADERBOARD</a></li>
		<li><a aria-current="{segment === 'login' ? 'page' : undefined}" href="login">LOG IN</a></li>
		<li><a aria-current="{segment === 'register' ? 'page' : undefined}" href="register">REGISTER</a></li>
	</ul>
</nav>
