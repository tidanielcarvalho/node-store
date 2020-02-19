'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Order = require('mongoose').model('Order').schema;
const Order = require('../models/order');

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    order: [Order.schema],
});

module.exports = mongoose.model('Customer', schema);