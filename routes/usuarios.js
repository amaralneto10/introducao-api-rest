import express from 'express'
const router = express.Router()

// Banco de dados  fake (em memória)
const usuarios = [
    {id: 1, nome: 'Amaral', email: "amaralneto@gmail.com"},
    {id: 2, nome: 'Ana', email: "ana@gmail.com"}
    ]

// ROTA CRIA USUÁRIO
router.post('/criarUsuario', (req, res) => {
    const { nome, email } = req.body
    usuarios.push({
        id: usuarios[usuarios.length - 1].id + 1,
        nome: nome,
        email: email
    })

    res.status(201).json(usuarios)
})

router.put('/usuario/:id', (req, res) => {
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

router.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios)
    })

router.delete("/usuario/:id", (req, res) => {
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

export default router