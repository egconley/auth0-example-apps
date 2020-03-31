<script>
    export let app;
    const {name, stack, description, deploy, screenshot, url, quickstart} = app;
</script>

<style>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25rem;
    /* border: 1px solid lightgray; */
    border-radius: 0.25em;
    /* background-image: linear-gradient(-30deg, #e9e8e3, #ebeae5); */
    box-shadow: 2px 7px 10px 4px rgba(235, 235, 235, 0.4),
            inset 1px 1px 1px 1px rgba(216, 216, 216, 0.2),
            inset -1px -1px 1px 1px rgba(231, 220, 220, 0.3);
}

.screenshot {
    width: 300px;
    height: 200px;
    align-self: center;
    border: 1px solid lightblue
}

.description {
    width: 90%;
}

.docs {
    width: 100%;
    display: flex;
    padding: 0;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    color: darkgray;
}

.docs a {
    color: inherit;
}

.deploy {
    margin: 1rem;
}
</style>

<main>
    <h2>{name}</h2>
    <img src={screenshot} alt={name} class="screenshot" />
    <p><a href={url} target="_blank" norefere noopener>{url}</a></p>
    <p class="description">{description}</p>
    <div class="docs">
        <p><a href={quickstart}>{stack.name} Quickstart</a></p>
        <p><a href={stack.url}>{stack.name} Docs</a></p>
    </div>
    <a href={deploy} class="deploy"><img src="https://zeit.co/button" alt="Deploy to ZEIT Now" /></a>
</main>
