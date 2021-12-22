const Food = require('../models/Food');
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const ListDishes = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, required: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        othermenu: {
            type: String,
            ref: 'Food'
        }
    },
    {
        timestamps: true,
    },
);

// Add plugins
mongoose.plugin(slug);
ListDishes.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('ListDishes', ListDishes);
