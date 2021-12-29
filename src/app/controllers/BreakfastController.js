const Breakfast = require('../models/Breakfast');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class BreakfastController {
    //[POST] /breakfast/create
    create(req, res, next) {
        res.render('breakfast/create')
    }

    //[POST] /breakfast/stored
    store(req, res, next) {
        // res.json(req.body);
        const breakfast = new Breakfast(req.body);
        breakfast.save()
            .then(() => res.redirect('/breakfast/stored'))
            .catch(err => {
            })
    }
    //[GET] /order/:id/edit
    edit(req, res, next) {
        Breakfast.findById(req.params.id).lean()
            .then((breakfasts) =>
                res.render('breakfast/edit', {
                    breakfasts
                })
            )
            .catch(next);
    }
    //[PUT] /breakfast/:id
    update(req, res, next) {
        Breakfast.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/breakfast/stored'))
            .catch(next);
    }

    //[DELETE] /breakfast/:id
    destroy(req, res, next) {
        Breakfast.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /order/:id/force
    forceDestroy(req, res, next) {
        Breakfast.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /order/:id/restore
    restore(req, res, next) {
        Breakfast.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    storedBreakfast(req, res, next) {
        Breakfast.find({})
            .then(breakfasts => res.render('breakfast/stored-breakfast', {
                breakfasts: mutipleMongooseToObject(breakfasts)
            }))
            .catch(next);
    }

    trashBreakfast(req, res, next) {
        Breakfast.findDeleted({}).lean()
            .then(breakfasts => res.render('breakfast/trash-breakfast', {
                breakfasts
            }))
            .catch(next);
    }

}

module.exports = new BreakfastController;