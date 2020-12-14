const router = require('express').Router();
const userController = require('../../controllers/UserController.js');

router.get('*', (req, res)=>{
    res.status(404).send('La pagina a la que intenta acceder no existe!'); 
});

// api/user/
router.get('/', userController.listar);
// api/user/signin
router.post('/signin', userController.signin);
// api/user/signup
router.post('/signup', userController.signup);

module.exports = router;