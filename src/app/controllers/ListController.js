const ListDishes = require('../models/ListDishes');
const Food = require('../models/Food');
// const Order = require('../models/Order');
const { mongooseToObject } = require('../../util/mongoose');
class ListController {


    //[get] new
    //show menu
    show(req, res, next) {
        ListDishes.findOne({ slug: "banhmibi" }).lean()
            .populate('othermenu')
            .then((listdishes) =>
                res.render('listdishes/show', {
                    listdishes   
                }),
            )
            .catch(err => {
                console.error(err);
            })
        // ListDishes.findOne({ slug: req.params.slug}).lean()
        //     .then(
        //         (listdishes) =>
        //         res.render('listdishes/show', {
        //             listdishes   
        //         }),
        //     )
        //     .catch(next)
        
        
    }
    //find food     
    

}

module.exports = new ListController;