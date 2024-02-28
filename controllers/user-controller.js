const userService = require('../service/user-service')

class UserController {
  async registration(req, res, next) {
    try {
      const {email, password} = req.body
      const userData = await userService.registration(email, password)
      return res.json(userData)
    } catch (e) {
      console.log(e)
    }
  }
  async login(req, res, next) {
    try {
      
    } catch (e) {

    }
  }
  async getUsers(req, res, next) {
    try {
      res.json(['123', '456'])
    } catch (e) {

    }
  }
}

module.exports = new UserController()