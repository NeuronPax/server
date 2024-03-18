const jwt = require('jsonwebtoken')

class TokenService {
  generateToken(payload) {
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'})
  }
  validateAccessToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_ACCESS_SECRET)
    } catch (e) {
      return null
    }
  }
}

module.exports = new TokenService()