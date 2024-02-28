const userModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const tokenService = require('./token-service')

class UserService {
  async registration(email, password) {
    const candidate = await userModel.findOne({email})
    if (candidate) {
      throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
    }
    const hashPassword = await bcrypt.hash(password, 3)
    const user = await userModel.create({email, password: hashPassword})
  const token = tokenService.generateToken({userId: user._id})
    return {token, user}
  }
}

module.exports = new UserService()