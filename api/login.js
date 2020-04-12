import auth0 from '../lib/auth0';

export default async function login(req, res) {
    try {
        console.log("Trying to login user")
        await auth0.handleLogin(req, res);
    } catch (error) {
        console.error(error);
        res.status(error.status || 400).end(error.message);
    }
}
