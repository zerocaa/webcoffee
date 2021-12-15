const ListDishes = require('../models/ListDishes');
const { mongooseToObject } = require('../../util/mongoose');
class ListController {


    //[get] new
    //show menu
    show(req, res, next) {
        ListDishes.findOne({ slug: req.params.slug })
            .then((listdishes) =>
                res.render('listdishes/show', {
                    listdishes: mongooseToObject(listdishes),
                }),
            )
            .catch(next)
    }
    //find food     

}

module.exports = new ListController;