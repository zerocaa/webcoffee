const Winecard = require('../models/Winecard');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class WinecardControlller {
    //[POST] /winecard/create
    create(req, res, next) {
        res.render('winecard/create')
    }

    //[POST] /winecard/stored
    store(req, res, next) {
        // res.json(req.body);
        const winecard = new Winecard(req.body);
        winecard.save()
            .then(() => res.redirect('/winecard/stored'))
            .catch(err => {
            })
    }
    //[GET] /order/:id/edit
    edit(req, res, next) {
        Winecard.findById(req.params.id).lean()
            .then((winecards) =>
                res.render('winecard/edit', {
                    winecards
                })
            )
            .catch(next);
    }
    //[PUT] /winecard/:id
    update(req, res, next) {
        Winecard.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/winecard/stored'))
            .catch(next);
    }

    //[DELETE] /winecard/:id
    destroy(req, res, next) {
        Winecard.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /order/:id/force
    forceDestroy(req, res, next) {
        Winecard.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /order/:id/restore
    restore(req, res, next) {
        Winecard.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    storedWinecard(req, res, next) {
        Winecard.find({}).lean()
            .then(winecards => res.render('winecard/stored-winecard', {
                winecards
            }))
            .catch(next);   
    }

    trashWinecard(req, res, next) {
        Winecard.findDeleted({}).lean()
            .then(winecards => res.render('winecard/trash-winecard', {
                winecards
            }))
            .catch(next);
    }

}

module.exports = new WinecardControlller;