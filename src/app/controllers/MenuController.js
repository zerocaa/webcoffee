const Food = require('../models/Food');
const { mongooseToObject } = require('../../util/mongoose');
class MenuController {


    //[get] new
    index(req, res, next) {
        Food.find({}).lean()
            .then(foods => res.render('menu', { foods }))
            .catch(next);
    }
    

}

module.exports = new MenuController;