const bcrypt = require('bcrypt')
const userModel = require('../model/users')


const createUser = async (req, res) => {
    const {name, email, password} = req.body;
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)
    
    const condition = await userModel.findOne({email})

    if (condition) {
        return res.send({message: 'email already exist'})
    }

    try {
        await userModel.create({
            name,
            email,
            password: passwordHash
        })
        res.send({message: 'user created'})
    } catch (error) {
        console.log(error)
    }
}

const getUser = async (req, res) => {
    const data = await userModel.find({})
    res.send(data)
}

const updateUser = async (req, res) => {
    const {name} = req.body;
    try {
        await userModel.updateOne({_id: req.params.id}, {
            name
        })
        res.send({message: 'user updated'})
    } catch (error) {
        console.log(error)
    }

}

const deleteUser = async (req, res) => {
    try {
        await userModel.deleteOne({_id: req.params.id})
        res.send({message: 'user deleted'})
    } catch (error) {
        console.log(error)
    }
}
module.exports = {createUser, updateUser, deleteUser, getUser}