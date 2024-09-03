let nextID = 2

module.exports = (body, id = nextID++) => {
    if( body.nome != undefined && body.nome != "" &&
        body.endereco != undefined && body.endereco != "" 
    ){
        return{ id, 
                nome: body.nome, 
                endereco: body.endereco}
    }else{
        return undefined
    }
}