const { Schema, model } = require('mongoose')

const User = new Schema({
    userId: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})

module.exports = model('registros', User)