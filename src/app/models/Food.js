const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const Food = new Schema({
    name: {
        type: String,
      },
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
        image:{type: String},
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

});
module.exports = mongoose.model('Food', Food);