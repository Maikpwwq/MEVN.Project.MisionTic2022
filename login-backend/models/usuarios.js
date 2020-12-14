// modelos en plural y tablas en singular
module.exports = (sequelize, type) =>{
    return sequelize.define('usuario',{
        id:{
            type: type.INTEGER,
            primaryKey: true,            
            autoIncrement: true
        },
        userName:{
            type: type.STRING,
            allowNull: false
        },
        email: type.STRING,
        password: type.STRING,
        rol: type.STRING,
    }) 
}