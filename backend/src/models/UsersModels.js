const db = require('../config/dataBase')

const User = db.sequelize.define('users', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    name: {
        type: db.Sequelize.STRING,
        field: 'name'
    },
    email: {
        type: db.Sequelize.STRING,
        field: 'email'
    },
    telefone: {
        type: db.Sequelize.STRING,
        field: 'telefone'
    }
}, {
    tableName: 'users',
    timestamps: false
},

);

module.exports = User;

// const Sequelize = require('sequelize')
// const path = require('path')

// module.exports = (sequelize, DataTypes) => {

//     var Users = sequelize.define('Users', {
//         id: {
//             type: Sequelize.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//             field: 'id'
//         },
//        name: {
//             type: Sequelize.STRING,
//             field: 'name'
//         },
//         email: {
//             type: Sequelize.STRING,
//             field: 'email'
//         },
//         telefone: {
//             type: Sequelize.STRING,
//             field: 'telefone'
//         }
//     }, {
//         // freezeTableName: true,
//         // schema: 'public',
//         tableName: 'users',
//         timestamps: false,

//     })

//     console.log({Users})
//     return Users
// }