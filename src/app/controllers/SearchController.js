const Food = require('../models/Food');
class SearchController {


    //[get] new
    search(req,res,next) {
        Food.find({}).lean()
            .then(foods => res.render('search', { foods }))
            .catch(next);
    }
}
module.exports = new SearchController;