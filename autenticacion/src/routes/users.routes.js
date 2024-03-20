const { Router } = require('express')
const { getAllUsers, registro, login } = require('../controllers/users.controllers')

const router = Router()

router.get('/api/v1/', (req,res) => res.send("Hola"))
router.get('/api/v1/users', getAllUsers)
router.post('/api/v1/users', registro)
router.post('/api/v1/users/login', login)

module.exports = router