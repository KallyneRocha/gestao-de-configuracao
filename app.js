const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

let ProdutosD3 = [
    { id: 1, nome: 'Jinx', altura: '20cm', preco: 'R$250,00' },
    { id: 2, nome: 'Totoro', altura: '15cm', preco: 'R$52,00' },
];

app.get('/api/produtos-d3', (req, res) => {
    res.json(ProdutosD3);
});

app.post('/api/produtos-d3', (req, res) => {
    const { nome, altura, preco } = req.body;

    if (!nome || !altura || !preco) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const novoProduto = {
        id: ProdutosD3.length + 1,
        nome,
        altura,
        preco,
    };

    ProdutosD3.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.delete('/api/produtos-d3/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produtoIndex = ProdutosD3.findIndex((produto) => produto.id === id);

    if (produtoIndex === -1) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    ProdutosD3.splice(produtoIndex, 1);
    res.status(204).send();
});


module.exports = app;