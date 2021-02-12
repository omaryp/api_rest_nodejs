'use strict'

const mongo = require('mongoose')

const conectar = (bd) => {
    mongo.connect(bd, (err , res) => {
        if (err) {
            return thow `Error al conectarse a la base de datos ${err}`
        }
        console.log('Conexión a la base de datos establecida !')
    })
}

module.exports = {
    conectar
}
