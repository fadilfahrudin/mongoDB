const express = require('express')
const router = express.Router()
const userModel = require('../model/users')

router.get('/', async (req, res) => {
    const data = await userModel.find({})
    res.send(data)
})

module.exports = router