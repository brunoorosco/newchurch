const db = require('../config/dataBase')

let Members = db.sequelize.define('membros', {
   idmembros: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      references: {

         key: 'id',

      }
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
   // numero: {
   //    type: db.Sequelize.STRING
   // },
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
      type: 'TIMESTAMP',
      defaultValue: db.Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
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

module.exports = Members;
