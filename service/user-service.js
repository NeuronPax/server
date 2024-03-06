const userModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')

class UserService {
  async registration({email, password}) {
    const candidate = await userModel.findOne({email})
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
    }
    const hashPassword = await bcrypt.hash(password, 3)
    const user = await userModel.create({email, password: hashPassword})
    const userDto = new UserDto(user)
    const token = tokenService.generateToken({userId: userDto.id})
    return {token, user: userDto}
  }
  async login({email, password}) {
    const user = await userModel.findOne({email})
    if (!user) {
      throw ApiError.BadRequest(`Неверный логин или пароль`)
    }
    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) {
      throw ApiError.BadRequest(`Неверный логин или пароль`)
    }
    const userDto = new UserDto(user)
    const token = tokenService.generateToken({userId: userDto.id})
    return {token, user: userDto}
  }
  async getUsers() {
    const users = await userModel.find()
    return users
  }
}

module.exports = new UserService()