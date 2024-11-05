const express = require('express')
const router  = express.Router()
const LoginController = require('../controllers/LoginController')

//métodos de requisição HTTP :
//GET = Usado para recuperar dados de um servidor.
//POST = Usado para enviar dados ao servidor para criar um novo recurso.
//PUT = Usado para atualizar ou substituir um recurso existente.
//DELETE = Usado para remover um recurso do servidor.

router.post('/', LoginController.Login)

//ROUTER = criando rota
//POST = método da req
//'/' = url
//LoginController = função

module.exports = router
