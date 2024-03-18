const Router = require('express').Router
const router = new Router()
const userController = require('../controllers/user-controller')
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')

router.post('/registration',
  body('email').isEmail(),
  body('password').isLength({min: 4}),
  userController.registration
)
router.post('/login', userController.login)
router.get('/me', authMiddleware, userController.getMe)

module.exports = router