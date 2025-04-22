import express from 'express'
const app = express()
const port = 3001
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
    const { nome, email } = req.body
    usuarios.push({
        id: usuarios[usuarios.length - 1].id + 1,
        nome: nome,
        email: email
    })

    res.status(201).json(usuarios)
})

app.put('/usuario/:id', (req, res) => {
    const { id } = req.params
    const { novoNome, novoEmail } = req.body

    const index = usuarios.findIndex((usuario) => {
        return usuario.id == id
    })

    if (index == -1) {
       return res.status(404).json({mensagem: "Usuário não encontrado!"})
    }

    usuarios[index].nome = novoNome
    usuarios[index].email = novoEmail

    res.send(usuarios)
})

app.delete("/usuario/:id", (req, res) => {
    const { id } = req.params

    const index = usuarios.findIndex((usuario) => {
    return usuario.id == id
})

if (index === -1) {
    return res.status(404).json({mensagem: "Usuário não encontrado!"})
}

    usuarios.splice(index, 1)

    res.send(usuarios)
})

/*
Crie uma rota (endpoint) do tipo GET que
envie uma resposta (mensagem) com todos os 
usuários cadastrados no "Banco de dados"
 */

app.get('/usuarios', (req, res) => {
res.status(200).json(usuarios)
})

// SERVIDOR NO AR OUVINDO REQUISIÇÕES
app.listen(port, () => {
    console.log(`App escutando na porta ${port}`)
})