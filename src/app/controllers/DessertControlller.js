const Dessert = require('../models/Dessert');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class DessertControlller {
    //[POST] /dessert/create
    create(req, res, next) {
        res.render('dessert/create')
    }

    //[POST] /dessert/stored
    store(req, res, next) {
        // res.json(req.body);
        const dessert = new Dessert(req.body);
        dessert.save()
            .then(() => res.redirect('/dessert/stored'))
            .catch(err => {
            })
    }
    //[GET] /order/:id/edit
    edit(req, res, next) {
        Dessert.findById(req.params.id).lean()
            .then((desserts) =>
                res.render('dessert/edit', {
                    desserts
                })
            )
            .catch(next);
    }
    //[PUT] /dessert/:id
    update(req, res, next) {
        Dessert.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/dessert/stored'))
            .catch(next);
    }

    //[DELETE] /dessert/:id
    destroy(req, res, next) {
        Dessert.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /order/:id/force
    forceDestroy(req, res, next) {
        Dessert.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /order/:id/restore
    restore(req, res, next) {
        Dessert.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    storedDessert(req, res, next) {
        Dessert.find({}).lean()
            .then(desserts => res.render('dessert/stored-dessert', {
                desserts
            }))
            .catch(next);   
    }

    trashDessert(req, res, next) {
        Dessert.findDeleted({}).lean()
            .then(desserts => res.render('dessert/trash-dessert', {
                desserts
            }))
            .catch(next);
    }

}

module.exports = new DessertControlller;