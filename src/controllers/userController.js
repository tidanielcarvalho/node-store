'use strict';

const repository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res, next) => {
    try {
        let password = await bcrypt.hash(req.params.password, 10);
        // await bcrypt.hash(req.params.password);
        console.log(password);
        exit;
        var data = await repository.create(req.body);
        res.status(201).send({ message: 'Usuário cadastrado com sucesso.' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao cadatrar Usuário.', data: e });
    }
};