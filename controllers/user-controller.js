const userService = require('../service/user-service')

class UserController {
  async registration(req, res, next) {
    try {
      const userData = await userService.registration(req.body)
      return res.json(userData)
    } catch (e) {
      next(e)
    }
  }
  async login(req, res, next) {
    try {
      
    } catch (e) {
      next(e)
    }
  }
  async getUsers(req, res, next) {
    try {
      res.json(['123', '456'])
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new UserController()