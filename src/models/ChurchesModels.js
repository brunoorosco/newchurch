const db = require('../config/dataBase')

let Igreja = db.sequelize.define('igrejas', {
   id: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
   },
   responsavel: {
      type: db.Sequelize.INTEGER
   },
   igreja: {
      type: db.Sequelize.STRING
   },
   endereco: {
      type: db.Sequelize.STRING
   }
}, {
   tableName: 'igrejas',
   timestamps: false,

}
);

module.exports = Igreja;
