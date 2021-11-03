//modulos instalados
const express = require('express')
const path = require('path')

//modulos criados
const db = require('./database')
const routes = require('./routes')

//iniciando o BD
const app = express()


// conexao com o banco de dados
db.connect()



//template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//definindo arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))
//habilitando server para receber dados via post formulario
app.use(express.urlencoded({ extended:true}))

//definindo as rotas
app.use('/', routes)

//404 error (not found)
app.use((req, res)=>{
    res.send('pagina não localizada!')
})
//executando o servidor
const port = process.env.PORT || 8080
app.listen(port,() => console.log(`server is listening on port ${port}`))