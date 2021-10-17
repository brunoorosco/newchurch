const Sequelize = require('sequelize');

const sequelizeDev = new Sequelize('db_igreja', 'brunoorosco', '123456',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: '3306',
    })

const sequelize = new Sequelize('u858016896_igr', 'u858016896_igr', 'Orosco032903',
    {
        host: '185.201.11.107',
        dialect: 'mysql',
        port: '',
    })

sequelize.authenticate()
    .then(() => {
        console.log("Conectado com sucesso")
    }).catch((err) => {
        console.log("Falha ao Conectar - Erro: " + err)
    });

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }