const express = require('express')
const path = require('path')

const app = express()

//template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//definindo arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))
//habilitando server para receber dados via post formulario
app.use(express.urlencoded({ extended:true}))

//rotas
app.get('/',(req,res)=> {
    res.render('index',{
        title:'titulo teste'
    })
})
//404 error (not found)
app.use((req, res)=>{
    res.send('pagina não localizada!')
})
//executando o servidor
const port = process.env.PORT || 8080
app.listen(port,() => console.log(`server is listening on port ${port}`))