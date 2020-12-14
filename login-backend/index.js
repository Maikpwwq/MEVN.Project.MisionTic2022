const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const apiRouter = require('./routes') // index.js

// instancia de express actualiza los cambios en el servidor
const app = express();

// gestionar el error de cors
// const cors = require('cors');
// app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, x-Request-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: GET, POST, DELETE");
    next();
});

// middleware de las peticiones tiny combine common dev
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Ruta inicial que imprime en el navegador
app.use('/api', apiRouter);

/*
app.get('/', (req, res)=> {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});
*/

app.set('PORT', process.env.PORT || 3000);

app.listen(app.get('PORT'), ()=> {
    console.log('Server up');
});