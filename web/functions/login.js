const auth0 = require("./lib/auth0")

module.exports = async function login(req, res) {
  try {
    await auth0.handleLogin(req, res)
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}
