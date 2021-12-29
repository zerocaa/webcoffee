const Dinner = require('../models/Dinner');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class DinnerControlller {
    //[POST] /dinner/create
    create(req, res, next) {
        res.render('dinner/create')
    }

    //[POST] /dinner/stored
    store(req, res, next) {
        // res.json(req.body);
        const dinner = new Dinner(req.body);
        dinner.save()
            .then(() => res.redirect('/dinner/stored'))
            .catch(err => {
            })
    }
    //[GET] /order/:id/edit
    edit(req, res, next) {
        Dinner.findById(req.params.id).lean()
            .then((dinners) =>
                res.render('dinner/edit', {
                    dinners
                })
            )
            .catch(next);
    }
    //[PUT] /dinner/:id
    update(req, res, next) {
        Dinner.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/dinner/stored'))
            .catch(next);
    }

    //[DELETE] /dinner/:id
    destroy(req, res, next) {
        Dinner.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /order/:id/force
    forceDestroy(req, res, next) {
        Dinner.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /order/:id/restore
    restore(req, res, next) {
        Dinner.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    storedDinner(req, res, next) {
        Dinner.find({}).lean()
            .then(dinners => res.render('dinner/stored-dinner', {
                dinners
            }))
            .catch(next);   
    }

    trashDinner(req, res, next) {
        Dinner.findDeleted({}).lean()
            .then(dinners => res.render('dinner/trash-dinner', {
                dinners
            }))
            .catch(next);
    }

}

module.exports = new DinnerControlller;