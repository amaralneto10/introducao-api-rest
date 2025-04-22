import express from 'express'

const router = express.Router()

const fornecedores = [
    {id: 1, nome: 'ExtaPrint'},
    {id: 2, nome: 'PMenoslab'},
    {id: 3, nome: 'Bolaria Felipe'}
]

router.get('/', (req, res) => {
    res.status(200).json(fornecedores)
})

router.post('/criarFornecedor', (req, res) => {
   const nome = req.body

   fornecedores.push(novoFornecedor)
   res.status(201).json(fornecedores)
})

export default router