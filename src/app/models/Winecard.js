const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Winecard = new Schema({
        name: {type: String},
        price: {type: Number},
        description: {type: String},
        image: { type: String },
     },
    {
     timestamps: true,
     });
mongoose.plugin(slug);
Winecard.plugin(mongooseDelete, {
        deletedAt: true,
        overrideMethods: 'all',
});
module.exports = mongoose.model('Winecard', Winecard);