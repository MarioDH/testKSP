const express = require ('express');
require ('dotenv').config();
const configuracionDeServidor = require('./core/serverConfig');
const dbConnect = require('./core/dbConfig');
const app = express();
const cors = require('cors');
app.use(express.json());

const empleado = require('./routes/empleado');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // Otro
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/empleado', empleado);

dbConnect();

const port = process.env.PORT ;

/**
 * Inicializar servidor
 */
app.listen( port, () => {
    console.log(`Express Server on port ${configuracionDeServidor.server}${port} `)
});