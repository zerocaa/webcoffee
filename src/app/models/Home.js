const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const Home = new Schema({
    header: {
        head: {type: String},
        subtext: {type: String},
         bg_image: { type: Number },
        
    }
});
module.exports = mongoose.model('Home', Home);