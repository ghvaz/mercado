const express = require('express')
const rota = express.Router()
const upperCase = require("../middleware/caxa_alta.js")


const produto_controller  = require ('../controllers/produto.js')

rota.post("/", upperCase, (req, res)=>{
    const code = produto_controller.store(req.body)
    res.status(code).json()
})

rota.get("/", (req, res)=>{
    res.json(produto_controller.index())
})

rota.get("/:id", (req, res)=>{
    const item = produto_controller.show(req.params.id)
    res.json(item)
})


rota.put("/:id", (req, res)=>{
    const code = produto_controller.update(req.params.id, req.body)
    res.status(code).json()
})

rota.delete("/:id", (req, res)=>{
    const code = produto_controller.destroy(req.params.id)
    res.status(code).json()
})

module.exports = rota