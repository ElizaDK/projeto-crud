const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')


const defaultTitle = 'Cadastro de Clientes'

function index(req,res) {
    res.render('register',{
        title: defaultTitle
    })
}



async function add(req, res){
    const{
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    register.save()
    res.render('register', {
        title: defaultTitle,
        message: 'cadastro realizado com sucesso!'
    })

}



async function listUsers(req, res){
    const users = await CustomersModel.find()


    res.render('listUsers', {
       title: 'listagem de usuários',
        users,
    })
}

function formEdit(req, res){
    res.render('edit',{
        title:'editar usuario'
    })
}

module.exports = {
    index,
    add,
    listUsers,
    formEdit,
}