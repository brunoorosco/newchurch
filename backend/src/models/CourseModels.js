const db = require('../config/dataBase')

let Course = db.sequelize.define('infocursos', {
   idCursos: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
   },
   nomeCursos: {
      type: db.Sequelize.INTEGER
   },
   tema: {
      type: db.Sequelize.STRING
   },
   data_: {
      type: db.Sequelize.DATE
   }
}, {
   tableName: 'infocursos',
   timestamps: false,

}
);

module.exports = Course;
