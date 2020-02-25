'use strict';

const repository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');
const emailService = require('../services/emailService')
const authService = require('../services/authService')

exports.notificationUser = async (mail) => {
    await emailService.readyMail(mail);
}

exports.createUser = async (req, res, next) => {

    let token = req.headers['x-api-key'];
    var data = await authService.decodeToken(token);

    try {
        repository.create({
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
            created_by: data.id // resgatando id via generateToken
        })
        
        this.notificationUser(req.body.email)
       
        res.status(201).send({ message: 'Usuário cadastrado com sucesso.' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao cadatrar Usuário.', data: e });
    }
};

exports.userAuth = async (req, res, next) => {
    try{
        const user = await repository.userFind({
            email: req.body.mail,
        })

        if(!user){
            return res.status(500).send({ message: 'Usuário não encontrado'});
        }

        const password = await bcrypt.compare(req.body.password, user.password);

        if (!password){
            res.status(500).send({ message: 'Senha inválida'});
        }

        // As informações passadas para o generate, podem ser resgatadas
        const token = await authService.generateToken({
            id: user._id,
            name: user.name,
            email: user.email,
        });

        return res.status(201).send({ 
            token: token, 
            data: {
                name: user.name,
                email: user.email,
            }
        });        
      
    } catch (e) {
        res.status(500).send({ message: 'Falha ao logar Usuário.', data: e });
    }
}

exports.userRefreshAuth = async (req, res, next) => {
    
    let token = req.headers['x-api-key'];
    var data = await authService.decodeToken(token);

    try{
        const user = await repository.userFindById(data.id);

        if(!user){
            return res.status(500).send({ message: 'Usuário não encontrado'});
        }

        // As informações passadas para o generate, podem ser resgatadas
        const tokenRefresh = await authService.generateToken({
            id: user._id,
            name: user.name,
            email: user.email,
        });

        return res.status(201).send({ 
            token: tokenRefresh, 
            data: {
                name: user.name,
                email: user.email,
            }
        });        
      
    } catch (e) {
        res.status(500).send({ message: 'Falha ao logar Usuário.', data: e });
    }
}


