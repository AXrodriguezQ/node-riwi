const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const User = require('../models/userModel')

const jwtSecret = "##%dsadsasgauubuizxo##"

const strategy = new Strategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtSecret
    },
    async (jwtPayload, done) => {
        try {
            const user = await User.findById({ userId: jwtPayload._id })
            if (!user) {
                return done("Ocurrio un error con el usuario", false)
            }
            done(null, user)
        } catch (error) {
            done(error, false)
        }
    }
)

passport.use(strategy)

const initializate = () => {
    return passport.initialize()
}

const authenticate = () => {
    return passport.authenticate('jwt', { session: false })
}

module.exports = {
    initializate,
    authenticate
}