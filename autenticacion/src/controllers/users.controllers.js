const User = require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const jwtSecret = "##%dsadsasgauubuizxo##"

const controlUsers = {}

controlUsers.getAllUsers = async (req,res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        res.send(error)
    }
}

controlUsers.registro = async (req,res) => {
    try {

        const users = await User.find()

        const { nombre, correo, password } = req.body
        
        const userData = {
            userId: users.length +1,
            nombre: nombre,
            correo: correo,
            password: await bcrypt.hash(password, 10),
            id: "null"
        }

        const newUser = new User(userData)
        const savedUser = await newUser.save()

        res.send({message: "Usuario agregado correctamente"})
    } catch (error) {
        res.send(error)
    }
}

controlUsers.login = async (req,res) => {
    try {
        const { correo, password } = req.body
        const user = await User.findOne({ correo: correo })
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password)
            if (isMatch) {
                res.send({message: "Usuario encontrado correctamente"})
                const token = jwt.sign({userId: user.id}, jwtSecret, {
                    expiresIn: "1h"
                })
            } else {
                res.send({message: "Usuario o contraseña incorrectos"})
            }
        } else {
            res.send({message: "Usuario o contraseña incorrectos"})
        }
    }catch(e) {
            res.send(e)
        }
}

module.exports = controlUsers