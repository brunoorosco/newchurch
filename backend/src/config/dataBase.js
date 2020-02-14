const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_igreja', 'brunoorosco', '123456',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: '3306',
    })

sequelize.authenticate()
    .then(() => {
        console.log("Conectado com sucesso")
    }).catch((err) => {
        console.log("Falha ao Conectar" + err)
    });

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }