const express = require('express')
const rota = express.Router()
const upperCase = require("../middleware/caxa_alta.js")

const fornecedor_controller  = require ('../controllers/fornecedor.js')

rota.post("/",upperCase, (req, res)=>{
    const code = fornecedor_controller.store(req.body)
    res.status(code).json()
})

rota.get("/", (req, res)=>{
    res.json(fornecedor_controller.index())
})

rota.get("/:id", (req, res)=>{
    const item = fornecedor_controller.show(req.params.id)
    res.json(item)
})


rota.put("/:id", (req, res)=>{
    const code = fornecedor_controller.update(req.params.id, req.body)
    res.status(code).json()
})

rota.delete("/:id", (req, res)=>{
    const code = fornecedor_controller.destroy(req.params.id)
    res.status(code).json()
})

module.exports = rota