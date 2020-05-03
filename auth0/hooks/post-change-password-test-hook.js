/* eslint-disable no-console */
/**
@param {object} user - The affected user
@param {string} user.id - user id
@param {string} user.username - user name
@param {string} user.email - email
@param {string} user.last_password_reset - exact date/time the user's password was changed
@param {object} context - Auth0 connection and other context info
@param {object} context.connection - information about the Auth0 connection
@param {object} context.connection.id - connection id
@param {object} context.connection.name - connection name
@param {object} context.connection.tenant - connection tenant
@param {object} context.webtask - webtask context
@param {function} cb - function (error)
*/
const got = require("got")

module.exports = async function hook(user, context, cb) {
  try {
    const result = await revoke(user, context)
    return cb(null, result)
  } catch (error) {
    console.error(`Error while revoking refresh tokens ${error}`)
    return cb(error)
  }
}

async function getCredentials(context) {
  const { body } = await got.post(
    `https://${context.connection.tenant}.auth0.com/oauth/token`,
    {
      json: true,
      form: true,
      body: {
        client_id: context.webtask.secrets.CLIENT_ID,
        client_secret: context.webtask.secrets.CLIENT_SECRET,
        audience: `https://${context.connection.tenant}.auth0.com/api/v2/`,
        grant_type: "client_credentials",
      },
    }
  )
  return body.access_token
}

async function getAllRefreshTokens({ id }, applicationId, context, token) {
  const url = `https://${context.connection.tenant}.auth0.com/api/v2/device-credentials?type=refresh_token&&client_id=${applicationId}&user_id=auth0|${id}`
  try {
    var { body } = await got.get(url, {
      json: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  } catch (error) {
    const err = JSON.stringify(error.response.body)
    throw new Error(`Error while getting refresh token: ${err}`)
  }
  return body
}

async function getConnectionById(id, context, token) {
  try {
    const { body } = await got.get(
      `https://${context.connection.tenant}.auth0.com/api/v2/connections/${id}`,
      {
        json: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return body.enabled_clients.pop()
  } catch (error) {
    const err = JSON.stringify(error)
    throw new Error(`Error while getting application id(${id}): ${err}`)
  }
}

async function deleteRefreshToken({ id }, context, token) {
  try {
    await got.delete(
      `https://${context.connection.tenant}.auth0.com/api/v2/device-credentials/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  } catch (error) {
    const err = JSON.stringify(error)
    throw new Error(`Error while deleting credential(${id}): ${err}`)
  }
}

async function revoke(user, context) {
  const accessToken = await getCredentials(context)
  const applicationId = await getConnectionById(
    context.connection.id,
    context,
    accessToken
  )
  const tokens = await getAllRefreshTokens(
    user,
    applicationId,
    context,
    accessToken
  )

  await Promise.all(
    tokens.map((e) => deleteRefreshToken(e, context, accessToken))
  )
  return {
    message: "Credentials revoked successfully",
    count: tokens.length,
  }
}
