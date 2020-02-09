const db = require('../config/dataBase')

let Cem = db.sequelize.define('membros', {
   id: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
   },
   nome: {
      type: db.Sequelize.INTEGER
   },
   email: {
      type: db.Sequelize.STRING
   },
   endereco: {
      type: db.Sequelize.STRING
   },
   nasc: {
      type: db.Sequelize.DATE
   },
   telefone: {
      type: db.Sequelize.STRING
   },
   supervisao: {
      type: db.Sequelize.STRING
   },
   cargo: {
      type: db.Sequelize.STRING
   },
   cadastro: {
      type: db.Sequelize.TIME,
    
   },
   igreja: {
      type: db.Sequelize.STRING
   },
   status: {
      type: db.Sequelize.STRING
   },
}, {
   tableName: 'membros',
   timestamps: false,

}
);

module.exports = Cem;
