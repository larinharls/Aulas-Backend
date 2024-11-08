const userModel = require('../models/UserModel')

const UsersList = async (req, res, next) => {
    try{
        res.send([
            {
              name:'Beatriz',
              id:1,
              email:'beatriz123@gmail.com',
              senha:'1234'
            },
            {
              name:'Kaio',
              id: 2,
              email: 'kaiokaio@gmail.com',
              senha: '42525'
            }, 
            {
             name:'Isa',
             id: 3,
             email:'isa@gmail.com',
             senha:'8282'
            }
          ])
        }catch (error){
          res.send({
            'sucess':false,
            'error': `Erro na requisicao ${error}`
          })
    }
}

    const UsersCreate = async ( req, res, next ) => {
        const name = req.body.name

    try {
        const firstname = req.body.firstname
        const surname = req.body.surname
        const email = req.body.email
        const password = req.body.password

        //CRIPTOGRAFANDO A SENHA DO USUÁRIO PARA SALVAR NO BANCO
        const bcrypt = require('bcrypt')
        const saltRound = 10
        const hash = await bcrypt.hash(password, saltRound)

        const user = await userModel.create ({
            firstname: firstname,
            surname: surname,
            email: email,
            password: hash
        });
        
        res.status(201).send({
            'sucess': true,
            'message': 'Usuário cadastrado com sucesso'
        })

    }catch (error){
        res.status(400).send({
            'sucess': false,
            'error': `Erro na requisição: ${error}`
        })
    }
}

module.exports = {
    UsersList,
    UsersCreate
}