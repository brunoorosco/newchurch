const db = require('../config/dataBase')

let Cem = db.sequelize.define('cem', {
   id: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
   },
   responsavel: {
      type: db.Sequelize.INTEGER
   },
   nome_cem: {
      type: db.Sequelize.STRING
   },
   endereco: {
      type: db.Sequelize.STRING
   }
}, {
   tableName: 'cem',
   timestamps: false,

}
);

module.exports = Cem;
