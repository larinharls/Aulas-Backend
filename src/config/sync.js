const connection = require('./database/connection')

require('../models/UserModel')

require('../models/ProductModel')

require('../models/ImgModel')

connection.sync({alter: true})