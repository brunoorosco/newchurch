const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

const admin = require('./routes/admin')
const users = require('./routes/users')
const cems = require('./routes/cem')
const crurch = require('./routes/crurch')
const encontro = require('./routes/encontro')
const reencontro = require('./routes/reencontro')
const course = require('./routes/course')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ARQUIVO DE ROTAS
app.use('/admin', admin)
app.use('/users', users)
app.use('/cems', cems)
app.use('/igrejas', crurch)
app.use('/cursos', course)
app.use('/encontro', encontro)
app.use('/reencontro', reencontro)

app.listen(port, () =>{
    console.log("Servidor Rodando")
})