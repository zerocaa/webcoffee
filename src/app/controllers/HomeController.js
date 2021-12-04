const Food = require('../models/Food');
class HomeController {


    //[get] new
    home(req,res,next) {
        Food.find({}).lean()
            .then(foods => res.render('home', { foods }))
            .catch(next);
    }
}
module.exports = new HomeController;