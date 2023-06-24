const { Router } = require('express')

const { createUser, getUserToLogin } = require('../handlers/userHandler')

const route = Router()

route.post('/createUser', createUser)
route.post('/loginUser', getUserToLogin)

module.exports = route