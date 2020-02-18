'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },
    number: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['created', 'done'], // only this values
        dafault: 'created'
    },
    created_at: {
        type: Date,
        required: true,
        dafault: Date.now
    },
    items: [{
        quantity: {
            type: Number,
            default: 1,
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
    }],
});

module.exports = mongoose.model('Order', schema);