const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());


app.post('/signup', (req, res) => {
    const { cpf, email, password } = req.body;
    console.log('Novo usuário cadastrado:');
    console.log('CPF:', cpf);
    console.log('E-mail:', email);
    console.log('Senha:', password);
    res.json({ message: 'Usuário cadastrado com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
