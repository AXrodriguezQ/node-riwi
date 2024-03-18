const { Router } = require('express')
const { initialRoute, getAllNotes } = require('../controllers/notas.controllers')

const router = Router()

router.get('/', initialRoute)

router.get('/notas', getAllNotes)

module.exports = router