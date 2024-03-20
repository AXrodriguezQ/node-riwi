const Profesor = require('../models/profesoresModels')
const Estudiante = require('../models/estudiantesModel')

const controlProfesores = {}

controlProfesores.getAllProfesores = async (req, res) => {
    try {
        const profesores = await Profesor.find()
        res.send(profesores)
    } catch (error) {   
        res.send(error)
    }
}

controlProfesores.getProfesor = async (req, res) => {
    try {
        const profesor = await Profesor.findById(req.params.id)
        res.send(profesor)
    } catch (error) {
        res.send(error)
    }
}

controlProfesores.getProfesorEnClase = async (req, res) => {
    try {
        const dataEstudiantes = await Estudiante.find()
        const profesor = await Profesor.findById(req.params.id)
        const estudiantesEnClase = []
        for (let i = 0; i < dataEstudiantes.length; i++) {
            if(dataEstudiantes[i].profesorId == profesor.id) {
                estudiantesEnClase.push(dataEstudiantes[i]);
            }
        }
        res.send({estudiantesEnClase})

    } catch (error) {
        res.send(error)
    }
}

controlProfesores.createProfesor = async (req, res) => {
    try {
        const newProfesor = await Profesor.create(req.body)
        const profesor = await newProfesor.save()
        res.send({message: "Profesor agregado correctamente"})
    } catch (error) {
        res.send(error)
    }
}

controlProfesores.updateProfesor = async (req, res) => {
    try {
        const profesor = await Profesor.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send({message: "Profesor actualizado correctamente"})
    } catch (error) {
        res.send(error)
    }
}

controlProfesores.deleteProfesor = async (req, res) => {
    try {
        await Profesor.findByIdAndDelete(req.params.id)
        res.send({message: "Profesor eliminado correctamente"})
    } catch (error) {
        res.send(error)
    }
}
    
module.exports = controlProfesores