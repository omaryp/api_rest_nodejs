'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const { request } = require('express')
const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api',api)

const loadApp = (port) => {
    app.listen(port,()=> console.log(`Api rest corriendo en localhost : ${port}`))
}

module.exports = { app, loadApp}