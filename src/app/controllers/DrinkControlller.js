const Drink = require('../models/Drink');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class DrinkControlller {
    //[POST] /drink/create
    create(req, res, next) {
        res.render('drink/create')
    }

    //[POST] /drink/stored
    store(req, res, next) {
        // res.json(req.body);
        const drink = new Drink(req.body);
        drink.save()
            .then(() => res.redirect('/drink/stored'))
            .catch(err => {
            })
    }
    //[GET] /order/:id/edit
    edit(req, res, next) {
        Drink.findById(req.params.id).lean()
            .then((drinks) =>
                res.render('drink/edit', {
                    drinks
                })
            )
            .catch(next);
    }
    //[PUT] /drink/:id
    update(req, res, next) {
        Drink.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/drink/stored'))
            .catch(next);
    }

    //[DELETE] /drink/:id
    destroy(req, res, next) {
        Drink.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /order/:id/force
    forceDestroy(req, res, next) {
        Drink.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /order/:id/restore
    restore(req, res, next) {
        Drink.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    storedDrink(req, res, next) {
        Drink.find({}).lean()
            .then(drinks => res.render('drink/stored-drink', {
                drinks
            }))
            .catch(next);   
    }

    trashDrink(req, res, next) {
        Drink.findDeleted({}).lean()
            .then(drinks => res.render('drink/trash-drink', {
                drinks
            }))
            .catch(next);
    }

}

module.exports = new DrinkControlller;