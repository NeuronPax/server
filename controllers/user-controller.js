class UserController {
  async registration(req, res, next) {
    try {
      
    } catch (e) {
      console.log(e)
    }
  }
  async login(req, res, next) {
    try {
      
    } catch (e) {
      console.log(e)
    }
  }
  async getUsers(req, res, next) {
    try {
      res.json(['123', '456'])
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new UserController()