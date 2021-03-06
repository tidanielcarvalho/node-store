'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const User = require('./user');

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
    created_at: {
        type: Date,
        default: Date.now()
    },
    created_by: {
        type: String,
    }
});

module.exports = mongoose.model('User', schema);