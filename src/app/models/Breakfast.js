const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Breakfast = new Schema({
        name: {type: String},
        price: {type: Number},
        description: {type: String},
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true },
     },
        {
     timestamps: true,
     });
 
mongoose.plugin(slug);
Breakfast.plugin(mongooseDelete, {
   deletedAt: true,
   overrideMethods: 'all',
});
module.exports = mongoose.model('Breakfast', Breakfast);