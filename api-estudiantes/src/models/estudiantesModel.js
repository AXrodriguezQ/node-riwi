const { Schema, model } = require('mongoose')

const Estudiante = new Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    profesorId: {
        type: String,
        required: true
    }
    // profesorId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Profesor'
    // }
})

module.exports = model('estudiantes', Estudiante)