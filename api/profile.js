import auth0 from '../lib/auth0';

export default async function profile(req, res) {
    try {
        console.log("Trying to fetch user profile")
        await auth0.handleProfile(req, res, { refetch: true });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).end(error.message);
    }
}
