const express = require('express');
const cliente = require('./models/cliente');
const port = 3002;


const app = express();
app.use(express.json());


//Trazer todos os clientes 
app.get("/todos", async(req, res) =>{
    const clientes = await cliente.findAll()
    res.status(200).json(clientes);
});

// Filtrar Id 
app.get("/cliente/:id", async(req, res) =>{
    const id = req.params.id;
    const clientes = await cliente.findByPk(id);
    res.status(200).json(clientes);
});

app.post("/cadastrar", async(req, res)=>{

    await cliente.create(req.body)
    .then( ()=>{
        return res.json({
            erro: false,
            mensagem: "Cliente cadastrado com sucesso"
        });
    }).catch( ()=>{
        res.status(404).json({
            erro: true,
            mensagem: "Erro ao cadastrar cliente!"
        });
    });
});




app.listen(port, ()=>{
    console.log(`Rodando na porta ${port}...`);
});