'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

var options = { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true };
mongoose.connect('string de conexao', options);

// Load model
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');


// Load router
const indexRoute = require('./routes/indexRouter');
const productRoute = require('./routes/productRouter');
const customerRoute = require('./routes/customerRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);

module.exports = app;