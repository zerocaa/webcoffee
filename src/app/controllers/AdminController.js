const User = require('../models/User');
const Order = require('../models/Order');
const Feedback = require('../models/Feedback');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class AdminController {

    //[POST] /admin/createmenu
    create(req, res, next) {
        res.render('admin/createmenu')
    }
    //[Get] /me/stored/listorder
    storedContact(req, res, next) {
        Feedback.find({}).lean()
            .then(feedbacks => res.render('admin/stored-contact', {
                feedbacks
            }))
            .catch(next);
    }
    trashContact(req, res, next) {
        Feedback.findDeleted({})
            .then((feedbacks) =>
                res.render('admin/trash-contact', {
                    feedbacks: mutipleMongooseToObject(feedbacks),
                }),
            )
            .catch(next);
    }

    account(req, res, next) {
        User.findOne({ username: "badad" }).lean()
            .populate('test')
            .populate({
                path: 'test',
                populate: {
                    path: 'username'
                }
            })
            .then(data => {
               res.json(data);
            })
            .catch(err => {
                console.log(err);
            })
    }
}

module.exports = new AdminController;