const User = require('../models/User');
const Order = require('../models/Order');
const Feedback = require('../models/Feedback');
const Breakfast = require('../models/Breakfast');
const Lunch = require('../models/Lunch');
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

    storedbreakfast(req, res, next) {
        Breakfast.find({})
            .then(breakfasts => res.render('admin/stored-menu', {
                breakfasts: mutipleMongooseToObject(breakfasts)
            }))
            .catch(next);
    }

    trashbreakfast(req, res, next) {
        Breakfast.findDeleted({})
            .then((breakfasts) =>
                res.render('admin/trash-menu', {
                    breakfasts: mutipleMongooseToObject(breakfasts),
                }),
            )
            .catch(next);
    }

    storedlunch(req, res, next) {
        Lunch.find({})
            .then(lunchs => res.render('admin/stored-menu', {
                lunchs: mutipleMongooseToObject(lunchs)
            }))
            .catch(next);
    }

    trashlunch(req, res, next) {
        Lunch.findDeleted({})
            .then((lunchs) =>
                res.render('admin/trash-menu', {
                    lunchs: mutipleMongooseToObject(lunchs),
                }),
            )
            .catch(next);
    }

    storeddrink(req, res, next) {
        Drink.find({})
            .then(drinks => res.render('admin/stored-menu', {
                drinks: mutipleMongooseToObject(drinks)
            }))
            .catch(next);
    }

    trashdrink(req, res, next) {
        Drink.findDeleted({})
            .then((drinks) =>
                res.render('admin/trash-menu', {
                    drinks: mutipleMongooseToObject(drinks),
                }),
            )
            .catch(next);
    }

    storedwinecard(req, res, next) {
        Winecard.find({})
            .then(winecards => res.render('admin/stored-menu', {
                winecards: mutipleMongooseToObject(winecards)
            }))
            .catch(next);
    }

    trashwinecard(req, res, next) {
        Winecard.findDeleted({})
            .then((winecards) =>
                res.render('admin/trash-menu', {
                    winecards: mutipleMongooseToObject(winecards),
                }),
            )
            .catch(next);
    }

    storeddinner(req, res, next) {
        Dinner.find({})
            .then(dinners => res.render('admin/stored-menu', {
                dinners: mutipleMongooseToObject(dinners)
            }))
            .catch(next);
    }

    trashdinner(req, res, next) {
        Dinner.findDeleted({})
            .then((dinners) =>
                res.render('admin/trash-menu', {
                    dinners: mutipleMongooseToObject(dinners),
                }),
            )
            .catch(next);
    }

    storeddessert(req, res, next) {
        Dessert.find({})
            .then(desserts => res.render('admin/stored-menu', {
                desserts: mutipleMongooseToObject(desserts)
            }))
            .catch(next);
    }

    trashdessert(req, res, next) {
        Dessert.findDeleted({})
            .then((desserts) =>
                res.render('admin/trash-menu', {
                    desserts: mutipleMongooseToObject(desserts),
                }),
            )
            .catch(next);
    }

}

module.exports = new AdminController;