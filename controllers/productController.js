'use strict'

const ProductService = require('../services/productService')
const util = require('../util/utils')

function getProducts(req,res){
    ProductService.getProducts()
    .then((rpta) => util.enviarRespuesta(rpta,res))
    .catch((error) => util.enviarRespuesta(error,res))
}

function getProduct(req,res) {
    let id = req.params.id
    ProductService.getProduct(id)
    .then((rpta) => util.enviarRespuesta(rpta,res))
    .catch((error) => util.enviarRespuesta(error,res))
}

function updateProduct(req,res){
    let id = req.params.id
    let bodyUpdate = req.body
    ProductService.updateProduct(id,bodyUpdate)
    .then((rpta) => util.enviarRespuesta(rpta,res))
    .catch((error) => util.enviarRespuesta(error,res))
}

function deleteProduct(req,res){
    let id = req.params.id
    ProductService.deleteProduct(id)
    .then((rpta) => util.enviarRespuesta(rpta,res))
    .catch((error) => util.enviarRespuesta(error,res))
}

function saveProduct(req,res) {
    let product = req.body 
    ProductService.saveProduct(product)
    .then((rpta) => util.enviarRespuesta(rpta,res))
    .catch((error) => util.enviarRespuesta(error,res))
}

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    saveProduct
}