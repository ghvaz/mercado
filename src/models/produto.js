const mercado_crud = require('../controllers/mercado.js')
const fornecedor_crud = require("../controllers/fornecedor.js")

let nextID = 1

module.exports = (body, id = nextID++) => {
    if( body.nome != undefined && 
        body.nome != "" &&

        body.qdt != "" &&
        body.qdt != undefined &&

        body.mercado != "" &&
        body.mercado != undefined &&
        mercado_crud.show(body.mercado) &&

        body.fornecedor != "" &&
        body.fornecedor != undefined &&
        fornecedor_crud.show(body.fornecedor)
        ){
        return{id, nome: body.nome, qdt: body.qdt, mercado: body.mercado, fornecedor: body.fornecedor}
    }else{
        return undefined
    }
}