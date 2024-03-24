const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer()
const { createUser, updateUser, deleteUser, getUser } = require('../controller/userController')

router.get('/', getUser)
router.post('/', upload.none() ,createUser)
router.put('/:id', upload.none() ,updateUser)
router.delete('/:id', deleteUser)

module.exports = router