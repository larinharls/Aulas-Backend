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
        const { name, price, description } = req.body;

        if (!name || !price || !description) {
            return res.status(400).send({
            'sucess': false,
            'message': 'Dados incompletos'
        })
    
    }
        res.send({
            'success': true,
            'message': 'Produto cadastrado com sucesso'
        })

    } catch (error) {
        res.status(500).send({
            'success': false,
            'error': `Erro na requisição: ${error.message}`
        })
    }
}

module.exports = {
    ProductList,
    ProductCreate
}