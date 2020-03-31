<script>
	import Sample from './sample.svelte'
	import apps from '../apps.js'
</script>

<main>
	<div class="header-brand">
		<img src="https://cdn.auth0.com/website/press/resources/auth0-logo-monotone-black.svg" class="header-brand-img" alt="Auth0 logo">
		<div style="margin-left: 20px;"><a href="https://dse.rosnovsky.us">DSE Sample Apps</a></div>
	</div>
	<div class="apps">
		{#each apps as app}
			<Sample app={app} />
		{/each}
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0;
		max-width: 100vw;
		margin: 0 auto;
	}

	.header-brand {
		display: flex;
		width: 100vw;
		height: 7rem;
		align-items: center;
		justify-content: center;
		margin: 0;
		font-weight: 400;
		line-height: 1.5;
		color: #495057;
		text-align: center;
	}

	.header-brand a {
		color: inherit;
		margin-right: 1rem;
		font-size: 1.25rem;
		white-space: nowrap;
		font-weight: 600;
		padding: 0;
		transition: opacity .3s;
		line-height: 2rem;
		text-decoration: none;
	}

	.header-brand-img {
		height: 2rem;
		line-height: 2rem;
		vertical-align: bottom;
		margin-right: .5rem;
		width: auto;
	}

	.apps {
		display: flex;
		width: 80%;
		justify-content: space-around;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
