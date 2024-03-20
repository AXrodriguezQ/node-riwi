const { Schema, model } = require('mongoose')

const Book = new Schema({
    id: Number,
    nombre: String,
    genero: String,
    referencia: Number,
    imagen: String,
})

module.exports = model('libros', Book)