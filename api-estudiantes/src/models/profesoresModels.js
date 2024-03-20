const { Schema, model } = require('mongoose')

const Profesor = new Schema({
    nombre: {
        type: String,
        required: true
    },
    especialidad: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    }
})

module.exports = model('profesores', Profesor)