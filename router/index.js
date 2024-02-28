const Router = require('express').Router
const router = new Router()
const userController = require('../controllers/user-controller')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/users', userController.getUsers)

module.exports = router