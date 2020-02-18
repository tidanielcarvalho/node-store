'use strict';

// const mongoose = require('mongoose');
// const Customer = mongoose.model('Customer');
const repository = require('../repositories/customerRepository');

exports.post = async(req, res, next) => {
    try{
        var data = await repository.create(req.body);
        res.status(201).send({message: 'Cliente cadastrado com sucesso.'});
    } catch(e) {  
        res.status(500).send({message: 'Falha ao cadatrar cliente.', data:e});
    }   
};