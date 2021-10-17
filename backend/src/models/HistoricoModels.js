const db = require('../config/dataBase')

let Historico = db.sequelize.define('historico', {
   idHist: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
   },
   nome: {
      type: db.Sequelize.INTEGER
   },
   status_: {
      type: db.Sequelize.STRING
   },
   membroCad: {
      type: db.Sequelize.INTEGER
   },
   curso: {
       type: db.Sequelize.INTEGER
   }

}, {
   tableName: 'historico',
   timestamps: false,

}
);

module.exports = Historico;
