const jwt = require('jsonwebtoken')

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '5m'})
    return accessToken
  }
}

module.exports = new TokenService()