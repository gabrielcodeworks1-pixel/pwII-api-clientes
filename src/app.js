/*module.exports = app*/
const express = require("express");
const clientesRoutes = require("./routes/clientesRoutes");

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());

//Rota raiz

app.get("/", (req, res) => {
    res.json({
        mensagem:"API de Clientes",
        versao: "1.0.0",
        endpoints: {
            listarTodos: "GET /clientes",
            buscarPorId: "GET /clientes/:id",
        }
    })
})

app.use("/clientes", clientesRoutes);

app.use((req, res) => {
    res.status(404).json({
        sucess: false, 
        mensagem: "Rota não encontrada",
    })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`\n🚀 Servidor rodando em http://localhost:${PORT}`);
})

module.exports = app;