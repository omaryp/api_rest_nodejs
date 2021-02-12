'use strict'

const mongo = require('mongoose')
const userService = require('../services/userService')
const util = require('../util/utils')

function signUp(req,res){
    userService.createUser(req.body)
    .then( rpta => util.enviarRespuesta(rpta,res) )
    .catch( error => util.enviarRespuesta(error,res) )
}

function signIn(req,res){
    userService.getUsuario(req.body)
    .then(rpta => {
        req.user = rpta.user
        util.enviarRespuesta(rpta,res)
    })
    .catch(error => util.enviarRespuesta(error,res) )
}


module.exports = {
    signIn,
    signUp
}
