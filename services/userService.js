'use strict'

const jwt = require('jwt-simple')
const User = require('../models/user')
const moment = require('moment')
const config = require('../config')

function createUser(body){
    return new Promise((resolve,reject) => {
        const user = new User({
            email : body.email,
            displayname : body.displayname
        })
        user.save((err) => {
            if(err) reject({ status : 500, data : `Error al crear el usuario : ${err}`})
            resolve({ status : 201, data : createToken(user) })
        })
    })
}

function getUsuario(body){
    return new Promise((resolve,reject) => {
        User.find({emial : body.email},(err,usuario) => {
            if(!user) reject( { status : 404, data :`Usuario no existe` } )
            if(err) reject( { status : 500, data : `Error al inciar session : ${err}` } )
            resolve( { status : 200, data : createToken(user), user: usuario } )
        })
    })
}

function createToken(user){
    const payload = {
        sub: user._id,
        iat: moment().unix(), //cuando fue creado el token
        exp: moment().add(14, 'days').unix(), //cuando va a vencer el token
    }
    return jwt.encode(payload,config.SECRET_TOKEN)
}

function decodeToken(token){
    return new Promise((resolve,reject) => {
        try {
            const payload = jwt.decode(token,config.SECRET_TOKEN)
            if(payload.exp < moment().unix()){
                reject( { status : 401,data : 'El token a expirado' } )
            }
            resolve( { status : 200,data : payload.sub } )
        } catch (error) {
            reject( { status : 500,data : 'Invalid token' } )
        }
    })
}

module.exports = {
    createToken,
    decodeToken,
    createUser
}