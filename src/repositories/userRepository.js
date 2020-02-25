'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.create = async (data) => {
    var user = new User(data);
    await user.save();
}

exports.userFind = async (data) => {
    var res = await User.findOne({
        email: data.email,
    });
    return res
}

exports.userFindById = async (id) => {
    var res = await User.findById(id);
    return res
}