'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

var options = { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true };
mongoose.connect('string de conexao', options);

// Load model
const Product = require('./models/product');

// Load router
const indexRoute = require('./routes/indexRouter');
const productRoute = require('./routes/productRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;