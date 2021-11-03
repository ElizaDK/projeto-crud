const mongoose = require('mongoose')

//conexao com bando de dados mongoose
//mongoose.set('userNewUrlParser', true)

function connect(){

    mongoose.connect('mongodb://localhost:27017/projeto-crud?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
    
    const db = mongoose.connection

    //feedback de concexao e erro
    db.once('open', () => {
        console.log('connected to database')
    })
    db.on('error', console.error.bind(console, 'connection error: '))

}

//exportando
module.exports = {
    connect
}
