// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.json());

// Rota para cadastro de usuário
app.post('/signup', (req, res) => {
    // Aqui você pode adicionar a lógica para cadastrar o usuário
    const { cpf, email, password } = req.body;
    console.log('Novo usuário cadastrado:');
    console.log('CPF:', cpf);
    console.log('E-mail:', email);
    console.log('Senha:', password);
    res.json({ message: 'Usuário cadastrado com sucesso!' });
});

// Rota para obter a lista de restaurantes
app.get('/restaurants', (req, res) => {
    // Aqui você pode adicionar a lógica para obter a lista de restaurantes do banco de dados
    const restaurants = [
        { id: 1, name: 'Restaurante A', menu: ['Pizza', 'Burger', 'Sushi'] },
        { id: 2, name: 'Restaurante B', menu: ['Salada', 'Sanduíche', 'Massa'] }
    ];
    res.json(restaurants);
});

// Rota para processar um pedido
app.post('/order', (req, res) => {
    // Aqui você pode adicionar a lógica para processar o pedido
    const { restaurantId, item } = req.body;
    console.log('Novo pedido recebido:');
    console.log('ID do Restaurante:', restaurantId);
    console.log('Item:', item);
    res.json({ message: 'Pedido recebido com sucesso!' });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
