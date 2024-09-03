const express = require('express')
const rota = express.Router()
const end = require("../middleware/cepEnd.js")
const upperCase = require("../middleware/caxa_alta.js")

const mercado_controller  = require ('../controllers/mercado.js')

rota.post("/",upperCase, end, (req, res)=>{
    const code = mercado_controller.store(req.body)
    res.status(code).json()
})

rota.get("/", (req, res)=>{
    res.json(mercado_controller.index())
})

rota.get("/:id", (req, res)=>{
    const item = mercado_controller.show(req.params.id)
    res.json(item)
})


rota.put("/:id", end, (req, res)=>{
    const code = mercado_controller.update(req.params.id, req.body)
    res.status(code).json()
})

rota.delete("/:id", (req, res)=>{
    const code = mercado_controller.destroy(req.params.id)
    res.status(code).json()
})

module.exports = rota