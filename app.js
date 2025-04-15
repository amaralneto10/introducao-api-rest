import express from 'express'
const app = express()
const port = 3000
// Banco de dados  fake (em memória)
const usuarios = [
    {id: 1, nome: 'Amaral', email: "amaralneto@gmail.com"},
    {id: 2, nome: 'Ana', email: "ana@gmail.com"}
    ]

// Permitir ler JSON no corpo da requisição
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Bem vindo a minha API!')
})

app.post('/criarUsuario', (req, res) => {
    const { nome, idade } = req.body
    res.send(`Nome: ${nome} | Idade: ${idade}`)
})

/*
Crie uma rota (endpoint) do tipo GET que
envie uma resposta (mensagem) com todos os 
usuários cadastrados no "Banco de dados"
 */

app.get('/usuarios', (req, res) => {
res.send(usuarios)
})

// SERVIDOR NO AR OUVINDO REQUISIÇÕES
app.listen(port, () => {
    console.log(`App escutando na porta ${port}`)
})