const Feedback = require('../models/Feedback');
const { mongooseToObject } = require('../../util/mongoose');
class ContactController {
    //create new contact
    index(req, res) {
        res.render('contact');
    }

    // post
    // feedback(req, res) {
    //     res.render('feedback');
    // }
    feedback(req, res, next) {
       
        const contact = new Feedback(req.body);
        contact.save()
            .then(() => res.redirect('/admin/stored/contact'))
            .catch(err => {
            })
        // res.send("Save")
    }
    //[PUT] /order/:id

    //[DELETE] /order/:id
    destroy(req, res, next) {
        Feedback.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /order/:id/force
    forceDestroy(req, res, next) {
        Feedback.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /order/:id/restore
    restore(req, res, next) {
        Feedback.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // order(req, res, next) {
    //     const orderData = req.body;
    //     res.json(orderData);
    // }

}

module.exports = new ContactController;