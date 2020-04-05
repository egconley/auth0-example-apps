<script>
	import ApolloClient, {gql, HttpLink} from "apollo-boost";
	import { setClient, getClient, query } from "svelte-apollo";

	import Sample from './sample.svelte';
	import { createAuth } from './auth';
	import { GETAPPS } from "./getapps.js";

	// Go to Auth0 to get the values and set everything up.
  // Make sure all callback urls are set correctly.
	const config = {
		domain: 'sample-apps.auth0.com',
		client_id: 'vwsI9UiL0Q7LXSOe2imitZvPg1ffRm4C',
		redirectUri: 'https://dse.rosnovsky.us',
		responseType: "token id_token",
		scope: "openid profile email",
	};

	const {
		isLoading,
		isAuthenticated,
		login,
		logout,
		authToken,
		authError,
		userInfo
	} = createAuth(config);

	$: state = {
		isLoading: $isLoading,
		isAuthenticated: $isAuthenticated,
		authError: $authError,
		userInfo: $userInfo ? $userInfo.name : null,
		authToken: $authToken.slice(0, 20)
	};

	const client = new ApolloClient({
    uri: "https://dse.rosnovsky.us/api/graphql",
    onError: ({ networkError, graphQLErrors }) => {
			console.log("graphQLErrors", graphQLErrors);
			console.log("networkError", networkError);
		},
		fetchOptions: {
		mode: 'cors',
		credentials: true,
		playground: true,
		headers: {
			"Access-Control-Allow-Credentials" : true,
			"Access-Control-Allow-Origin  ": "*",
			"Content-Type": "application/json",
			"authorization": `Bearer ${authToken}`
		}
		},
	});

	setClient(client);

	const fetchApps = query(client, { query: GETAPPS });
</script>

<main>
	<div class="header-brand">
		<img src="https://cdn.auth0.com/website/press/resources/auth0-logo-monotone-black.svg" class="header-brand-img" alt="Auth0 logo">
		<div style="margin-left: 20px;"><a href="https://dse.rosnovsky.us">DSE Sample Apps</a>
		</div>
	</div>
	<div class="quicklinks">
		<p><a href="https://manage.auth0.com/#/applications" target="_blank" >Manage Dashboard</a></p>
		<p><a href="https://github.com/rosnovsky/auth0-example-apps/blob/master/auth0/tenant.yaml" target="_blank" >Download Tenant Settings</a></p>
		<p><a href="https://github.com/rosnovsky/auth0-example-apps" target="_blank" >Fork on Github</a></p>
	</div>
	
		{#if $isAuthenticated}
		<div class="apps">
			{#await $fetchApps}
				Loading...
			{:then data}			
				{#each data.data.apps as app}
					<Sample app={app} />
				{/each}
			{:catch error}
				Oops...
			{/await}
		</div>
			<button on:click={() => logout()}>Logout</button>
		{:else}
			<button on:click={() => login()}>Login</button>
		{/if}
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
	.quicklinks {
		display: flex;
		align-items: center;
		max-width: 100%;
	}

	.quicklinks p {
		margin: 1rem;
	}

	.apps {
		display: flex;
		flex-wrap: wrap;
		width: 80%;
		justify-content: space-around;
	}
</style>
