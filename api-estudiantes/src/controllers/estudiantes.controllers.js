const Estudiante = require('../models/estudiantesModel')

const controlEstudiantes = {}

controlEstudiantes.getAllEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find()
        res.send(estudiantes)
    } catch (error) {
        res.send(error)
    }
}

controlEstudiantes.getEstudiante = async (req, res) => {
    try {
        const estudiante = await Estudiante.findById(req.params.id)
        res.send(estudiante)
    } catch (error) {
        res.send(error)
    }
}

controlEstudiantes.createEstudiante = async (req, res) => {
    try {
        const nuevoEstudiante = await Estudiante.create(req.body)
        const estudiante = await nuevoEstudiante.save()
        res.send({message: "Estudiante agregado correctamente"})
    } catch (error) {
        res.send(error)
    }
}

controlEstudiantes.updateEstudiante = async (req, res) => {
    try {
        const estudiante = await Estudiante.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send({message: "Estudiante actualizado correctamente"})
    } catch (error) {
        res.send(error)
    }
}

controlEstudiantes.deleteEstudiante = async (req, res) => {
    try {
        await Estudiante.findByIdAndDelete(req.params.id)
        res.send({message: "Estudiante eliminado correctamente"})
    } catch (error) {
        res.send(error)
    }
}

module.exports = controlEstudiantes