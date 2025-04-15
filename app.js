import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/criarUsuario', (req, res) => {

})

// SERVIDOR NO AR OUVINDO REQUISIÇÕES
app.listen(port, () => {
    console.log(`App escutando na porta ${port}`)
})