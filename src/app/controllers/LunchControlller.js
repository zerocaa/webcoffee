const Lunch = require('../models/Lunch');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class LunchControlller {
    //[POST] /breakfast/create
    create(req, res, next) {
        res.render('lunch/create')
    }

    //[POST] /breakfast/stored
    store(req, res, next) {
        // res.json(req.body);
        const lunch = new Lunch(req.body);
        lunch.save()
            .then(() => res.redirect('/lunch/stored'))
            .catch(err => {
            })
    }
    //[GET] /order/:id/edit
    edit(req, res, next) {
        Lunch.findById(req.params.id).lean()
            .then((lunchs) =>
                res.render('lunch/edit', {
                    lunchs
                })
            )
            .catch(next);
    }
    //[PUT] /breakfast/:id
    update(req, res, next) {
        Lunch.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/lunch/stored'))
            .catch(next);
    }

    //[DELETE] /breakfast/:id
    destroy(req, res, next) {
        Lunch.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /order/:id/force
    forceDestroy(req, res, next) {
        Lunch.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /order/:id/restore
    restore(req, res, next) {
        Lunch.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    storedLunch(req, res, next) {
        Lunch.find({}).lean()
            .then(lunchs => res.render('lunch/stored-lunch', {
                lunchs
            }))
            .catch(next);   
    }

    trashLunch(req, res, next) {
        Lunch.findDeleted({}).lean()
            .then(lunchs => res.render('lunch/trash-lunch', {
                lunchs
            }))
            .catch(next);
    }

}

module.exports = new LunchControlller;