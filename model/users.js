const DB = require('../config/db')
const Schema = require('mongoose').Schema;

const userModel = new Schema({
    name: String,
    email: String,
    password: String
})

module.exports =  DB.model('users', userModel)