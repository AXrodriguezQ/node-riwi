const mongoose = require('mongoose');

const MONGO = process.env.MONGO;

mongoose.connect("mongodb+srv://alextron45:bgBchVIE72kPGsWw@cluster0.jdithpu.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(db => console.log("Conectado con la base de datos"))
  .catch(err => console.error(err))