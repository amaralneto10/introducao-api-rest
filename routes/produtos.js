import express from 'express'

const router = express.Router()

const produtos = [
    {id: 1, nome: "Smart TV", preco: 1000},
    {id: 2, nome: "Máquina de Lavar", preco: 1500},
    {id: 3, nome: "Ferro de passar", preco: 250}
]

router.get('/', (req, res) => {
    res.status(200).json(produtos)
})

router.post('/adicionarProdutos', (req, res) => {
    const { nome, preco } = req.body

    const novoProduto = {
        id: produtos[produtos.length - 1].id + 1,
        nome: nome,
        preco: preco
    }

    produtos.push(novoProduto)
    res.status(201).json(produtos)
})

router.put("/atualizarProduto/:id", (req, res) => {
    const { id } = req.params
    const { novoNome, novoPreco } = req.body

    const index = produtos.findIndex((produto) => {
        return produto.id == id
    })

    if (index == -1) {
        res.status(404).json({mensagem: "Produto não encontrado!"})
        return
    }

    produtos[index].nome = novoNome
    produtos[index].preco = novoPreco

    res.status(202).json(produtos)
})

router.delete('/deletarProduto/:id', (req, res) => {
    const { id } = req.params

    const index = produtos.findIndex((produto) => {
        return produto.id == id
    })

    if (index === -1) {
        res.status(404).json({mensagem: "Produto não encontrado!"})
        return
    }

    produtos.splice(index, 1)
    res.json(produtos)
})

router.get('/buscarProduto/:id', (req, res) => {
    const { id } = req.params

    const produto = produtos.find((produto) => {
        return produto.id == id
    })

    res.send(produto)
})


export default router