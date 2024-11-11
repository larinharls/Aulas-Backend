const express = require('express')
const router  = express.Router()
const UsersController = require('../controllers/UsersController')

router.get('/', UsersController.UsersList)
router.post('/', UsersController.UsersCreate)
router.put('/:id', UsersController.UsersUpdate)
router.delete('/:id', UsersController.UsersDelete)

module.exports = router