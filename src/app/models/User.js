const Order = require('../models/Order');
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: String,
        password: String,
        age: Number,
        salary: Number,
        test: {
            type: String,
            ref: 'Order'
        }
    },
    {
        collection: 'users'
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('user', UserSchema);
// const OrderModel = mongoose.model('order', OrderSchema)

