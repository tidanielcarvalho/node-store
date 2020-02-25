'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
const router = express.Router();

var options = { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true };
mongoose.connect(process.env.DB_CONNECT, options);

// Load model
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');
const User = require('./models/user');


// Load router
const indexRoute = require('./routes/indexRouter');
const productRoute = require('./routes/productRouter');
const customerRoute = require('./routes/customerRouter');
const orderRoute = require('./routes/orderRouter');
const userRoute = require('./routes/userRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS - necessário melhorias
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);
app.use('/users', userRoute);

module.exports = app;