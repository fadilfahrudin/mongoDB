const mongoose = require('mongoose');
const username = 'fadilfahrudin32';
const password = encodeURIComponent('2cWflnm7X4fgTKS1');
const dbName = 'sample_mflix';
const uri = `mongodb+srv://${username}:${password}@cluster0.xkk5vrk.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri);
const db = mongoose.connection

db.on('error', () => {
    console.log('Connection fail')
})
db.once('open', () => {
    console.log('Connection succes')
})
module.exports = db;