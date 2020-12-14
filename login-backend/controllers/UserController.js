const { Usuario } = require('../models');
const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signin = async (req, res, next) => {
    try {
        const user = await db.Usuario.findOne({ 
            where: { email: req.body.email }
        });

        if (user) {
            const passwordIsValid = bcrypt.compareSync( req.body.password, user.password )

            if (passwordIsValid) {
                const token = jwt.sign({
                    id: user.id,
                    name: user.userName,
                    email: user.email,
                    rol: user.rol
                }, 'config.secret' , {
                    // Expira en x segundos
                    expiresIn: 86400,
                });

                res.status(200).send({
                    auth: true,
                    tokenReturn: token,
                    //user: user
                })
            } else {
                res.status(401).json({
                    error: 'Error en el usuario o contraseña'
                })
            }
        } else {
            res.status(404).json({
                error: 'Error en el usuario o contraseña'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        })
        // Evitar el bloqueo al dar permiso de continuar
        next(error)
    }
}; 
    
// Registrar un usuario
exports.signup = async (req, res, next) => {
    try {
        // hash (await) or hashSync
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await Usuario.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({
            message: 'Error al registrar el usuario con estos datos' + error
        })
    }  
};

// Listar usuarios
exports.listar = async (req, res, next) => {
    try {
        const users = await db.Usuario.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(401).json({
            message: 'Error al registrar el usuario con estos datos' + error
        })
    }  
};