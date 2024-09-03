const express = require ("express")
const port = 8000
const app = express()



app.use(express.json())

const mercado_route = require("./routes/mercado.js")
app.use("/mercado", mercado_route)

const fornecedor_route = require("./routes/forncedor.js")
app.use("/fornecedor", fornecedor_route)

const produto_route = require("./routes/produto.js")
app.use("/produto", produto_route)

app.listen(port, () => {
    console.log("Server rodando na porta " + port)
})