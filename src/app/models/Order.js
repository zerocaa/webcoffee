const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Order = new Schema(
    {
        name: { type: String, required: true },
        email:{type:String},
        description: { type: String },
        slug: { type: String, slug: 'name',unique:true} 
    },
    {
        timestamps: true,
    },
);

// Add plugins
mongoose.plugin(slug);
Order.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Order', Order);
