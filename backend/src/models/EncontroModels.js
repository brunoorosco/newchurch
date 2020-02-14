const db = require('../config/dataBase')

let Encontro = db.sequelize.define('encontro', {
    id_encontro: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
    },
    n_encontro: {
        type: db.Sequelize.INTEGER
    },
    encontrista: {
        type: db.Sequelize.INTEGER
    },
}, {
    tableName: 'encontro',
    timestamps: false,
}
);

module.exports = Encontro;
