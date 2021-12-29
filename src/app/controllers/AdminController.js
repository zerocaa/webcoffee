const User = require('../models/User');
const Order = require('../models/Order');
const Feedback = require('../models/Feedback');
const Breakfast = require('../models/Breakfast');
const Dinner = require('../models/Dinner');
const Dessert = require('../models/Dessert');
const Winecard = require('../models/Winecard');
const Drink = require('../models/Drink');
const Food = require('../models/Food');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class AdminController {
    //middleware testallaccount
    testallaccount(req, res, next) {
        req.query.litmit = "3";
        req.query.sort = "email";
        req.query.field = "email,description";
        next();
    }

    //render data Order models
    async allaccount(req, res, next) {
        try {
            const queryObj = { ...req.query };
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
            const page = req.query.page * 1 || 1;
            const limit = req.query.limit * 1 || 10;
            const skip = (page - 1) * limit;
            query.skip(skip).limit(limit);
            if (req.query.page) {
                const numOder = await Order.countDocuments();
                if (skip >= numOder) {
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