'use strict'

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async() => {
    var res = await Order
        .find({}, 'number customer items')
        .populate('customer', 'name') // nome da chave estrangeira, - select
        .populate('items.product', 'title');
    return res;
}

exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
}