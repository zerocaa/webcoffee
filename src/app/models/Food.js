const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const Food = new Schema({
      avatar: {
        type: String,
      },
      cloudinary_id: {
        type: String,
     },
    lunch: {
        name: {type: String},
        
        price: {type: String},
        image: {type: Number},
        description: {type: String},
    },
    breakfas: {
        name: {type: String},
        price: {type: Number},
        description: {type: String},
        image: { type: String },
        videoId: {type: String}
    },
    desserts: {
        name: {type: String},
        price: {type: Number},
        image: {type: String},
        description: {type: String},
    },
    dinner: {
        name: {type: String},
        price: {type: Number},
        image: {type: String},
        description:{type: String},
    },
    drinks: {
        name: {type: String},
        image: {type: String},
        price: {type: Number},
        description: {type: String},
    },
    winecard: {
        name: {type: String},
        image:{type: String},
        price: {type: Number},
        description: {type: String},
    },
     order: {
         name: { type: String ,defaults: '', display: true },
         email: { type: String, defaults: ''},
         order: { type: String, defaults: ''},
     },
 },
{
     timestamps: true,
     });
 
module.exports = mongoose.model('Food', Food);