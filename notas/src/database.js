const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URL

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Conectado con la base de datos"))
    .catch(err => console.error(`Error en la conexion: ${err}`))