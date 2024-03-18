const Nota = require("../models/notas");

const notasControl = {}

notasControl.initialRoute = async (req, res) => {
    res.send("Hello World!");
}

notasControl.getAllNotes = async (req, res) => {
    const notas = await Nota.find()
    res.send(notas)
}

module.exports = notasControl