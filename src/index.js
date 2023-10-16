require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.json());

app.get('/',async (req,res)=>{
    return res.status(200).json('Tudo Ok!')
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`servidor em pé na porta ${port}`))