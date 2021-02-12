'use strict'
const express = require('express')
const auth = require('../middlewares/auth')
const api = express.Router()

const ProductController = require('../controllers/productController')
const UserController = require('../controllers/userController')

//rutas para los productos
api.get('/product',ProductController.getProducts)
api.get('/product/:id',ProductController.getProduct)
api.post('/product',auth,ProductController.saveProduct)
api.put('/product/:id',auth,ProductController.updateProduct)
api.delete('/product/:id',auth,ProductController.deleteProduct)

//rutas para el logueo
api.post('/signup',UserController.signUp)
api.post('/signin',UserController.signIn)


//ejemplo ruta privada
api.get('/private',auth,(req,res) => {
    res.status(200).send({message:'tienes acceso'})
})

module.exports = api