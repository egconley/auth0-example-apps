import auth0 from '../lib/auth0';

export default async function logout(req, res) {
    try {
        console.log("Trying to logout user")
        await auth0.handleLogout(req, res);
    } catch (error) {
        console.error(error);
        res.status(error.status || 400).end(error.message);
    }
}
