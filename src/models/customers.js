const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password:String,
})
//mongoose criar a tabela 
const Model = mongoose.model('customers', schema)

module.exports = Model