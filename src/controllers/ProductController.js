const ProductModel = require('../models/ProductModel')

const ProductList = async (req, res, next) => {
    try {
        const Lista = [
            {
                name:'tenis nike',
                price: 300,
                description: 'Chuteira Nike Zoom'
            },
            {
                name:'tenis reebook',
                price: 650,
                description: 'Tênis Reebook Club'
            },
            {
                name:'tenis adiddas',
                price: 450,
                description: 'Tênis Addidas Star Runner'
            }
        ]
    
        res.send(
            Lista
        )
    }catch (error){
        res.send({
            'sucess': false,
            'error': `Erro na requisição: ${error}`
        })
    }
}
const ProductCreate = async(req,res,next)=>{
    try {
        const name=req.body.name
        const price=req.body.price
        const description=req.body.description

        res.send({
            'sucess': true,
            'message': 'Produto cadastrado com sucesso'
        })
    }catch (error){
        res.send({
            'sucess': false,
            'error': `Erro na requisição: ${error}`
        })
    }
}

module.exports = {
    ProductList,
    ProductCreate
}