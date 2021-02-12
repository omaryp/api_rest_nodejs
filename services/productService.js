'use strict'

const Product = require('../models/product')

async function getProducts(){
    return await new Promise((resolve,reject) => {
        Product.find({},(err,products) => {
            if(!products)  reject({status: 404, data:"No hay productos"})
            if(err) reject({status : 500, data:`Error al obtener productos ${err}`})
            return resolve({status: 200, data:products})
        }) 
    })
}

async function getProduct(id){
    return await new Promise((resolve,reject) => {
        Product.findById(id, (err,product) => {
            if(!product)  reject ({status: 404, data:"El producto no existe"})
            if(err) reject( {status : 500, data:`Error al buscar producto ${err}`})
            return resolve({status: 200, data:product})
        })
    })
}

async function updateProduct(id,bodyUpdate){
    return await new Promise((resolve,reject) => {
        Product.findByIdAndUpdate(id, bodyUpdate, (err,prodUpd) => {
            if(!prodUpd) reject({status: 404, data:`El producto no existe : ${id}`})
            if(err) reject({status : 500, data:`Error al actualizar el producto : ${err}`})
            return resolve({status: 200, data:prodUpd})
        })
    })
}

async function deleteProduct(id){
    return await new Promise((resolve,reject) => {
        Product.findById(id,(err,pro) => {
            if(!pro) reject( {status: 404, data:`El producto no existe : ${id}`})
            if(err) reject({status : 500, data:`Error al eliminar el producto : ${err}`})
            pro.remove( err => {
                if(err) reject({status : 500, data:`Error al eliminar el producto : ${err}`})
                return resolve({status : 200, data:'El producto se eliminó correctamente'})
            })
        })  
    })
}

async function saveProduct(pro){
    return await new Promise((resolve,reject) => {
        let product = new Product()
        product.name = pro.name
        product.picture = pro.picture
        product.price = pro.price
        product.category = pro.category
        product.descripcion = pro.descripcion

        product.save((err, productStore) => {
            if(err) reject({status:500,data:`Error al salvar en la base de datos : ${err}`})
            return resolve({status:200,data:productStore})
        })
    })

}

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    saveProduct
}