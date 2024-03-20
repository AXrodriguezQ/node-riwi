const { Router } = require('express')
const { getAllProfesores, getProfesor, createProfesor, updateProfesor, deleteProfesor, getProfesorEnClase } = require('../controllers/profesores.controllers')

const router = Router()

router.get('/api/v1/profesores', getAllProfesores)
router.get('/api/v1/profesores/:id', getProfesor)
router.get('/api/v1/profesores/:id/estudiantes', getProfesorEnClase)
router.post('/api/v1/profesores', createProfesor)
router.put('/api/v1/profesores/:id', updateProfesor)
router.delete('/api/v1/profesores/:id', deleteProfesor)

module.exports = router