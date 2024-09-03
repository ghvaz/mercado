module.exports = (req, res, next) =>{
    if(req.body.nome){
        let nome = (req.body.nome).toUpperCase()
        delete req.body.nome
        body.nome = nome
        next()
    }else{
        res.status(400).json()
    }
}