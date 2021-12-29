const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Drink = new Schema({
        name: {type: String},
        price: {type: Number},
        description: {type: String},
        image: { type: String }
     },
    {
     timestamps: true,
     });
mongoose.plugin(slug);
Drink.plugin(mongooseDelete, {
        deletedAt: true,
        overrideMethods: 'all',
});
module.exports = mongoose.model('Drink', Drink);