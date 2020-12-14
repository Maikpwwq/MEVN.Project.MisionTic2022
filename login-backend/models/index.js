const {Sequelize} = require('sequelize'); // , DataTypes

// Mayusculas clases, minusculas instancias
// modelos
const UserModel = require ('./usuarios.js');

const sequelize = new Sequelize('SGdOdO0NbF', 'SGdOdO0NbF', 'SMQh8jae6o', {
    host: 'remotemysql.com',
    port: '3306',
    dialect: 'mysql'
});

const Usuario = UserModel( sequelize, Sequelize ); 

sequelize.sync({
    force: false
}).then(()=>{
    console.log('Tablas sincronizadas')
});

module.exports = {
    Usuario
};

