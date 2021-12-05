const Food = require('../models/Food');
const { mongooseToObject } = require('../../util/mongoose');
class MenuController {


    //[get] new
    index(req, res, next) {
        Food.find({}).lean()
            .then(foods => res.render('menu', { foods }))
            .catch(next);
    }

    //show menu
    show(req, res, next) {
        Food.findOne({ slug: req.params.slug })
            .then(food =>
                res.render('menu/listdishes', { foods: mongooseToObject(food) })
            )
            .catch(next);
        
    }
    //find food 

}

module.exports = new MenuController;