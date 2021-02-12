'use strict'

const app = require('./app.js')
const bd = require('./bd/bd.js')
const config = require('./config.js')

try {
    bd.conectar(config.db)
    app.loadApp(config.port)
} catch (error) {
    console.log(error)
}