

function index(req,res) {
    res.render('index',{
        title:'PÁGINA INICIAL'
    })
}

module.exports = {
    index,
}