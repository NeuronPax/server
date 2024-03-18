const ApiError = require('../exceptions/api-error')
const tokenService = require('../service/token-service')

module.exports = function(req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError())
    }
    const accessToken = authorizationHeader.split(' ')[1]
    if (!accessToken) {
      return next(ApiError.UnauthorizedError())
    }
    const {userId} = tokenService.validateAccessToken(accessToken)
    if (!userId) {
      return next(ApiError.UnauthorizedError())
    }
    req.body = {userId}
    next()
  } catch (e) {
    next(ApiError.UnauthorizedError())
  }
}