const Food = require('../models/Food');
class ContactController {
    //create new contact
    index(req, res) {
        res.render('contact');
    }

    // post
    post(req, res) {
        res.send('');
    }

    // order(req, res, next) {
    //     const orderData = req.body;
    //     res.json(orderData);
    // }

}

module.exports = new ContactController;