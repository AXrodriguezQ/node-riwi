const mongoose = require('mongoose');

const MONGO = process.env.MONGO

mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(db => console.log("Conectado con la base de datos"))
 .catch(err => console.error('No conectado error:',err))