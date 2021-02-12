'use strict'

const userService = require('../services/userService')
const util = require('../util/utils')

function isAuth(req,res, next){
    if(!req.headers.authorization){
        return res.status(403).send({message : 'No tienes autorización'})
    }
    const token = req.headers.authorization.split(" ")[1]
    userService.decodeToken(token)
    .then((rpta) => {
        req.user = rpta.data
        next()
    })
    .catch((error) => {
        util.enviarRespuesta(error,res)
    })
}

module.exports=isAuth
