// // IMPORTANDO O MÓDULO EXPRESS

const express = require('express')
// // APP RECEBE O EXPRESS
const app = express()
// // PERMITE QUE O SERVIDOR ENTENDA JSON NO CORPO DAS REQUISIÇÕES
app.use(express.json())

 //EXPORTAR ROTAS

 const login = require('./routes/RouterLogin')
app .use('/Login', login)

const products = require('./routes/RouterProduct')
app .use('/Products', products)

// // CRIANDO UMA ROTA PARA A API
// app.get('/home', (req, res) => {
//   res.send('Hello World')
// })

// // CRIANDO UMA ROTA PARA A API
// app.get('/states', (req, res) => {
//     res.send({
//         'Ceará': 10,
//         'Bahia': 8,
//         'Pernambuco': 7.78,
//         'Piauí': 6.4
//     })
//   })

// // SUBINDO O SERVIDOR NA PORTA 3000
const PORT = 3000
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`)
})

// const ceps = async (cep) => {
//   const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
//   const data = await response.json();
//   return data.logradouro;
// }

// const showCepData = async () => {
//   const logradouro = await ceps(60543456); // Usando await para obter o valor
//   console.log(logradouro); // Exibe o logradouro no console
// }

// showCepData()