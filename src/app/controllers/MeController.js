const Order = require('../models/Order');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    //[Get] /me/stored/listorder
    storedOrder(req, res, next) {
        Order.find({})
            .then(orders => res.render('me/stored-order', {
                orders: mutipleMongooseToObject(orders)
            }))
            .catch(next);
    }
}

module.exports = new MeController;