'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('../models/product');

const schema = new Schema({
    // customer: {
    //     type: Schema.Types.Mixed,
    //     ref: 'Customer',
    // },
    _id: false,
    number: {
        type: String,
        required: true,
    },
    product: Product.schema,
    // status: {
    //     type: String,
    //     enum: ['created', 'done'], // only this values
    //     dafault: 'created'
    // },
    // created_at: {
    //     type: Date,
    //     dafault: Date.now
    // },
    // items: [{
    //     quantity: {
    //         type: Number,
    //         default: 1,
    //     },
    //     price: {
    //         type: Number,
    //         required: true
    //     },
    //     product: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Product',
    //     },
    // }],
});

module.exports = mongoose.model('Order', schema);