const Login = async (req, res, next) => {
    try {
        const email = req.body.email
        const senha = req.body.senha

        const emailUser = 'lara@exemplo.com'
        const senhaUser = '12345'

        if (email == emailUser && senha == senhaUser){
            const jwt = require('jsonwebtoken')
            const token = jwt.sign({id: 1, name: 'Lara'}, 'aJd%$hdbU12')

           // jwt.sign('objeto', 'chave') //

            res.send({
                'sucess': true,
                'token': token,
                'error': ''
            })
        } else {
            res.send({
                'sucess': true,
                'token': '',
                'error': 'Email ou senha inválidos!'
            })
        }

    } catch (error) {
        res.send({
            'sucess': false,
            'token': '',
            'error': `Erro na requisição: ${error}`
        })
    }
}

module.exports = {
    Login
}