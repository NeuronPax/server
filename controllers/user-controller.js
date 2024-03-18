const userService = require('../service/user-service')
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/api-error')

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
      }
      const userData = await userService.registration(req.body)
      return res.json(userData)
    } catch (e) {
      next(e)
    }
  }
  async login(req, res, next) {
    try {
      const userData = await userService.login(req.body)
      return res.json(userData)
    } catch (e) {
      next(e)
    }
  }
  async getMe(req, res, next) {
    try {
    const userData = await userService.getMe(req.body)
    return res.json(userData)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new UserController()