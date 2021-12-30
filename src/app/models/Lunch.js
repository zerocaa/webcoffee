const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Lunch = new Schema(
        {  
        name: { type: String },
        price: { type: Number },
        description: { type: String },
        image: { type: String },
        avatar: { type: String },
        cloudinary_id: { type: String },
        slug: { type: String, slug: 'name', unique: true }
        },
        {
                timestamps: true,
        }
);

mongoose.plugin(slug);
Lunch.plugin(mongooseDelete, {
        deletedAt: true,
        overrideMethods: 'all',
});
module.exports = mongoose.model('Lunchs', Lunch);