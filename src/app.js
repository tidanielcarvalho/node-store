'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

var options = { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true };
mongoose.connect('mongodb+srv://usuario_dev:uScscRDk1EjqqPeb@clusterapi-t6vp0.mongodb.net/test?retryWrites=true&w=majority', options);

// Load model
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');


// Load router
const indexRoute = require('./routes/indexRouter');
const productRoute = require('./routes/productRouter');
const customerRoute = require('./routes/customerRouter');
const orderRoute = require('./routes/orderRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;