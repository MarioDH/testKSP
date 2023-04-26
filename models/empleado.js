const mongoose = require("mongoose");

const empleadoSchema = new mongoose.Schema({
    Identificador: {
        type: Number,
        required: true,
    },
    Foto: {
        type: String,
        required: true,
    },
    Nombre: {
        type: String,
        required: true,
    },
    Puesto: {
        type: String,
        required: true,
    },
    Salario: {
        type: Number,
        required: true,
    },
    Estatus: {
        type: String,
        required: true,
    },
    fecha_Contrato: {
        type: String,
        required: true,
    }, 
});
//Nombre de coleccion
const empleado = mongoose.model("empleado", empleadoSchema);

module.exports = empleado;