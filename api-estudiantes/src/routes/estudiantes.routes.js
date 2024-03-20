const { Router } = require('express')
const { getAllEstudiantes, getEstudiante, createEstudiante, updateEstudiante, deleteEstudiante } = require('../controllers/estudiantes.controllers')

const router = Router()

router.get('/api/v1/estudiantes', getAllEstudiantes)
router.get('/api/v1/estudiantes/:id', getEstudiante)
router.post('/api/v1/estudiantes', createEstudiante)
router.put('/api/v1/estudiantes/:id', updateEstudiante)
router.delete('/api/v1/estudiantes/:id', deleteEstudiante)

module.exports = router