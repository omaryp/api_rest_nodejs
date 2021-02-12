const enviarRespuesta = (rpta,res) => {
    console.log(rpta)
    res.status(rpta.status).send({data:rpta.data})
} 

module.exports = {
    enviarRespuesta
}