'use strict';

// const mongoose = require('mongoose');
// const Customer = mongoose.model('Customer');
const repository = require('../repositories/orderRepository');
const guid = require('guid');

exports.get = async(req, res, next) => {
    try{
        var data = await repository.get();
        res.status(200).send(data);
    } catch(e) {  
        res.status(500).send({message: 'Falha ao processar requisição.', data:e});
    } 
}

exports.post = async(req, res, next) => {
    let data = {
        customer: req.body.customer,
        number: guid.raw().substring(0, 6),
        items: req.body.items
    };

    try{
        await repository.create(data);
        res.status(201).send({message: 'Pedido cadastrado com sucesso.'});
    } catch(e) {  
        res.status(500).send({message: 'Falha ao cadatrar pedido.', data:e});
    }   
};