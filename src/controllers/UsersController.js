const UsersList = async (req, res, next) => {
    try {
        const List = [
            {
                name:'Marcos',
                id: 1,
                email: 'Marcos@gmail.com',
                password: 'marcos1234'
            },
            {
                name:'Paula',
                id: 2,
                email: 'Paula@hotmail.com',
                password: 'paula@2024'
            },
            {
                name:'Lucas',
                id: 3,
                email: 'Lucas@gmail.com',
                password: 'lucas001'
            }
        ]
    
        res.send(
            List
        )
    }catch (error){
        res.send({
            'sucess': false,
            'error': `Erro na requisição: ${error}`
        })
    }
}
const UsersCreate = async(req,res,next)=>{
    try {
        const name=req.body.name
        const email=req.body.email
        const password=req.body.password

        res.send({
            'sucess': true,
            'message': 'Usuário cadastrado com sucesso'
        })
    }catch (error){
        res.send({
            'sucess': false,
            'error': `Erro na requisição: ${error}`
        })
    }
}

module.exports = {
    UsersList,
    UsersCreate
}