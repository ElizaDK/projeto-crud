const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

function index(req,res) {
    res.render('register',{
        title:'cadastro de clientes'
    })
}



async function add(req, res){
    const{
        name,
        age,
        email,
        password,
    } 
    = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    register.save()
    res.end('cadastro realizado!')

}



function 


module.exports = {
    index,
    add,
    
}