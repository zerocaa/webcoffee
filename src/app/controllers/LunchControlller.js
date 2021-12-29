const Lunch = require('../models/Lunch');
const cloudinary = require("../../util/cloudinary");
const upload = require("../../util/multer");
const { mutipleMongooseToObject } = require('../../util/mongoose');
class LunchControlller {
   
    async getLunch(req, res, next) {
        try {
            // Find user by id
            let lunchs = await Lunch.findById(req.params.id);
            res.json(lunchs);
        } catch (err) {
            console.log(err);
        }
    }




    create(req, res, next) {
        res.render('lunch/create')
    }

    async store(req, res, next) {
        // res.json(req.body);
        try {
            const result = await cloudinary.uploader.upload(req.body.image);

            const lunch =  new Lunch({
                name: req.body.name,
                avatar: result.secure_url,
                cloudinary_id: result.public_id,
                price: req.body.price,
                description: req.body.description,
                image: req.body.image
            });
            await lunch.save();
            // res.json(lunch);
            res.redirect('/lunch/stored');
      }  
            catch(err) 
        {
            console.log(err);
        }
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
    async update(req, res) {
        try {
            let lunchs = await Lunch.findById({ _id: req.params.id });
            await cloudinary.uploader.destroy(lunchs.cloudinary_id);
            Lunch.updateOne({ _id: req.params.id }, req.body)
            let result;
            if (req.body.image) {
                result = await cloudinary.uploader.upload(req.body.image);
            }
            const data = {
                name: req.body.name || lunchs.name,
                description: req.body.description || lunchs.description,
                price: req.body.price || lunchs.price,
                image: req.body.image || lunchs.image,
                avatar: result?.secure_url || lunchs.avatar,
                cloudinary_id: result?.public_id || lunchs.cloudinary_id,
            };
            lunchs = await Lunch.findByIdAndUpdate(req.params.id, data, { new: true });
            res.redirect('/lunch/stored');
        }
            // .then(() => res.redirect('/lunch/stored'))
        catch (err) {
            console.log(err);
            }
    }

   
    async destroy(req, res) {
        try {
            let lunchs = await Lunch.findById({ _id: req.params.id });
            await cloudinary.uploader.destroy(lunchs.cloudinary_id);
            await lunchs.delete();
            res.redirect('back')
       }
       
            // .then(() => res.redirect('back'))
        catch (err) {
            console.log(err);
            }
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