
const { response } = require('express');
const empleadoModel = require('../models/empleado');

const empleadoGet = async (request, response = response) => {
    const empleado = await empleadoModel.find({});
    try {
        response.send(empleado);
    } catch (error) {
        response.status(500).send(error);
    }
};

const empleadoPost = async (request, response = response) => {
    const empleado = new empleadoModel(request.body);

    try {
        await empleado.save();
        response.send(empleado);
    } catch (error) {
        response.status(500).send(error);
    }
};

const empleadoPut = async (request, response = response) => {
    let empleado;
    try {
        empleado = await empleadoModel.findByIdAndUpdate(request.params.id, request.body, { new: true });
        response.status(200).json(empleado);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

const empleadoDelete = async (request, response = response) => {
    let empleado;
    try {
        empleado = await empleadoModel.findByIdAndDelete(request.params.id);
        if (!empleado) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        response.status(200).json({ message: 'Empleado eliminado correctamente' });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

/* async (request, response) => {
  const empleado = ['test', 'put']
  response.send(empleado);
}; */

module.exports = { empleadoGet, empleadoPost, empleadoPut, empleadoDelete }