'use strict'

const mon = require('mongoose')
const Schema = mon.Schema

const ProductSchema = Schema({
    name : String,
    picture : String,
    price : {type: Number, default:0},
    category : {
        type : String,
        enum : ['computers','phones','accesories']
    },
    descripcion : String,
})

module.exports = mon.model('Product',ProductSchema)