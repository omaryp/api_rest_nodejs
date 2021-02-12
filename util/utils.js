const enviarRespuesta = (rpta,res) => res.status(rpta.status).send({data:rpta.data})

module.exports = {
    enviarRespuesta
}