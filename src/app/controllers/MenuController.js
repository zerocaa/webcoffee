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
    // list(req, res, next) {
    //     Food.findOne({ slug: req.params.slug }).lean()
    //         .then(foods =>
    //             res.render('listdishes', { foods})
    //         )
    //         .catch(next);
    // }
    //find food 

}

module.exports = new MenuController;