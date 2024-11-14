const connection = require('../config/database/connection')
const { DataTypes } = require('sequelize')
const ProductModel = require('../models/ProductModel')

let ImgModel = connection.define('Img', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProductModel,
            key: 'id'
        },
    },
    enabled: {
        type: DataTypes.BOOLEAN(),
        allowNull: false
    },
    path: {
        type: DataTypes.STRING(300),
        allowNull: false
    }
})

module.exports = ImgModel;