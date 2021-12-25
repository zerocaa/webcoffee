const User = require('../models/User');
const Order = require('../models/Order');
const Feedback = require('../models/Feedback');
const Food = require('../models/Food');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class AdminController {
    //middleware testallaccount
    testallaccount(req, res, next) {
        req.query.litmit = "3";
        req.query.sort = "-email";
        req.query.field = "email";
        next();
    }

    //render data Order models
    async allaccount(req, res, next) {
        try {
            const queryObj = {...req.query};
            const excludeFields = ['page', 'limit', 'sort'];
            excludeFields.forEach(field => delete queryObj[field]);

            let queryStr = JSON.stringify(queryObj);
            queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
            const query = Order.find(JSON.parse(queryStr));
            //sorting
            if (req.query.sort) {
                const sortBy = req.query.sort.split(',').join(' ');
                query.sort(sortBy);
            } else {
                query.sort('-createdAt');
            }
            //field limiting
            if (req.query.field) {
                const field = req.query.field.split(',').join(' ');
                query.select(field);
            } else {
                query.select('-__v');
            }
            //pagination
            const page =req.query.page * 1 || 1;
            const limit = req.query.limit * 1 || 10;
            const skip = (page - 1 ) * limit;
            query.skip(skip).limit(limit);
            if(req.query.page) {
                const numOder = await Order.countDocuments();
                if(skip >= numOder) {
                    throw new Error('Page not found');
                }
            }
            const oder = await query;
            res.json(oder);
        }
        catch (err) {
            next(err);
        }
    }


    //[POST] /admin/createmenu
    create(req, res, next) {
        res.render('admin/createmenu')
    }

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

    postmenu(req, res, next) {
        const menu = new Order(req.body);
        menu.save()
            .then(() => res.redirect('/admin/stored/menu'))
            .catch(err => {
            })
    }
    
    storedMenu(req, res, next) {
        Food.find({})
            .then(foods => res.render('admin/stored-menu', {
                foods: mutipleMongooseToObject(foods)
            }))
            .catch(next);
    }
    
    trashMenu(req, res, next) {
        Food.findDeleted({})
            .then((foods) =>
                res.render('admin/trash-menu', {
                    foods: mutipleMongooseToObject(foods),
                }),
            )
            .catch(next);
    }

}

module.exports = new AdminController;