const { Schema, model } = require('mongoose')

const Nota = new Schema({
    id: Number,
    Vnota: Number,
    Vcaracter: String,
    Valfabetico: String
})

module.exports = model('notas', Nota)