'use strict'

const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign(data, process.env.JWT_KEY, {expiresIn: '1d'});
}

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, process.env.JWT_KEY);
    return data;
}

exports.authorize = (req, res, next) => {
    var token = req.headers['x-api-key'];

    if(!token){
        res.status(401).json({message: 'Acesso Restrito'});
    };

    jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {
        if(error){
            res.status(401).json({message: 'Token inválido.'});
        }

        next();
    })


}