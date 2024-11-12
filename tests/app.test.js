// tests/app.test.js
const request = require('supertest');
const app = require('../app'); // ajuste o caminho conforme necessário para importar o app

describe('Testando API de Produtos 3D', () => {
  it('Deve retornar uma lista de produtos com GET /api/produtos-d3', async () => {
    const response = await request(app).get('/api/produtos-d3');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it('Deve adicionar um novo produto com POST /api/produtos-d3', async () => {
    const novoProduto = {
      nome: 'Waddles',
      altura: '10cm',
      preco: 'R$30,00'
    };
    const response = await request(app)
      .post('/api/produtos-d3')
      .send(novoProduto);
    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(novoProduto);
  });
});
