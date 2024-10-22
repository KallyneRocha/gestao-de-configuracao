const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

let ProdutosD3 = [
    { id: 1, nome: 'Jinx', altura: '20cm', preco: 'R$250,00'},
    { id: 2, nome: 'Totoro', altura: '15cm',  preco: 'R$52,00'},
];

app.get('/api/produtos-d3', (req, res) => {
    res.json(ProdutosD3);
});

app.post('/api/produtos-d3', (req, res) => {
    const novoProduto = req.body;
    novoProduto.id = ProdutosD3.length + 1;
    ProdutosD3.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});