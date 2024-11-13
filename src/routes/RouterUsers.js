const express = require('express')
const router  = express.Router()
const UsersController = require('../controllers/UsersController')
const UsersValidation = require('../middleware/UsersValidation')

router.get('/', UsersController.UsersList)
router.post('/', UsersValidation.UserCreateValidation, UsersController.UsersCreate)
router.put('/:id', UsersController.UsersUpdate)
router.delete('/:id', UsersController.UsersDelete)

module.exports = router