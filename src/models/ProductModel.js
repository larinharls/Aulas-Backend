const connection = require('../config/database/connection')
const { DataTypes } = require('sequelize')

let ProductModel = connection.define ('product', {
    enabled: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    use_in_menu: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    stock: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    price: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    price_with_discount: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

module.exports = ProductModel