const Order = require('../models/Order');
const { mongooseToObject } = require('../../util/mongoose');
class OrderController {
    //[Get] /order
    create(req, res, next) {
       res.render('order')
    }
    //[POST] /order/stored
    store(req, res, next) {
        // res.json(req.body);
        const order = new Order(req.body);
        order.save()
            .then(() => res.redirect('/'))
            .catch(err => {
                
            })
    }
    //[GET] /order/:id/edit
    edit(req, res, next) {
        Order.findById(req.params.id)
            .then((orders) =>
                res.render('order/edit', {
                    orders: mongooseToObject(orders)
                })
            )
            .catch(next);
    }
    //[PUT] /order/:id
    update(req, res, next) {
        Order.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/listorder'))
            .catch(next);
    }

    //[DELETE] /order/:id
    destroy(req, res, next) {
        Order.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new OrderController;