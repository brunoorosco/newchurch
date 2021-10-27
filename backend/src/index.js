const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const port = 3005;

const admin = require('./routes/admin')
const users = require('./routes/members')
const cems = require('./routes/cem')
const church = require('./routes/church')
const encontro = require('./routes/encontro')
const reencontro = require('./routes/reencontro')
const course = require('./routes/course')


app.use(cors())

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


// ARQUIVO DE ROTAS
app.use('/admin', admin)
app.use('/members', users)
app.use('/cems', cems)
app.use('/igrejas', church)
app.use('/cursos', course)
app.use('/encontros', encontro)
app.use('/reencontros', reencontro)

app.listen(port, () => {
    console.log("Servidor Rodando na porta: 3005")
})