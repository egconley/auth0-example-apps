const fetch = require("node-fetch");

// where do we get site ids?

const SITE_ID="001b81f1-b7fb-4c73-8247-2bb7263d59cd"
const DEPLOYS_ENDPOINT = `https://api.netlify.com/api/v1/sites/${SITE_ID}/deploys`;

const TOKEN = process.env.NETLIFY_API_TOKEN

exports.handler = async (event, context) => {
    // Making two requests is not ideal :(
    return fetch(DEPLOYS_ENDPOINT, { headers: { "Accept": "application/json", "Authorization": `Bearer ${TOKEN}` } })
        .then(response => response.json())
        .then(data => {
            const lastDeploy = data[0].id;
            return fetch(`https://api.netlify.com/api/v1/deploys/${lastDeploy}`, { headers: { "Accept": "application/json", "Authorization": `Bearer ${TOKEN}` } })
            .then(response => response.json())
            .then(data => {
                if(data.screenshot_url === null){
                    throw new Error("Screenshot is \"null\". I know, I know, it makes no sense, yet here we are ¯\\_(ツ)_/¯");
                    
                }
                return {
                    statusCode: 200,
                    body: JSON.stringify(data.screenshot_url)
            }})
        })
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
