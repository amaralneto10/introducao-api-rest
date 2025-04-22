import express from 'express'
import usuariosRoutes from './routes/usuarios.js'
import forncecedoresRoutes from './routes/fornecedores.js'
import produtosRoutes from './routes/produtos.js'
const app = express()
const port = 3001

// Permitir ler JSON no corpo da requisição
app.use(express.json())

// Para usarmos nossas rotas importadas
// Adiciona o roteador de usuários
app.use('/usuarios', usuariosRoutes)

// Adiciona o roteador de fornecedores
app.use('/fornecedores', forncecedoresRoutes)

// Adiciona o roteador de fornecedores
app.use('/produtos', produtosRoutes)

// ROTA LISTA USUÁRIOS
app.get('/', (req, res) => {
    res.send('Bem vindo a minha API!')
})


// SERVIDOR NO AR OUVINDO REQUISIÇÕES
app.listen(port, () => {
    console.log(`App escutando na porta ${port}`)
})