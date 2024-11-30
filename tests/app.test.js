const request = require('supertest');
const app = require('../app');

describe('API de ProdutosD3', () => {
    test('Deve retornar todos os produtos', async () => {
        const response = await request(app).get('/api/produtos-d3');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(2);
    });

    test('Deve adicionar um novo produto', async () => {
        const novoProduto = { nome: 'Waddles', altura: '10cm', preco: 'R$30,00' };
        const response = await request(app).post('/api/produtos-d3').send(novoProduto);
        expect(response.status).toBe(201);
        expect(response.body.nome).toBe('Waddles');
    });

    test('Deve retornar erro ao tentar adicionar produto com dados incompletos', async () => {
        const response = await request(app).post('/api/produtos-d3').send({ nome: 'Faltando dados' });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Todos os campos são obrigatórios.');
    });

    test('Deve remover um produto existente', async () => {
        const response = await request(app).delete('/api/produtos-d3/1');
        expect(response.status).toBe(204);
    });

    test('Deve retornar erro ao tentar remover um produto inexistente', async () => {
        const response = await request(app).delete('/api/produtos-d3/999');
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('Produto não encontrado.');
    });
});
