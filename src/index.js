require('dotenv').config()
const express = require('express');
const app = express();
const knex = require('./conexao')

app.use(express.json());

app.get('/',async (req,res)=>{
    try {
        const carros = await knex('carros')
        return res.status(200).json(carros)
    } catch (error) {
        console.log(error);
        return res.status(500).json({mensagem: 'erro interno do servidor'})
    }
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`servidor em pé na porta ${port}`))