const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Feedback = new Schema(
    {
            name: { type: String, required: true },
            email: { type: String },
            feedback: { type: String },
            slug: { type: String, slug: 'name', unique: true }
    },
    {
        timestamps: true,
    },
);

// Add plugins
mongoose.plugin(slug);
Feedback.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Feedback', Feedback);
