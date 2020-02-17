'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product
    .find({
        active: true, // where
    }, 'title price slug') // select
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    })
    
};

exports.getBySlug = (req, res, next) => {
    Product
    .findOne({
        slug: req.params.slug,
        active:true
    })
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    })
}

exports.getById = (req, res, next) => {
    Product
    .findById(req.params.id)
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    })
}

exports.getByTags = (req, res, next) => {
    Product
    .find({
        tags: req.params.tag,
        active: true
    }).then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    })
}

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    try{
        product.save();
        res.status(201).send({message: 'Produto cadastrado com sucesso.', data:product});
    } catch(e){
        res.status(400).send({message: 'Falha ao cadatrar produto.', data:e});
    }
    res.status(201).send(req.body);
};

const returnById = (id) => {
    return Product.findById(id);
}

exports.put = (req, res, next) => {
    Product
    .findByIdAndUpdate(req.params.id, {
        $set: { 
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        }
    }).then(data => {
        res.status(201).send({
            message: 'Produto atualizado com sucesso.', 
            data: data // list updated product
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao atualizar produto.',
            data:e
        });
    });
};

exports.delete = (req, res, next) => {
    Product
    .findByIdAndRemove(req.body.id)
    .then(data => {
        res.status(200).send({
            message: 'Produto removido com sucesso.', 
            data: data // list updated product
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao remover produto.',
            data:e
        });
    });
};