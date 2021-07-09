//Criar o servidor

const express = require('express');

const app = express();

app.use(express.static('public'));

// Rotas

app.get('/', (req, res)=> {
    res.sendFile( __dirname + "/views/home.html")
});

app.get('/home', (req, res)=> {
    res.sendFile( __dirname + "/views/home.html")
});

app.get('/manutencao', (req, res)=> {
    res.sendFile(__dirname + '/views/manutencao.html')
});

app.listen(3000, () => console.log('Funcionando'))
