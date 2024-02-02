// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Simulando uma lista de restaurantes e seus menus
const restaurants = [
    { id: 1, name: 'Restaurante A', menu: ['Pizza', 'Burger', 'Sushi'] },
    { id: 2, name: 'Restaurante B', menu: ['Salada', 'Sanduíche', 'Massa'] }
];

// Rota para obter a lista de restaurantes e seus menus
app.get('/restaurants', (req, res) => {
    res.json(restaurants);
});

// Rota para processar um pedido
app.post('/order', (req, res) => {
    const { restaurantId, item } = req.body;
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) {
        return res.status(404).json({ error: 'Restaurante não encontrado.' });
    }
    if (!restaurant.menu.includes(item)) {
        return res.status(400).json({ error: 'Item não encontrado no menu.' });
    }
    // Aqui você pode adicionar código para processar o pedido (por exemplo, enviar para a cozinha)
    res.json({ message: 'Pedido recebido com sucesso.' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
