const router = require('express').Router();
const apiRouterUser = require('./api/users');

// Manejador Ruta /user
router.use('/users', apiRouterUser);

module.exports = router; //ayer tenia que ver con el exports