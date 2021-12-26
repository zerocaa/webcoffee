const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Breakfast = new Schema({
        name: {type: String},
        price: {type: Number},
        description: {type: String},
        image: { type: String }
     },
    {
     timestamps: true,
     });
 
module.exports = mongoose.model('Breakfast', Breakfast);