let nextID = 2

module.exports = (body, id = nextID++) => {
    if(body.nome != undefined && body.nome != ""){
        return{id, nome: body.nome}
    }else{
        return undefined
    }
}